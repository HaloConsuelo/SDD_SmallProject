import { TestBed, async, ComponentFixtureAutoDetect, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [
        AppComponent
      ],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    }
  ).compileComponents();
  }));
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Markit.'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Markit.');
  }));

  it('should change content on editor input', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const editor = fixture.debugElement.nativeElement.querySelector('app-editor');
    fixture.detectChanges();
    let input = editor;
    input.value = 'Hello';
    input.dispatchEvent(new Event('notifyEditorTextChanged'));
    expect(app.content.target.value).toBe('Hello');
  }));

  it('should call the .onEditorInput method', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const editor = fixture.debugElement.nativeElement.querySelector('app-editor');
    fixture.detectChanges();
    spyOn(app, 'onEditorInput').and.callThrough();
    app.onEditorInput(new Event('onchange'));
    expect(app.onEditorInput).toHaveBeenCalled();
  });

  it('should have app.component and editor.userInput detect change', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const editor = fixture.debugElement.nativeElement.querySelector('app-editor');
    editor.userInput = 'Hello';
    app.onEditorInput(dispatchEvent(new Event('onchange')));
    expect([app.content, editor.userInput]).toBeTruthy();
  });
});
