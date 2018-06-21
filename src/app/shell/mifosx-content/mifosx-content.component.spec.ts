import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MifosxContentComponent } from './mifosx-content.component';

describe('MifosxContentComponent', () => {
  let component: MifosxContentComponent;
  let fixture: ComponentFixture<MifosxContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MifosxContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MifosxContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
