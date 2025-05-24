import {Component, input} from '@angular/core';
import {Country} from '../../../interfaces/country.interface';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-country-info',
  imports: [DecimalPipe],
  templateUrl: './country-info.component.html',
  styleUrl: './country-info.component.css'
})
export class CountryInfoComponent {

  country = input.required<Country>()

}
