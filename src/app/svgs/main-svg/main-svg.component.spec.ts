import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSvgComponent } from './main-svg.component';

describe('MainSvgComponent', () => {
  let component: MainSvgComponent;
  let fixture: ComponentFixture<MainSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
