
import { Todo } from "../classes";
import { todoList } from "../index";

const divTodoList       = document.querySelector('.todo-list');
const txtInputToDo      = document.querySelector('.new-all');
const btnClearCompleted = document.querySelector('.clear-completed');

const ulFilters         = document.querySelector('.filters');
const anchorFilters     = document.querySelectorAll('.filtro');


export const createTodoHtml = ( todo ) =>{

    const htmlTodo = ` 
    <li class=" ${ (todo.completed) ? 'completed' : '' } " data-id="${ todo.id }">
    <div class="view">
        <input class="toggle" type="checkbox" ${ (todo.completed) ? 'checked' : '' }>
        <label> ${ todo.task } </label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a To-Do task">
    </li>`

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;

}

txtInputToDo.addEventListener( 'keyup' , ( event ) => {

    if( event.keyCode === 13 && (txtInputToDo.value.length > 0) ){

        const newTodo = new Todo(txtInputToDo.value);

        todoList.newTodo( newTodo );

        createTodoHtml( newTodo );

        txtInputToDo.value = '';

    }

});

divTodoList.addEventListener('click', ( event ) => {

    const elementName = event.target.localName;
    const todoElement = event.target.parentElement.parentElement;
    const todoId      = todoElement.getAttribute('data-id');

    if( elementName.includes('input') ){

        todoList.markCompleted( todoId );
        todoElement.classList.toggle('completed');

    } else if( elementName.includes('button') ) {

        todoList.deleteTodo( todoId );
        divTodoList.removeChild( todoElement );

    }

});

btnClearCompleted.addEventListener('click', ( event ) => {

    todoList.cleanCompleted();

    for(let i= divTodoList.children.length - 1; i >= 0 ; i-- ){

        const currentListElement = divTodoList.children[i];

        if( currentListElement.classList.contains('completed') ){

            divTodoList.removeChild( currentListElement );

        }
    }

});

ulFilters.addEventListener('click', ( click ) => {

    const filter = event.target.text;

    if( !filter ){ return; }

    anchorFilters.forEach(element => element.classList.remove('selected') );
    event.target.classList.add('selected');

    for( const element of divTodoList.children ){

        element.classList.remove('hidden');
        const completed = element.classList.contains('completed');

        switch( filter ){

            case 'Pending':
                if ( completed ){
                    element.classList.add('hidden');
                }
            break;

            case 'Completed':
                if ( !completed ){
                    element.classList.add('hidden');
                }
            break;

        }
    }

});