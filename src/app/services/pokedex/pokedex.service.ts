import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private pokemons;
  private pokemonsUpdated = new Subject();

  constructor(
    private httpClient: HttpClient
  ) {}

  getAllPokemons(offset?: number) {
    let queryParams;
    if (offset) {
      queryParams = `?limit=20&offset=${offset}`;
    } else {
      queryParams = '';
    }

    this.httpClient
      .get < {
        count: number,
        next: any,
        previous: any,
        results: any[]
      } >
      (environment.apiPath + queryParams)
      .subscribe((pokemonsData) => {
        this.pokemons = pokemonsData.results;
        this.pokemonsUpdated.next({
          pokemons: [...this.pokemons],
          count: pokemonsData.count,
          next: pokemonsData.next,
          previous: pokemonsData.previous
        });
      });
  }

  getOnePokemon(id: number) {
    return this.httpClient.get(environment.apiPath + id);
  }

  getPokemonsUptoDateListerner() {
    return this.pokemonsUpdated.asObservable();
  }
}
