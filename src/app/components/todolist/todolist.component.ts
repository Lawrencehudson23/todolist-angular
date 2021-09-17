import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodolistService } from '../../services/todolist/todolist.service';
import { Observable, Subscription } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { select, Store } from '@ngrx/store';
import { Todo } from '../../state/todo/todo.state';
import { getTodos } from '../../state/todo/todo.actions';
import { selectTodos, selectTodoState } from '../../state/todo/todo.selectors';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit, OnDestroy {
  todolist$!: Observable<Todo[]>;
  todoInput: string = '';
  subscription = new Subscription();
  title = 'todo-angular';
  isLoading = true;
  loadingMessage = 'loading...';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getTodos());
    this.todolist$ = this.store.pipe(select(selectTodos));
    this.isLoading = false;
  }

  addTodo(title: string): void {
    // this.todolistService.addTodo({
    //   userId: 1,
    //   id: 10000,
    //   title: title,
    //   completed: false,
    // });
    // this.todolist = [
    //   { userId: 1, id: uuidv4(), title: title, completed: false },
    //   ...this.todolist,
    // ];
    // this.todoInput = '';
  }

  removeTodo(id: number): void {
    // this.todolistService.removeTodo(id);
    // this.todolist = this.todolist.filter((todo) => todo.id + '' !== id + '');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
