import { TestBed, inject } from '@angular/core/testing';

import { GithubFolowersService } from './github-folowers.service';

describe('GithubFolowersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubFolowersService]
    });
  });

  it('should be created', inject([GithubFolowersService], (service: GithubFolowersService) => {
    expect(service).toBeTruthy();
  }));
});
