import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { EditorComponent } from '../editor/editor.component';

import {MarkdownService} from '../services/markdown-service.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
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
