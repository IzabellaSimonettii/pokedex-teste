import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatPaginatorModule, MatButtonModule, MatProgressSpinnerModule, MatProgressBarModule, MatTooltipModule } from '@angular/material';
const exportds = [MatPaginatorModule, MatButtonModule, MatProgressSpinnerModule, MatProgressBarModule, MatTooltipModule];

@NgModule({
  imports: [
    CommonModule,
    [...exportds]
  ],
  exports: [
    [...exportds]
  ],
  declarations: []
})
export class AngulmarMaterialComponentsModule { }
