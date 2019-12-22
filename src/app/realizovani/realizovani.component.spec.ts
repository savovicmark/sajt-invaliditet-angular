import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizovaniComponent } from './realizovani.component';

describe('RealizovaniComponent', () => {
  let component: RealizovaniComponent;
  let fixture: ComponentFixture<RealizovaniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizovaniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizovaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
