import { TestBed, inject } from '@angular/core/testing';

import { MarkdownService } from './markdown-service.service';
import { IMarkdownConfig } from './markdown-service.service';

import * as marked from 'marked';

describe('Service: MarkdownService', () => {
  class Config implements IMarkdownConfig {

  }
  const emptyString = '';
  const h1Example = `# testing for h1 tag`;
  const boldExample = `*bold*`;
  const badExample = null;
  const goodExample = `basic example.`;
  let configuration: IMarkdownConfig;
  configuration = { sanitize: false, smartypants: true, gfm: true, breaks: true};
  let service: MarkdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarkdownService]
    });
    service = new MarkdownService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get markdown', () => {
    expect(service.convert(emptyString)).toBeDefined();
  });

  it('should return an empty string if an empty string was passed in', () => {
    expect(service.convert(emptyString)).toEqual('');
  });

  it('should return an empty string if a null string was passed in', () => {
    expect(service.convert(null)).toEqual('');
  });

  it('should return an h1 element if an string with # was passed in', () => {
    expect(service.convert(h1Example)).toContain('h1');
  });
  it('should return an b element if an string with * was passed in', () => {
    expect(service.convert(boldExample)).toContain('b');
  });
});
