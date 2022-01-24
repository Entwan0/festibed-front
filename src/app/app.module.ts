import { BrowserModule } from '@angular/platform-browser';
import { inject, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {
  TUI_ANIMATIONS_DURATION,
  TUI_TEXTFIELD_LABEL_OUTSIDE,
  TuiButtonModule,
  TuiDropdownModule,
  TuiNotificationsModule,
  TuiScrollbarModule,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TuiRootModule } from '@taiga-ui/core';
import { TUI_FRENCH_LANGUAGE, TUI_LANGUAGE } from '@taiga-ui/i18n';
import { of } from 'rxjs';
import { QuillModule } from 'ngx-quill';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconModule } from '@visurel/iconify-angular';
import { TUI_IS_CYPRESS } from '@taiga-ui/cdk';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TuiScrollbarModule,
    BrowserAnimationsModule,
    TuiRootModule,
    AppRoutingModule,
    TuiNotificationsModule,
    QuillModule.forRoot(),
    IconModule,
    TuiButtonModule,
    TuiDropdownModule,
  ],
  providers: [
    {
      provide: TUI_ANIMATIONS_DURATION,
      useFactory: () => (inject(TUI_IS_CYPRESS) ? 0 : 300),
    },
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_FRENCH_LANGUAGE),
    },
    {
      provide: TUI_TEXTFIELD_LABEL_OUTSIDE,
      useValue: { labelOutside: true },
    },
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
