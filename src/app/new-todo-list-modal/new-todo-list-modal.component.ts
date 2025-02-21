import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common'

@Component({
  selector: 'new-app-todo-list-modal',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './new-todo-list-modal.component.html',
  styleUrl: './new-todo-list-modal.component.css',
})
export class NewTodoListModal {
  @Input() isVisible: boolean | undefined;
  @Output() addTodoList = new EventEmitter();
  newTodoList: string = '';

  ngOnInit() {
    console.log(this.isVisible)
  }
  
  addToDoList() {
    this.addTodoList.emit(this.newTodoList);
    this.newTodoList = '';
  }
}