import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  content: string;
  title= 'Markit.';

  onEditorInput(event) {
    this.content = event;
  }
//  myData: Array<any>;

  // constructor(private http: Http) {
  //   this.http.get('https://jsonplaceholder.typicode.com/photos')
  //   .map(response => response.json())
  //   .subscribe(res => this.myData = res);
  // }
}
