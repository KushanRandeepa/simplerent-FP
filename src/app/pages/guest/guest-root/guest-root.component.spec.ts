import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestRootComponent } from './guest-root.component';

describe('GuestRootComponent', () => {
  let component: GuestRootComponent;
  let fixture: ComponentFixture<GuestRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestRootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
