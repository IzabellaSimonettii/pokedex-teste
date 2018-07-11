import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { PokedexRoutingModule } from './pokedex-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PokedexRoutingModule,
    SharedModule,
  ],
  declarations: [],
})
export class PokedexModule { }
