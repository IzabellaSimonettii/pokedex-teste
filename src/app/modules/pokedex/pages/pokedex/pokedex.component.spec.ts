import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexComponent } from './pokedex.component';
import PokedexTestMock from './../../pokedex.module.test.mock';

describe('PokedexComponent', () => {
  let component: PokedexComponent;
  let fixture: ComponentFixture<PokedexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(PokedexTestMock)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
