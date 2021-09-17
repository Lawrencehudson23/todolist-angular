import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { TodolistComponent } from './todolist.component';
import { TodolistService } from '../../services/todolist/todolist.service';
import { from, of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodolistComponent],
      imports: [HttpClientTestingModule, FormsModule],
    }).compileComponents(); //won't need this if build by webpack
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create todo', () => {
    expect(component).toBeTruthy();
  });

  // Test loading
  it('should display todo loading... if isLoading is true', () => {
    component.isLoading = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain(
      component.loadingMessage
    );
  });

  // Test getTodos services
  it('should fetch todos from the server', async () => {
    const todos = [
      {
        id: 1,
        title: 'a',
      },
      {
        id: 2,
        title: 'b',
      },
      {
        id: 3,
        title: 'c',
      },
    ];
    //Note Another way

    // const spy = jasmine.createSpyObj('HttpClient', {getTodos: todos});
    // const todolistService = new TodolistService(spy);

    const todolistService = fixture.debugElement.injector.get(TodolistService);
    const spy = spyOn(todolistService, 'getTodos').and.returnValues(of(todos));
    // component.ngOnInit();
    fixture.detectChanges();
    expect(component.todolist).toEqual(todos);
    // Note: if promise

    //  fixture.whenStable().then(() => {
    //   expect(component.todo).toEqual(component.todo)
    //   })
  });

  //Note: fakeAsync and tick

  // it('should fetch todos from the server', fakeAsync () => {
  //   const todos = [
  //     {
  //       id: 1,
  //       title: 'a',
  //     },
  //     {
  //       id: 2,
  //       title: 'b',
  //     },
  //     {
  //       id: 3,
  //       title: 'c',
  //     },
  //   ];
  //   const todolistService = fixture.debugElement.injector.get(TodolistService);
  //   const spy = spyOn(todolistService, 'getTodos').and.returnValues(of(todos));
  //   // component.ngOnInit();
  //   fixture.detectChanges();
  //   tick();
  //   expect(component.todo).toEqual(todos)
  // });
});
