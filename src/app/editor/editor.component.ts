import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserInput } from './EditorUserInput';

declare var ace: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements AfterViewInit {
    @ViewChild('editor') editor;
    text = '';
    ngAfterViewInit() {

        this.editor.getEditor().setOptions({
            enableBasicAutocompletion: true
        });

        this.editor.getEditor().commands.addCommand({
            name: 'showOtherCompletions',
            bindKey: 'Ctrl-.',
            exec: function (editor) {

            }
        });
    }
}
