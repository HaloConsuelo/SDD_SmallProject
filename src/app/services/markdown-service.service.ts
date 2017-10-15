import { Injectable } from '@angular/core';

import * as marked from 'marked';
import highlight from 'highlight.js';

/**
 * Marked library configuration interface.
 * @interface IMarkdownConfig
 */
export interface IMarkdownConfig {
  /**
   * Sanitize the output.
   * Ignore any HTML that has been input.
   * @type {boolean}
   * @memberof IMarkdownConfig
   */
  sanitize?: boolean;
  /**
   * Enable Github flavored markdown.
   * @type {boolean}
   * @memberof IMarkdownConfig
   */
  gfm?: boolean;
  /**
   *  Enables GFM line breaks.
   * @type {boolean}
   * @memberof IMarkdownConfig
   */
  breaks?: boolean;
  /**
   * use "smart" typographic punctuation for things like
   * quotes and dashes
   * @type {boolean}
   * @memberof IMarkdownConfig
   */
  smartypants?: boolean;
}

/**
 * This is a service that allows configuration
 * and usage of the markdown parser, marked.
 * @class MarkdownService
 */
@Injectable()
export class MarkdownService {
  private md: any;
  private defaultConfig: IMarkdownConfig = {
    sanitize: false, smartypants: true, gfm: true, breaks: true
  };

  constructor() {
    this.md = marked.setOptions(this.defaultConfig);
  }

  setConfig(config: IMarkdownConfig) {
   this.md = marked.setOptions(config);
  }

  convert(markdown: string): string {
    if (!markdown) {
      return '';
    } else {
    return marked(markdown, function (err, content) {
      if (err) {
        throw err;
      }
      return content;
    });
  }}
}
