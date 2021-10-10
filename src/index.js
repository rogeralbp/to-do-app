import './styles.css';

import { Todo, TodoList } from './classes';
import { createTodoHtml } from './js/components';

export const todoList = new TodoList();

//const taskJS = new Todo('Learn JavaScript');
//const taskCSS = new Todo('Learn CSS');
//const taskHTML = new Todo('Learn HTML');

//todoList.newTodo(taskJS);
//todoList.newTodo(taskCSS);
//todoList.newTodo(taskHTML);

console.log( todoList );

//createTodoHtml(taskJS);

