import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodolistService } from '../../services/todolist/todolist.service';
import { Subscription } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../../models/todo.interface';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit, OnDestroy {
  todolist: Array<any> = [];
  todoInput: string = '';
  subscription = new Subscription();
  title = 'todolist-angular';
  isLoading = true;
  loadingMessage = 'loading...';

  constructor(private todolistService: TodolistService) {}

  ngOnInit(): void {
    this.subscription = this.todolistService
      .getTodos()
      .subscribe((data: any) => {
        this.todolist = data;
        this.isLoading = false;
      });
  }

  addTodo(title: string): void {
    this.todolistService.addTodo({
      userId: 1,
      id: 10000,
      title: title,
      completed: false,
    });
    this.todolist = [
      { userId: 1, id: uuidv4(), title: title, completed: false },
      ...this.todolist,
    ];
    this.todoInput = '';
  }

  removeTodo(id: number): void {
    this.todolistService.removeTodo(id);
    this.todolist = this.todolist.filter((todo) => todo.id + '' !== id + '');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
