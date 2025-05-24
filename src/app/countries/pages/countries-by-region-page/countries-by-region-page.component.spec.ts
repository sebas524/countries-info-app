import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesByRegionPageComponent } from './countries-by-region-page.component';

describe('CountriesByRegionPageComponent', () => {
  let component: CountriesByRegionPageComponent;
  let fixture: ComponentFixture<CountriesByRegionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesByRegionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesByRegionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
