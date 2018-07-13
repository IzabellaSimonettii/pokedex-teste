import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonIdentityComponent } from './pokemon-identity.component';

describe('PokemonIdentityComponent', () => {
  let component: PokemonIdentityComponent;
  let fixture: ComponentFixture<PokemonIdentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonIdentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
