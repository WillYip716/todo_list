import { todolist } from './todolist'
import { projectList } from './projectlist'
import { controllerObj } from './controller'


window.onload = function(){

    const testlist = todolist("testtitle", "testdesc", "testdue","testpriority");

    const testproject = projectList("testproject");
    testproject.todos.push(testlist);

    console.log(testlist);

    testlist.dueDate = "new duedate";

    console.log(testproject);

    controllerObj();
}
