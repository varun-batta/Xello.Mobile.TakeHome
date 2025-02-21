import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../models/Todo';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgIf],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  @Input() todo: Todo | undefined;
  @Output() toggleComplete = new EventEmitter();

  shouldShowActions: boolean = false;
  touchStartTime: number = 0;

  private swipeCoord?: [number, number];
  private swipeTime?: number;

  swipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    const time = new Date().getTime();

    console.log(e, when)

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord![0], coord[1] - this.swipeCoord![1]];
      const duration = time - this.swipeTime!;

      console.log(direction[0], direction[1])
      if (duration < 1000 //
        && Math.abs(direction[0]) > 30 // Long enough
        && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
          this.showActions()
      } else {
        this.toggleComplete.emit(this.todo)
      }
    }
  }

  onTouchStart(){
    console.log("onTouchStart called")
    this.touchStartTime = new Date().getTime();
  }

  onTouchEnd(){
    console.log("onTouchEnd called");
    const curTime = new Date().getTime();
    console.log(this.touchStartTime, curTime, curTime - this.touchStartTime);
    if (curTime - this.touchStartTime > 1500) {
      this.showActions()
    } else {
      this.toggleComplete.emit(this.todo)
    }
  }
  
  showActions(){
    this.shouldShowActions = true;
    console.log("showActions")
  }

  hideActions(){
    this.shouldShowActions = false;
    console.log("hideActions")
  }
}
