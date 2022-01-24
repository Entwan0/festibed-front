import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiNotification, TuiNotificationsService } from '@taiga-ui/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(private readonly notifSrv: TuiNotificationsService, private router: Router) {}

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.invalid) {
      this.notifSrv
        .show('Veuillez compléter le formulaire', {
          autoClose: 3000,
          label: 'Erreur de connexion',
          status: TuiNotification.Warning,
        })
        .subscribe();
      return;
    } else {
      this.router.navigateByUrl('/festival/listeFestival');
    }
  }
}
