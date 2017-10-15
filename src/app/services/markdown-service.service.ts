import { Injectable } from '@angular/core';

import marked from 'marked';
import highlight from 'highlight.js';

const markdownString = '```js\n console.log("hello"); \n```';

// Using async version of marked
marked(markdownString, function (err, content) {
  if (err) {throw err; }
  console.log(content);
});

console.log(marked(markdownString));

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
