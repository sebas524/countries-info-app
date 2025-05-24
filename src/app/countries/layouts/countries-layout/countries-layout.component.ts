import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from '../../../shared/components/footer/footer.component';
import {CountriesMenuComponent} from '../../components/countries-menu/countries-menu.component';

@Component({
  selector: 'app-countries-layout',
  imports: [RouterOutlet, CountriesMenuComponent],
  templateUrl: './countries-layout.component.html',
  styleUrl: './countries-layout.component.css'
})
export class CountriesLayoutComponent {

}
