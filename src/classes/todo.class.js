

export class Todo {

    /*task = learn js, cleann the dog*/
    constructor( task ){

        this.task = task;
        this.id        = new Date().getTime(); //8451516114
        this.completed = false;
        this.created   = new Date(); // creation date of the tasks
    }

}