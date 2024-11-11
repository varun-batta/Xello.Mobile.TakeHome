import { createSelector } from '@ngrx/store';
import { State } from '../reducers';
import { TodoState } from '../reducers/todo.reducer';
import { TodoTypes } from '../models/TodoTypes';


export const selectTodos = (state: State) => {
    return state.todos;
};

export const selectTodosByType = (todoType: TodoTypes) => createSelector(
  selectTodos,
  (state: TodoState) => state.todos.filter(x => x.type === todoType) 
);

export const selectTodoCountByType = (todoType: TodoTypes) => createSelector(
  selectTodosByType(todoType),
  (todos) => todos.filter(x => !x.complete).length
);

export const selectTodoCount = createSelector(
    selectTodos,
    (state: TodoState) => state.todos.filter(x => !x.complete).length
);

export const selectAllTodos = createSelector(
    selectTodos,
    (state: TodoState) => state.todos
)