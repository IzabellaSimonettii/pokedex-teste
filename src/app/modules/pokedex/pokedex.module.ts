import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PokedexListComponent } from './components/pokedex-list/pokedex-list.component';

@NgModule({
  imports: [
    CommonModule,
    PokedexRoutingModule
  ],
  declarations: [PokedexComponent, PokedexListComponent],
})
export class PokedexModule { }
