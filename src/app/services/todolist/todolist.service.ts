import { Injectable } from "@angular/core";
import { Observable, Subject, Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TodolistService {
  url = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) {}

  getTodos(): Observable<any> {
    return this.http.get(this.url).pipe(
      map((data: any) => {
        const fixedData = data.map((ele: any) => {
          return {
            id: ele.id,
            title: ele.title,
          };
        });
        return fixedData;
      })
    );
  }

  addTodo(todo: Object): void {
    this.http.post(this.url, todo);
  }

  removeTodo(id: any): void {
    this.http.delete([this.url, +id].join("/"));
  }

  //Note: Fake api
  // getFakeApi():Promise<unknown> {
  //   const resultPromise = new Promise((resolve,_reject) => {
  //     setTimeout(()=>{resolve('Fake Data')},1500);
  //   });
  //   return resultPromise;
  // }
}
