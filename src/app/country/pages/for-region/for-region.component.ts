import { Component } from '@angular/core';
import { Country } from '../../interfaces/contry.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-region',
  templateUrl: './for-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class ForRegionComponent {
  regiones: string[] = ['africa', 'america', 'asia', 'europe', 'oceania'];
  regionActive: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  getClaseCSS(region: string) {
    return region === this.regionActive
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activeRegion(region: string) {
    if (region === this.regionActive) return;
    this.regionActive = region;
    this.countries = [];

    this.countryService
      .searchRegion(this.regionActive)
      .subscribe((respCountries) => {
        this.countries = respCountries;
      });

    // console.log(this.regionActive);
  }
}
