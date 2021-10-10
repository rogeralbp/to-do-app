import { Todo } from "../classes";
import { todoList } from "../index";

const divTodoList = document.querySelector('.todo-list');
const txtInputToDo = document.querySelector('.new-all');


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