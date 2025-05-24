import {Component, input} from '@angular/core';
import {Country} from '../../interfaces/country.interface';
import {DecimalPipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-countries-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.css'
})
export class CountriesListComponent {

  countries = input<Country[]>()


  errorMsg = input<string | unknown | null>()
  isLoading = input<boolean>(false)
  isEmpty = input<boolean>(false)


}
