import { DemandsModule } from './demands.module';

describe('DemandsModule', () => {
  let demandsModule: DemandsModule;

  beforeEach(() => {
    demandsModule = new DemandsModule();
  });

  it('should create an instance', () => {
    expect(demandsModule).toBeTruthy();
  });
});
