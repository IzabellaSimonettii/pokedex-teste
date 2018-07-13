import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { listStateTrigger } from '../../../../../shared/helpers/animations';

@Component({
  selector: 'app-pokemon-types',
  templateUrl: './pokemon-types.component.html',
  styleUrls: ['./pokemon-types.component.scss'],
  animations: [listStateTrigger]
})
export class PokemonTypesComponent implements OnInit, OnChanges {
  @Input() pokemonTypes;
  isLoading = false;
  constructor() { }

  ngOnInit() {
    this.isLoading = true;
  }

  ngOnChanges() {
    this.isLoading = false;
  }

}
