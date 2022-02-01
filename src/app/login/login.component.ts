import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiNotification, TuiNotificationsService } from '@taiga-ui/core';
import { Router } from '@angular/router';
import { FacebookAuthService } from '../core/services/facebook-auth.service';
import { AuthService } from '../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

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

  constructor(
    private readonly notifSrv: TuiNotificationsService,
    private router: Router,
    public facebookAuthService: FacebookAuthService,
    private authSrv: AuthService,
  ) {}

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

    /* this.authSrv.login(this.f.username.value, this.f.password.value).subscribe({
      error: (e) => {
        if (e instanceof HttpErrorResponse) {
          if ([400, 401].includes(e.status)) {
            this.notifSrv
              .show('Login ou mot de passe invalide', {
                autoClose: 3000,
                label: 'Erreur de connexion',
                status: TuiNotification.Error,
              })
              .subscribe();
          }
        }
      },
    });*/
  }
}
