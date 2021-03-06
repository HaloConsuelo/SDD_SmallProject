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
import { DialogOverviewButtonComponent, PopupComponent } from './popup/popup.component';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EditorComponent } from './editor/editor.component';
import { PreviewComponent } from './preview/preview.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MaterialModule } from './material.module';
import { AngularSplitModule } from 'angular-split';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    EditorComponent,
    PreviewComponent,
    PopupComponent,
    NavMenuComponent,
    DialogOverviewButtonComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AceEditorModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularSplitModule,
  ],
  exports: [

  ],
  providers: [],
  entryComponents: [PopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
