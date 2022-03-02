import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/contry.interfaces';

@Component({
  selector: 'app-county-table',
  templateUrl: './county-table.component.html',
})
export class CountyTableComponent {
  @Input() countries: Country[] = [];
  constructor() {}
}
