import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VijestiComponent } from './vijesti.component';

describe('VijestiComponent', () => {
  let component: VijestiComponent;
  let fixture: ComponentFixture<VijestiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VijestiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VijestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
