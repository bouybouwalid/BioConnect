import { TestBed } from '@angular/core/testing';

import { YandexLoaderService } from './yandex-loader.service';

describe('YandexLoaderService', () => {
  let service: YandexLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YandexLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
