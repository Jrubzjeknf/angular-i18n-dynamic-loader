import { TestBed } from '@angular/core/testing';

import { TranslationLoaderService } from './translation-loader.service';

describe('TranslationLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranslationLoaderService = TestBed.get(TranslationLoaderService);
    expect(service).toBeTruthy();
  });
});
