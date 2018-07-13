import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const exportds = [
  HeaderComponent,
  FooterComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    [...exportds]
  ],
  declarations: [
    [...exportds]
  ]
})
export class SharedModule { }
