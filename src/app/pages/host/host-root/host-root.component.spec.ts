import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostRootComponent } from './host-root.component';

describe('HostRootComponent', () => {
  let component: HostRootComponent;
  let fixture: ComponentFixture<HostRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostRootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
