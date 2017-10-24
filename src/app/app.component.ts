import { Component, HostListener } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  content= '';
  title= 'Markit.';

  /*https://stackoverflow.com/questions/36763141/is-there-any-lifecycle-hook-like-window-onbeforeunload-in-angular2*/
  @HostListener('window:beforeunload', ['$event'])
  promptExitWarning($event) {
    $event.returnValue = 'Your data will be lost!';
  }

  onEditorInput(event) {
    this.content = event;
  }
}
