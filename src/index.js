
import './styles.css';

import { Todo, TodoList } from './classes';

export const todoList = new TodoList();

console.log( todoList );


// Local storage date for the todo tasks
localStorage.setItem('key-todo','LearnJS');

