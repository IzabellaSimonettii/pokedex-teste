import { AngulmarMaterialComponentsModule } from './angulmar-material-components.module';

describe('AngulmarMaterialComponentsModule', () => {
  let angulmarMaterialComponentsModule: AngulmarMaterialComponentsModule;

  beforeEach(() => {
    angulmarMaterialComponentsModule = new AngulmarMaterialComponentsModule();
  });

  it('should create an instance', () => {
    expect(angulmarMaterialComponentsModule).toBeTruthy();
  });
});
