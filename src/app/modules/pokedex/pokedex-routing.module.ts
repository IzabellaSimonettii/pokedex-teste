import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { DetalhesPokemonComponent } from './pages/detalhes-pokemon/detalhes-pokemon.component';

const routes: Routes = [
  { path: '', component: PokedexComponent},
  { path: 'detalhes/:pokemonId', component: DetalhesPokemonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
