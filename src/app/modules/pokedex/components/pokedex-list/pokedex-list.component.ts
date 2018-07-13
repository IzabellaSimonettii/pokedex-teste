import { Component, OnInit, OnDestroy } from '@angular/core';
import { listStateTrigger } from '../../../shared/helpers/animations';
import { PokedexService } from '../../../../services/pokedex/pokedex.service';
import { Subscription } from '../../../../../../node_modules/rxjs';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
  animations: [listStateTrigger]
})
export class PokedexListComponent implements OnInit, OnDestroy {
  pokemonsList;
  totalPokemons;
  pokemonPerPage = 20;
  requestBody;
  nextRequest;
  prevRequest;
  fixPagination = false;
  isLoading = false;
  private pokemonRequest: Subscription;

  constructor(
    private pokedexService: PokedexService
  ) {}

  ngOnInit() {
    window.addEventListener('scroll', (e) => {
      if (window.pageYOffset > 100) {
        this.fixPagination = true;
      } else {
        this.fixPagination = false;
      }
    });
    this.handleSpinner();
    this.pokedexService.getAllPokemons();
    this.requestAllPokemons();
  }

  ngOnDestroy() {
    this.pokemonRequest.unsubscribe();
  }

  requestAllPokemons() {
   this.pokemonRequest = this.pokedexService.getPokemonsUptoDateListerner().subscribe((resp: any) => {
      this.handleSpinner();
      this.pokemonsList = resp.pokemons;
      this.totalPokemons = resp.count;
      this.requestBody = resp.next;

      const nextPokemons = resp.next;
      const nextPokemonsSplited = nextPokemons.split('&');
      const requestOffset = nextPokemonsSplited[1].split('=');
      this.requestBody = requestOffset;
    });
  }

  handleSpinner() {
    this.isLoading = !this.isLoading;
  }

  handleNextRequest() {
    this.handleSpinner();
    this.pokedexService.getAllPokemons(this.requestBody[1]);
  }

  handlePrevRequest() {
    this.handleSpinner();
    const previous = this.requestBody[1] - 40;
    this.prevRequest = previous;
    this.pokedexService.getAllPokemons(this.prevRequest);
  }

}
