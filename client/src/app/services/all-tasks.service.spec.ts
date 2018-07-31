import { TestBed, inject } from '@angular/core/testing';

import { AllTasksService } from './all-tasks.service';

describe('AllTasksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllTasksService]
    });
  });

  it('should be created', inject([AllTasksService], (service: AllTasksService) => {
    expect(service).toBeTruthy();
  }));
});
