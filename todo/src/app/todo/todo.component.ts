import { Component, OnInit } from "@angular/core";
import { Todo } from "../list-todos/list-todos.component";
import { TodoDataService } from "../service/Data/todo-data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  id: number;
  todo: Todo;
  constructor(
    private todoDataService: TodoDataService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.router.snapshot.params["id"];
    this.todo = new Todo(1, "", false, new Date());
    this.todoDataService.retriveTodo("mehedi", this.id).subscribe(response => {
      this.todo = response;
    });
  }
}
