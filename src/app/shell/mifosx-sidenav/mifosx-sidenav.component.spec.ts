import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MifosxSidenavComponent } from './mifosx-sidenav.component';

describe('MifosxSidenavComponent', () => {
  let component: MifosxSidenavComponent;
  let fixture: ComponentFixture<MifosxSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MifosxSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MifosxSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
