import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesLayoutComponent } from './countries-layout.component';

describe('CountriesLayoutComponent', () => {
  let component: CountriesLayoutComponent;
  let fixture: ComponentFixture<CountriesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
