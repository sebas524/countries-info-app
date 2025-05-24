import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesCountryInfoPageComponent } from './countries-country-info-page.component';

describe('CountriesCountryInfoPageComponent', () => {
  let component: CountriesCountryInfoPageComponent;
  let fixture: ComponentFixture<CountriesCountryInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesCountryInfoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesCountryInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
