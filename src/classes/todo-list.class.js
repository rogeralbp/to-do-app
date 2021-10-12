import { Todo } from "./todo.class";


export class TodoList {

    constructor(){

        this.loadFromLocalStorage();

    }

    newTodo( todo ){

        this.todos.push( todo );
        this.saveToLocalStorage();
    }

    deleteTodo( id ){
        
        this.todos = this.todos.filter( todo => todo.id != id );
        this.saveToLocalStorage();
    }

    markCompleted ( id ){


        for( const todo of this.todos){

            if( todo.id == id ){

                todo.completed = !todo.completed;
                this.saveToLocalStorage();
                break;

            }
        }

    }

    cleanCompleted(){

        this.todos = this.todos.filter( todo => !todo.completed );
        this.saveToLocalStorage();
    }


    saveToLocalStorage(){

        localStorage.setItem('todo', JSON.stringify(this.todos) );
    }

    loadFromLocalStorage(){
        
        this.todos = ( localStorage.getItem('todo') ) 
                        ? this.todos = JSON.parse(localStorage.getItem('todo')) 
                        : this.todos = [];

        this.todos = this.todos.map(  Todo.fromJson );
    }

}