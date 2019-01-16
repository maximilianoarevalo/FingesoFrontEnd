import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioSaveComponent } from './desafio-save.component';

describe('DesafioSaveComponent', () => {
  let component: DesafioSaveComponent;
  let fixture: ComponentFixture<DesafioSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesafioSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesafioSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
