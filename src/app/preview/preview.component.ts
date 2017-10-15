import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { EditorComponent } from '../editor/editor.component';

import {MarkdownService} from '../services/markdown-service.service';

import * as marked from 'marked';

@Component({
  selector: 'app-preview',
  template: `<h2>Preview</h2>
  <div [innerHTML]="convertedData">
  </div>`,
  providers: [MarkdownService]
})

export class PreviewComponent implements OnChanges {
    @Input('data')
    data = '';
    convertedData: string;

    constructor(private markdown: MarkdownService) {
    }

    ngOnChanges() {
      console.log(this.data);
      this.convertedData = this.markdown.convert(this.data);
    }
  }
