import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon;
  @Input() index;

  pokemonName;

  constructor() { }

  ngOnInit() {
    this.pokemonName = this.pokemon.name;
  }

}
