import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketRoutingModule } from './festival.routing';
import { FestivalListComponent } from './pages/listFestival/list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiDialogModule,
  TuiDropdownModule,
  TuiLabelModule,
  TuiLoaderModule,
  TuiNotificationModule,
  TuiNotificationsModule,
  TuiRootModule,
  TuiScrollbarModule,
  TuiSvgModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  TuiDataListWrapperModule,
  TuiDropdownSelectionModule,
  TuiInputFileModule,
  TuiInputModule,
  TuiInputNumberModule,
  TuiInputPasswordModule,
  TuiLineClampModule,
  TuiSelectModule,
  TuiSliderModule,
  TuiTextAreaModule,
} from '@taiga-ui/kit';
import { PolymorpheusModule } from '@tinkoff/ng-polymorpheus';
import { FestivalComponent } from './pages/festival.component';
import { IconModule } from '@visurel/iconify-angular';
import { QuillModule } from 'ngx-quill';
import { LogementListComponent } from './pages/listLogement/list.component';
import { FestivalFormComponent } from './pages/formFestival/form.component';
import { PanierFormComponent } from './pages/panier/panier.component';
import {TuiLetModule} from "@taiga-ui/cdk";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    FestivalComponent,
    FestivalListComponent,
    FestivalComponent,
    LogementListComponent,
    FestivalFormComponent,
    PanierFormComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    InfiniteScrollModule,
    TuiTableModule,
    TuiRootModule,
    TuiLoaderModule,
    TuiScrollbarModule,
    TuiInputModule,
    FormsModule,
    ReactiveFormsModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiTextfieldControllerModule,
    TuiNotificationsModule,
    TuiDialogModule,
    TuiButtonModule,
    TuiInputFileModule,
    TuiTextAreaModule,
    TuiNotificationModule,
    PolymorpheusModule,
    TuiInputPasswordModule,
    TicketRoutingModule,
    TuiSvgModule,
    IconModule,
    TuiDropdownModule,
    TuiDropdownSelectionModule,
    TuiLetModule,
    TuiLabelModule,
    TuiSliderModule,
    TuiLineClampModule,
    QuillModule,
    TuiInputNumberModule,
    MatGridListModule,
  ],
})
export class FestivalModule {}
