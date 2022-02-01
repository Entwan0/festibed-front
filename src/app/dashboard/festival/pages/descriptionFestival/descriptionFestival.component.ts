import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TuiDay } from '@taiga-ui/cdk';
import { FormControl, FormGroup } from '@angular/forms';
import { FestivalService } from '../../../../core/services/festival.service';
import { FestivalAPI } from '../../../../core/model/api/festival';

@Component({
  templateUrl: './descriptionFestival.component.html',
  styleUrls: ['./descriptionFestival.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionFestivalComponent implements OnInit {
  id: string | undefined;

  festival: Partial<FestivalAPI> = {};

  readonly form = new FormGroup({
    nom: new FormControl(null),
    dateDebut: new FormControl(null),
    dateFin: new FormControl(null),
    description: new FormControl(null),
    duree: new FormControl(null),
    site: new FormControl(null),
    coordonnes: new FormControl(null),
    moisHabituel: new FormControl(null),
    prixPass: new FormControl(null),
    adresse: new FormControl(null),
    commune: new FormControl(null),
  });

  constructor(private route: ActivatedRoute, private festivalSrv: FestivalService) {}

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id') ?? 'new');

    this.festivalSrv.getById(id).subscribe((festival) => {
      this.festival = festival;

      this.form.patchValue({
        nom: this.festival.nomManifestation,
        dateDebut: this.festival.dateDebut,
        dateFin: this.festival.dateFin,
        description: this.festival.commentaire,
        duree: this.festival.duree,
        site: this.festival.site,
        coordonnes: this.festival.coordonnees,
        moisHabituel: this.festival.moisHabituel,
        prixPass: this.festival.prixPass,
        adresse: this.festival.adresse,
        commune: this.festival.commune?.nomCommune,
      });
    });
  }
}
