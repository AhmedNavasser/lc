import { TestBed } from '@angular/core/testing';

import { ChangeThemeService } from './change-theme.service';

describe('ChangeThemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeThemeService = TestBed.get(ChangeThemeService);
    expect(service).toBeTruthy();
  });
});
