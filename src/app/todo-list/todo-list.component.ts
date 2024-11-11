import { Component, Input, OnInit } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodoComponent } from '../todo/todo.component';
import { Todo } from '../models/Todo';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { Store } from '@ngrx/store';
import { add, loadTodos, toggle } from '../actions/Todo.actions';
import { Observable } from 'rxjs';
import { selectAllTodos, selectTodoCount, selectTodoCountByType, selectTodosByType } from '../selectors/todo.selector';
import { State } from '../reducers';
import { TodoTypes } from '../models/TodoTypes';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgFor, TodoComponent, TodoFormComponent, AsyncPipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  @Input() type!: TodoTypes;
  todos$!: Observable<Todo[]>;
  numTodos$!: Observable<number>;

  constructor(private store: Store<State>) {
  }
  
  ngOnInit(): void {
    this.store.dispatch(loadTodos());
    this.todos$ = this.store.select(selectTodosByType(this.type));
    this.numTodos$ = this.store.select(selectTodoCountByType(this.type));
  }

  toggleComplete(todo: Todo) {
    this.store.dispatch(toggle({ id: todo.id }));
  }

  addTodo(newTodo: string) {
    this.store.dispatch(add({ todo: newTodo, todoType: this.type }));
  }
}
