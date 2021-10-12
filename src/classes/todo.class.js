

export class Todo {

    static fromJson( {id, task, completed, created } ){

        const templateTodo = new Todo(task);

        templateTodo.id        = id;
        templateTodo.completed = completed;
        templateTodo.created   = created;

        return templateTodo;

    }

    /*task = learn js, cleann the dog*/
    constructor( task ){

        this.task = task;
        this.id        = new Date().getTime(); //8451516114
        this.completed = false;
        this.created   = new Date(); // creation date of the tasks
    }

}