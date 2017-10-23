import { Component, HostListener } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { AngularSplitModule } from 'angular-split';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  content= '';
  title= 'Markit.';

  @HostListener('window:beforeunload', ['$event'])
  promptExitWarning($event) {
    $event.returnValue = 'Your data will be lost!';
  }

  onEditorInput(event) {
    this.content = event;
  }
}
