import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesMenuComponent } from './countries-menu.component';

describe('CountriesMenuComponent', () => {
  let component: CountriesMenuComponent;
  let fixture: ComponentFixture<CountriesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
