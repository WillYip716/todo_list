import { todolist } from './todolist'
import { projectList } from './projectlist'



const controllerObj = function(){
    console.log("test 2");
    let controllerList = [];

    let firstPro = projectList("FIrst project");
    let firstTodo = todolist("firsttodo","test","11/25/2020","low");
    firstTodo.checklist.push("test checklist");

    firstPro.todos.push(firstTodo);

    return firstPro;

}

export { controllerObj }