import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesSearchBarComponent } from './countries-search-bar.component';

describe('CountriesSearchBarComponent', () => {
  let component: CountriesSearchBarComponent;
  let fixture: ComponentFixture<CountriesSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesSearchBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
