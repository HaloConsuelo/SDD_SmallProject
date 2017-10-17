import { Component, Input, Output,
         OnInit, ViewChild, EventEmitter,
          AfterViewInit } from '@angular/core';
declare var ace: any;

import { ToolbarComponent } from '../toolbar/toolbar.component';


@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit, AfterViewInit {

    @Input() mode = 'markdown';
    @Input() autoUpdateContent = true;
    @Input() userInput = '';
    @Output() notifyEditorTextChanged:
        EventEmitter<string> = new EventEmitter();
    @ViewChild('editor') editor;

    ngOnInit(): void {
        this.editor._editor.$blockScrolling = Infinity;
    }

    onEditorTextChange(): void {
        this.notifyEditorTextChanged.emit(this.userInput);
    }

    ngAfterViewInit() {
        this.editor.getEditor().setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true
        });
    }
}
