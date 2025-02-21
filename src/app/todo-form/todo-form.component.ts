import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  @Output() addTodo = new EventEmitter();
  newTodo: string = '';
  imgFileName: string = '';

  onImgSelection(event: any) {
    this.imgFileName = event.target.files[0].name;
  }

  addToDo() {
    this.addTodo.emit({newTodo: this.newTodo, newTodoImgFileName: this.imgFileName});
    this.newTodo = '';
    this.imgFileName = '';
  }
}
