import { todolist } from './todolist'
import { projectList } from './projectlist'
import { initView } from './view'


const controllerObj = function(){
    let controllerList = [];

    const testVIew = function(){
        let firstPro = projectList("FIrst project");
        let firstTodo = todolist("firsttodo","test","11/25/2020","low");
        let secondTodo = todolist("secondtodo","test","11/25/2020","low");
        firstTodo.checklist.push("test checklist");

        firstPro.todos.push(firstTodo);
        firstPro.todos.push(secondTodo);
        controllerList.push(firstPro);

    }
    

    const addProject = function(title){
        let a = projectList(title);
        controllerList.push(a);
        initView(controllerList);
        setListeners();
    }

    const addToDo = function(title, description, duedate, priority){
        let proInd = parseInt(document.getElementById("todoview").getAttribute("project-index"));
        let a = todolist(title, description, duedate, priority);
        controllerList[proInd].todos.push(a);
        initView(controllerList);
        setListeners();
    }

    const getList = function(){
        return controllerList;
    }

    const editPro = function(index){
        controllerList[index].title = prompt("New Title");
        initView(controllerList);
        setListeners();
    }

    const deletePro = function(index){
        controllerList.splice(index, 1);
        initView(controllerList);
        setListeners();
    }

    const editTodo = function(index){
        let proInd = parseInt(document.getElementById("todoview").getAttribute("project-index"));
        controllerList[proInd].todos[index].title = prompt("New Title");
        controllerList[proInd].todos[index].description = prompt("New description");
        controllerList[proInd].todos[index].dueDate = prompt("New due date");
        controllerList[proInd].todos[index].priority = prompt("New Priority");
        initView(controllerList);
        setListeners();
    }

    const deleteTodo = function(index){
        let proInd = parseInt(document.getElementById("todoview").getAttribute("project-index"));
        controllerList[proInd].todos.splice(index, 1);
        initView(controllerList);
        setListeners();
    }

    const selectProject = function(index){
        let z = document.getElementById("todoview");
        z.setAttribute("project-index", index);
        initView(controllerList);
        setListeners();
    }


    const setListeners = function(){
        let addp = document.getElementById("addproject");
        addp.onclick = function(){
            addProject(prompt("Name of Project"));  
        }

        let addtd = document.getElementById("addtodo");
        addtd.onclick = function(){
            addToDo(prompt("Name To do"),prompt("Description"),prompt("Due Date"),prompt("Priority"));
        }

        let editpros = document.getElementsByClassName("editproject");
        for(let a = 0; a <editpros.length; a++){
            console.log(a);
            editpros[a].onclick = function(){
                editPro(a);
            }
        }

        let deletePros = document.getElementsByClassName("deleteproject");
        for(let a = 0; a <deletePros.length; a++){
            deletePros[a].onclick = function(){
                deletePro(a);
            }
        }

        let edittodos = document.getElementsByClassName("edittodo");
        for(let a = 0; a <edittodos.length; a++){
            edittodos[a].onclick = function(){
                editTodo(a);
            }
        }

        let deleteTodos = document.getElementsByClassName("deletetodo");
        for(let a = 0; a <deleteTodos.length; a++){
            deleteTodos[a].onclick = function(){
                deleteTodo(a);
            }
        }

        let projectView = document.getElementsByClassName("projectnode");
        for(let a = 0; a <projectView.length; a++){
            projectView[a].onclick = function(){
                selectProject(a);
            }
        }
    }

    testVIew();

    initView(controllerList);

    setListeners();

}

export { controllerObj }