import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-identity',
  templateUrl: './pokemon-identity.component.html',
  styleUrls: ['./pokemon-identity.component.scss']
})
export class PokemonIdentityComponent {
  @Input() pokemonIdentity;
  constructor() { }

}
