import { Component } from '@angular/core';
import { Country } from '../../interfaces/contry.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styles: [],
})
export class ForCountryComponent {
  term: string = '';
  hayError: Boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  suggestions(term: string) {
    this.hayError = false;
    this.term = term;
  }

  search(term: string) {
    this.term = term;
    if (this.term.trim().length === 0) return;
    this.countryService.searchCountry(this.term).subscribe(
      (respCountries) => {
        this.hayError = false;
        this.countries = respCountries;
      },
      (err) => {
        this.hayError = true;
        this.countries = [];
      }
    );
  }
}
