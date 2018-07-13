import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PokedexListComponent } from './components/pokedex-list/pokedex-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AngulmarMaterialComponentsModule } from '../angulmar-material-components/angulmar-material-components.module';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { DetalhesPokemonComponent } from './pages/detalhes-pokemon/detalhes-pokemon.component';
import { PokemonIdentityComponent } from './pages/detalhes-pokemon/components/pokemon-identity/pokemon-identity.component';
import { PokemonAbilitiesComponent } from './pages/detalhes-pokemon/components/pokemon-abilities/pokemon-abilities.component';
import { PokemonTypesComponent } from './pages/detalhes-pokemon/components/pokemon-types/pokemon-types.component';
import { PokemonStatsComponent } from './pages/detalhes-pokemon/components/pokemon-stats/pokemon-stats.component';
import { SharedModule } from '../shared/shared.module';

const declarated = [
  PokedexComponent,
  PokedexListComponent,
  PokemonDetailComponent,
  DetalhesPokemonComponent,
  PokemonIdentityComponent,
  PokemonAbilitiesComponent,
  PokemonTypesComponent,
  PokemonStatsComponent
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    PokedexRoutingModule,
    SharedModule,
    AngulmarMaterialComponentsModule
  ],
  declarations: [
    [...declarated]
  ],
})
export class PokedexModule { }
