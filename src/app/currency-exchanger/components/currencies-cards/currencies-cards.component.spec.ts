import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesCardsComponent } from './currencies-cards.component';

describe('CurrenciesCardsComponent', () => {
  let component: CurrenciesCardsComponent;
  let fixture: ComponentFixture<CurrenciesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrenciesCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
