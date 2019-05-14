import { Component, OnInit } from "@angular/core";
import { TodoDataService } from "../service/Data/todo-data.service";
import { Router } from "@angular/router";

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: "app-list-todos",
  templateUrl: "./list-todos.component.html",
  styleUrls: ["./list-todos.component.css"]
})
export class ListTodosComponent implements OnInit {
  /*todos = [
        new Todo(1, 'Learn to dance', false, new Date()),
        new Todo(2, 'Become an expert in Angular', false, new Date()),
        new Todo(3, 'Visit Bangladesh', false, new Date()),
    ];*/

  todos: Todo[];
  message = "";

  constructor(
    private todoDataService: TodoDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.retriveAllTodos();
  }

  retriveAllTodos() {
    this.todoDataService.retriveAllTodos("mehedi").subscribe(response => {
      console.log(response);
      this.todos = response;
    });
  }

  deleteTodo(id) {
    this.todoDataService.deleteTodo("mehedi", id).subscribe(response => {
      console.log(response);
      this.message = `Delete of Todo ${id} Successful`;
      this.retriveAllTodos();
    });
  }

  updateTodo(id) {
    this.router.navigate(["todos", id]);
  }
}
