import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyPanelComponent } from './sticky-panel.component';

describe('StickyPanelComponent', () => {
  let component: StickyPanelComponent;
  let fixture: ComponentFixture<StickyPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
