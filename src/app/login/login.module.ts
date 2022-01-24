import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiModeModule,
  TuiSvgModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiModeModule,
  ],
})
export class LoginModule {}
