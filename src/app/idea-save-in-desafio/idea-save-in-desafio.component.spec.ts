import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaSaveInDesafioComponent } from './idea-save-in-desafio.component';

describe('IdeaSaveInDesafioComponent', () => {
  let component: IdeaSaveInDesafioComponent;
  let fixture: ComponentFixture<IdeaSaveInDesafioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaSaveInDesafioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaSaveInDesafioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
