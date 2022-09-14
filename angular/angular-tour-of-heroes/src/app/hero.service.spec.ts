import { HeroService } from './hero.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MessageService } from './message.service';
import { TestBed } from '@angular/core/testing';
import { Hero } from './hero';

describe('Hero Service', () => {
  let heroService: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [HeroService, MessageService]
    });
    heroService = TestBed.inject(HeroService)
});

  it('should exist', () => {
    expect(heroService).toBeTruthy();
  });
});
