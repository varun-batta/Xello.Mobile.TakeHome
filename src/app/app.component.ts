import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NewTodoListModal } from './new-todo-list-modal/new-todo-list-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent, NewTodoListModal, NgIf, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('modalContainer') modalContainer: ElementRef | undefined;
  title = 'ng-todo';

  types = ['personal', 'work']

  isModalVisible: boolean = false;

  ngAfterViewInit() {
    document.getElementById('addButton')!.onclick! = () => this.buttonClicked(this.modalContainer);
  }

  buttonClicked(el: ElementRef | undefined) {
    el!.nativeElement.style.display = 'block'
  }

  addTodoList(addTodoList: string) {
    this.types.push(addTodoList)
    console.log(this.types)
    this.modalContainer!.nativeElement.style.display = 'none'
  }
}
