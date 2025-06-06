import { Component, effect, input, linkedSignal, output } from '@angular/core';

@Component({
  selector: 'app-countries-search-bar',
  imports: [],
  templateUrl: './countries-search-bar.component.html',
  styleUrl: './countries-search-bar.component.css',
})
export class CountriesSearchBarComponent {
  placeholder = input('Search...');

  value = output<string>();
  initialValue = input<string>();

  inputValue = linkedSignal<string>(() => this.initialValue() ?? '');

  debounceEffect = effect((onCleanup) => {
    // this here is what effect will keep track of everytime it changes:
    const value = this.inputValue();
    const timeout = setTimeout(() => {
      this.value.emit(value);
    }, 500);

    onCleanup(() => {
      clearTimeout(timeout);
    });
  });
}
