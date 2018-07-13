import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { listStateTrigger } from '../../../../../shared/helpers/animations';

@Component({
  selector: 'app-pokemon-abilities',
  templateUrl: './pokemon-abilities.component.html',
  styleUrls: ['./pokemon-abilities.component.scss'],
  animations: [listStateTrigger]
})
export class PokemonAbilitiesComponent implements OnInit, OnChanges {
  @Input() pokemonAbilities;
  isLoading = false;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
  }

  ngOnChanges() {
    this.isLoading = false;
  }

}
