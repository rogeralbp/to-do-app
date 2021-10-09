
const divTodoList = document.querySelector('.todo-list');


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