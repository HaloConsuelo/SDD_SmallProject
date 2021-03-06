import { Component, HostListener, Input } from '@angular/core';
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
  title = 'Markit.';
  @Input('isChecked')
  isChecked= false;

  @HostListener('window:beforeunload', ['$event'])
  promptExitWarning($event) {
    $event.returnValue = 'Your data will be lost!';
  }

  onEditorInput(event) {
    this.content = event;
  }

  onChecked(): void {
    this.isChecked = true;
    setTimeout(function() {
        this.edited = false;
        console.log(this.edited);
    }.bind(this), 3000);
   }
}
