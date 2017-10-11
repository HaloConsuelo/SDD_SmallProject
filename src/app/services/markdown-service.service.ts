import { Injectable } from '@angular/core';

import marked from 'marked';

interface IMarkdownConfig {
  sanitize?: boolean;
  gfm?: boolean;
  breaks?: boolean;
  smartypants?: boolean;
}

@Injectable()
export class MarkdownService {
  private md: any;

  constructor() {
    this.md = marked.setOptions({});
  }

  setConfig(config: IMarkdownConfig) {
   this.md = marked.setOptions(config);
  }

  convert(markdown: string): string {
    if (!markdown) {
      return '';
    }
    return this.md.parse(markdown);
  }
}
