/* Angular specific imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { CdkTableModule } from '@angular/cdk/table';
/* external imports */
import { AceEditorModule } from 'ng2-ace-editor';
/* SDD_SMALLPROJECT components */
import { PopupButtonComponent, PopupComponent } from './popup/popup.component';
import { SidenavButtonComponent, SidenavComponent } from './sidenav/sidenav.component';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EditorComponent } from './editor/editor.component';
import { PreviewComponent } from './preview/preview.component';
/* Angular Material design imports, see: https://material.angular.io */
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    EditorComponent,
    PreviewComponent,
    PopupButtonComponent,
    PopupComponent,
    SidenavButtonComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AceEditorModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSidenavModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule
  ],
  providers: [],
  entryComponents: [PopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
