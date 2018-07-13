import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPokemonComponent } from './detalhes-pokemon.component';
import PokedexTestMock from './../../pokedex.module.test.mock';

describe('DetalhesPokemonComponent', () => {
  let component: DetalhesPokemonComponent;
  let fixture: ComponentFixture<DetalhesPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(PokedexTestMock)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
