import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesByCountryPageComponent } from './countries-by-country-page.component';

describe('CountriesByCountryPageComponent', () => {
  let component: CountriesByCountryPageComponent;
  let fixture: ComponentFixture<CountriesByCountryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesByCountryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesByCountryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
