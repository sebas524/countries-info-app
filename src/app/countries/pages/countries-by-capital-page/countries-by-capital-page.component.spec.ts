import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesByCapitalPageComponent } from './countries-by-capital-page.component';

describe('CountriesByCapitalPageComponent', () => {
  let component: CountriesByCapitalPageComponent;
  let fixture: ComponentFixture<CountriesByCapitalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesByCapitalPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesByCapitalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
