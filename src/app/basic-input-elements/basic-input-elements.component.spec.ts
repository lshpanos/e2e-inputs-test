import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInputElementsComponent } from './basic-input-elements.component';

describe('BasicInputElementsComponent', () => {
  let component: BasicInputElementsComponent;
  let fixture: ComponentFixture<BasicInputElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicInputElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInputElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
