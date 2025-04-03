import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loginUSerGuard } from './login-user.guard';

describe('loginUSerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginUSerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
