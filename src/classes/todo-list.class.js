

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
        
        if ( localStorage.getItem('todo') ){

            this.todos = JSON.parse( localStorage.getItem('todo') );

        } else {
           
            alert('There was a problem saving the To-do tasks,\na new list of tasks will be created');
            this.todos = [];
        }
    }

}