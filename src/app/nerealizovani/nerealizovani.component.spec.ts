import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NerealizovaniComponent } from './nerealizovani.component';

describe('NerealizovaniComponent', () => {
  let component: NerealizovaniComponent;
  let fixture: ComponentFixture<NerealizovaniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NerealizovaniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NerealizovaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
