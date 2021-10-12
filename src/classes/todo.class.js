

export class Todo {


    static rebuildObjects( {id, task, completed, created} ) {

        const templateToDo = new Todo( task );

        this.id        = id; 
        this.completed = completed;
        this.created   = created; 

    }

    /*task = learn js, cleann the dog*/
    constructor( task ){

        this.task = task;
        this.id        = new Date().getTime(); //8451516114
        this.completed = false;
        this.created   = new Date(); // creation date of the tasks
    }

}