import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PokedexService } from '../../../../services/pokedex/pokedex.service';
import { Subscription } from '../../../../../../node_modules/rxjs';

@Component({
  selector: 'app-detalhes-pokemon',
  templateUrl: './detalhes-pokemon.component.html',
  styleUrls: ['./detalhes-pokemon.component.scss']
})
export class DetalhesPokemonComponent implements OnInit, OnDestroy {
  pokemonId;
  pokemonAbilities = {};
  pokemonStats = {};
  pokemonTypes = {};
  pokemonIdentity = { name: '', height: '', weight: '' };
  private pokemonRequest: Subscription;
  constructor(
    public route: ActivatedRoute,
    private pokedexService: PokedexService
  ) { }

  ngOnInit() {
    this.getPokemonId();
  }

  ngOnDestroy() {
    this.pokemonRequest.unsubscribe();
  }

  getPokemonId() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.pokemonId = paramMap.get('pokemonId');
      this.getPokemonDetails(this.pokemonId);
    });
  }

  getPokemonDetails(id: number) {
    this.pokemonRequest = this.pokedexService.getOnePokemon(id).subscribe((pokemonDetails: any) => {
      this.pokemonIdentity.name = pokemonDetails.name;
      this.pokemonIdentity.height = pokemonDetails.height;
      this.pokemonIdentity.weight = pokemonDetails.weight;

      this.pokemonAbilities = pokemonDetails.abilities;
      this.pokemonStats = pokemonDetails.stats;
      this.pokemonTypes = pokemonDetails.types;
    });
  }

}
