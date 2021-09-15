import { TestBed } from '@angular/core/testing';

import { TodolistService } from './todolist.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TodolistService', () => {
  let service: TodolistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TodolistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
