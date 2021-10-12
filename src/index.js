import './styles.css';

import { Todo, TodoList } from './classes';
import { createTodoHtml } from './js/components'; // first step to use the App

export const todoList = new TodoList();

console.log( todoList );

todoList.todos.forEach( createTodoHtml );