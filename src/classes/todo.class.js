//Class of the object To-Do

export class Todo {

    static fromJson( {id, task, completed, created } ){

        const templateTodo = new Todo(task);

        templateTodo.id        = id;
        templateTodo.completed = completed;
        templateTodo.created   = created;

        return templateTodo;

    }

    /**
     * 
     * @param {*learn js, cleann the dog} task 
     * @param {*8451516114} id 
     * @param {*status of the task} completed 
     * @param {*creation date of the task} created 
     * 
     */
    constructor( task ){

        this.task      = task;
        this.id        = new Date().getTime(); 
        this.completed = false; 
        this.created   = new Date(); // 
    }

}