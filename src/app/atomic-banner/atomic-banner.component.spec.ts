import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicBannerComponent } from './atomic-banner.component';

describe('AtomicBannerComponent', () => {
  let component: AtomicBannerComponent;
  let fixture: ComponentFixture<AtomicBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomicBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomicBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
