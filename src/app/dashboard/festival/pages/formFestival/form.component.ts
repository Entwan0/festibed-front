import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  CategoryService,
  PriorityService,
  TagService,
  TicketService,
} from '../../../../core/services';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketAPI } from '../../../../core/model';
import { FormHelper } from '../../../../core/helpers';
import { environment } from '../../../../../environments/environment';
import { BehaviorSubject, share, skip, switchMap } from 'rxjs';
import { TuiFileLike } from '@taiga-ui/kit';
import { difference, merge } from 'lodash-es';
import { ProjectService } from '../../../../core/services/project.service';

@Component({
  selector: 'app-ticket-list-item,[ticket]',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FestivalFormComponent implements OnInit {
  readonly categories$ = this.categorySrv.list().pipe(share());

  readonly priorities$ = this.prioritiesSrv.list().pipe(share());

  readonly submitted$ = new BehaviorSubject(false);

  readonly tags$ = this.tagSrv.list().pipe(share());

  form = new FormGroup({
    attachments: new FormControl([]),
    category: new FormControl(null, [Validators.required]),
    tag: new FormControl(null, [Validators.required]),
    priority: new FormControl(null, [Validators.required]),
    title: new FormControl(null, [Validators.required]),
    details: new FormControl(null, [Validators.required]),
    project: new FormControl(),
  });

  previousAttachments: TuiFileLike[] = [];

  readonly = false;

  ticket: Partial<TicketAPI> = {};

  constructor(
    private categorySrv: CategoryService,
    private prioritiesSrv: PriorityService,
    private route: ActivatedRoute,
    private router: Router,
    private tagSrv: TagService,
    private ticketSrv: TicketService,
    private projectSrv: ProjectService,
  ) {}

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id') ?? 'new');

    // If ID is NaN, then it's a new ticket and we don't need to do anything
    if (isNaN(id)) {
      return;
    }

    this.route.paramMap
      .pipe(
        skip(1), // Skip first emit because we already got it (id)
      )
      .subscribe((paramMap) => {
        if (paramMap.get('id') !== 'new') {
          throw new Error('#3422');
        }

        this.ticket = {};
        this.previousAttachments = [];
        this.readonly = false;

        // Default values
        this.form.patchValue({
          attachments: [],
          category: null,
          tag: null,
          priority: null,
          title: null,
          details: null,
          status: null,
        });
      });

    this.ticketSrv.getOneWithId(id).subscribe((ticket) => {
      this.ticket = ticket;

      this.previousAttachments = ticket.attachments.map((attach) => ({
        name: attach.name,
        src: environment.api.url + '/attachments/' + attach.id,
      }));

      this.f.attachments.setValue(this.previousAttachments);

      this.readonly = this.ticket.readonly ?? false;

      this.categories$.subscribe((categories) => {
        this.f.category.setValue(categories.find((cat) => ticket.category.id === cat.id));
      });

      this.tags$.subscribe((tags) => {
        this.f.tag.setValue(tags.find((tag) => ticket.tag.id === tag.id));
      });

      this.priorities$.subscribe((priorities) => {
        this.f.priority.setValue(priorities.find((priority) => ticket.priority.id === priority.id));
      });

      this.form.patchValue({
        status: this.ticket.status,
        title: this.ticket.title,
        details: this.ticket.details,
      });
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.readonly) {
      return;
    }

    if (this.form.invalid) {
      FormHelper.markErrors(this.form);
      return;
    }

    this.submitted$.next(true);

    merge(this.ticket, this.form.value);
    delete this.ticket.attachments;

    if (this.f.category.value.externalId === '1') {
      this.ticket.project = this.f.project.value.id;
      this.ticket.software = this.f.project.value.software.id;
      this.ticket.softwareVersion = this.f.project.value.lastSoftwareVersion.id;
    }

    // If ticket isn't new
    if (this.ticket.id) {
      const addedFiles = difference(this.f.attachments.value, this.previousAttachments) as File[];
      const removedFiles = difference(this.previousAttachments, this.f.attachments.value);
      this.ticketSrv.replace(this.ticket as TicketAPI, addedFiles, removedFiles).subscribe(() => {
        void this.router.navigateByUrl('/ticket/list');
      });
    } else {
      this.ticketSrv.post(this.ticket as TicketAPI, this.f.attachments.value).subscribe(() => {
        void this.router.navigateByUrl('/ticket/list');
      });
    }
  }
}
