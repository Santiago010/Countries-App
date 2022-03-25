import { Component } from '@angular/core';
import { Country } from '../../interfaces/contry.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ForCountryComponent {
  term: string = '';
  hayError: Boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];

  constructor(private countryService: CountryService) {}

  suggestions(term: string) {
    this.hayError = false;
    this.term = term;

    this.countryService.searchCountry(term).subscribe(
      (respCountries) => (this.suggestedCountries = respCountries.splice(0, 5)),
      (err) => (this.suggestedCountries = [])
    );
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
