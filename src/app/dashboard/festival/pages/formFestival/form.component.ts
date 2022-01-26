import { FormGroup } from '@angular/forms';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormHelper } from '../../../../core/helpers';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-ticket-list-item,[ticket]',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FestivalFormComponent {
  readonly submitted$ = new BehaviorSubject(false);

  form = new FormGroup({});

  readonly = false;

  constructor() {}

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

    //Todo
  }
}
