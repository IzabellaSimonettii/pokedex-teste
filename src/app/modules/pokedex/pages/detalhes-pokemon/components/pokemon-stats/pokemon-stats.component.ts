import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { listStateTrigger } from '../../../../../shared/helpers/animations';

@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.scss'],
  animations: [listStateTrigger]
})
export class PokemonStatsComponent implements OnInit, OnChanges {
  @Input() pokemonStats;
  isLoading = false;
  constructor() { }
  ngOnInit() {
    this.isLoading = true;
  }
  ngOnChanges() {
    this.isLoading = false;
  }
}
