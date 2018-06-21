import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MifosxToolbarComponent } from './mifosx-toolbar.component';

describe('MifosxToolbarComponent', () => {
  let component: MifosxToolbarComponent;
  let fixture: ComponentFixture<MifosxToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MifosxToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MifosxToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
