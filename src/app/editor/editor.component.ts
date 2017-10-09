import { Component, Input, OnInit } from '@angular/core';
import { UserInput } from './EditorUserInput';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})



export class EditorComponent implements OnInit {
  @Input() input: UserInput;
  constructor() { }

submitted = false;
ngOnInit() {}
onSubmit() { this.submitted = true; }

}
