import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../state/todo/todo.state';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get(this.url);
  }

  addTodo(todo: Todo): void {
    this.http.post(this.url, todo);
  }

  removeTodo(id: number): void {
    this.http.delete([this.url, +id].join('/'));
  }
}
