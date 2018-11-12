import { DemandsRoutingModule } from './demands-routing.module';

describe('DemandsRoutingModule', () => {
  let demandsRoutingModule: DemandsRoutingModule;

  beforeEach(() => {
    demandsRoutingModule = new DemandsRoutingModule();
  });

  it('should create an instance', () => {
    expect(demandsRoutingModule).toBeTruthy();
  });
});
