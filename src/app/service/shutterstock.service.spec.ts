import { TestBed } from '@angular/core/testing';
import { ShutterstockService } from './shutterstock.service';

describe('ShutterstockService', () => {
  let service: ShutterstockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShutterstockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
