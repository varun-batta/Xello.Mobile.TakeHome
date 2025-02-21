import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, withLatestFrom } from 'rxjs/operators';
import { add, loadTodos, setTodos, todoCreated, todoToggled, toggle } from '../actions/Todo.actions';
import { Store } from '@ngrx/store';
import { State } from '../reducers';


@Injectable()
export class TodosEffects {
    loadTodos$ = createEffect(() => this.actions$.pipe(
        ofType(loadTodos),
        map(() => {
            return JSON.parse(localStorage.getItem('items') || '[]')
        }),
        map((todos) => {
            return setTodos({ todos });
        }),
        catchError(() => EMPTY)
    ));

    addTodos$ = createEffect(() => this.actions$.pipe(
        ofType(add),
        withLatestFrom(this.store.select((state: State) => state.todos.todos.length)),
        map(([{ todo, todoType, imgFileName }, numTodos]) => {
            return {
                id: numTodos + 1,
                title: todo,
                complete: false,
                type: todoType,
                imgFileName,
            };
        }),
        withLatestFrom(this.store.select((state: State) => state.todos.todos)),
        map(([todo, todos]) => {
            const updatedTodos = [...todos, todo];
            localStorage.setItem('items', JSON.stringify(updatedTodos));
            return todoCreated({ todo });
        })
    ))

    toggleTodo$ = createEffect(() => this.actions$.pipe(
        ofType(toggle),
        withLatestFrom(this.store.select((state: State) => state.todos.todos)),
        map(([{ id }, todos]) => {
            const mappedTodos = todos.map((x) => {
                if (x.id === id) {
                    return {
                        ...x,
                        complete: !x.complete,
                    };
                }
                return x;
            });
            const mappedTodo = todos.find(x => x.id === id);
            localStorage.setItem('items', JSON.stringify(mappedTodos));
            return todoToggled({ todo: mappedTodo! });
        })
    ));

    constructor(
        private actions$: Actions,
        private store: Store<State>
    ) { }
}
