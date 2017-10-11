import { Component, OnInit, Input } from '@angular/core';
import { EditorComponent } from '../editor/editor.component';

import {MarkdownService} from '../services/markdown-service.service';

import marked from 'marked';

@Component({
  selector: 'app-preview',
  template: `<h2>Preview</h2>
  <div [innerHTML]="convertedData">
  </div>`
})

export class PreviewComponent {
    @Input('data')
    data: string;
    convertedData: string;
    md: any;
    
    ngOnChanges() {
      this.md = marked.setOptions({});
      this.convertedData = this.md.parse(this.data);
    }
  }
