import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaSaveComponent } from './idea-save.component';

describe('IdeaSaveComponent', () => {
  let component: IdeaSaveComponent;
  let fixture: ComponentFixture<IdeaSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
