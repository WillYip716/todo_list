import { todolist } from './todolist'
import { projectList } from './projectlist'
import { initView } from './view'


const controllerObj = function(){


    let controllerList = [];
    console.log(controllerList.length);
    console.log(localStorage.getItem("storelist"));
    if(localStorage.getItem("storelist")){
        controllerList = JSON.parse(localStorage.getItem("storelist"));
    }
    localStorage.removeItem("storelist");

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
        set();
    }

    const addToDo = function(title, description, duedate, priority){
        let proInd = parseInt(document.getElementById("todoview").getAttribute("project-index"));
        let a = todolist(title, description, duedate, priority);
        controllerList[proInd].todos.push(a);
        set();
    }

    const getList = function(){
        return controllerList;
    }

    const editPro = function(index){
        controllerList[index].title = prompt("New Title");
        set();
    }

    const deletePro = function(index,e){
        e.stopPropagation();
        controllerList.splice(index, 1);
        let z = document.getElementById("todoview");
        z.setAttribute("project-index", "stop");
        set();
    }

    const editTodo = function(index){
        let proInd = parseInt(document.getElementById("todoview").getAttribute("project-index"));
        controllerList[proInd].todos[index].title = prompt("New Title");
        controllerList[proInd].todos[index].description = prompt("New description");
        controllerList[proInd].todos[index].dueDate = prompt("New due date");
        controllerList[proInd].todos[index].priority = prompt("New Priority");
        set();
    }

    const deleteTodo = function(index){
        let proInd = parseInt(document.getElementById("todoview").getAttribute("project-index"));
        controllerList[proInd].todos.splice(index, 1);
        set();
    }

    const selectProject = function(index){
        let z = document.getElementById("todoview");
        z.setAttribute("project-index", index);
        set();
    }

    const set = function(){
        localStorage.setItem("storelist",JSON.stringify(controllerList));
        initView(controllerList);
        setListeners();
    }


    const setListeners = function(){
        let addp = document.getElementById("addproject");
        addp.onclick = function(){
            addProject(prompt("Name of Project"));  
        }

        let addtd = document.getElementById("addtodo");
        if(addtd){
            addtd.onclick = function(){
                addToDo(prompt("Name To do"),prompt("Description"),prompt("Due Date"),prompt("Priority"));
            }
        }
        

        let editpros = document.getElementsByClassName("editproject");
        for(let a = 0; a <editpros.length; a++){
            //console.log(a);
            editpros[a].onclick = function(){
                editPro(a);
            }
        }

        let deletePros = document.getElementsByClassName("deleteproject");
        for(let a = 0; a <deletePros.length; a++){
            deletePros[a].onclick = function(e){
                deletePro(a,e);
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


    if(controllerList.length == 0){
        testVIew();
    }
    

    initView(controllerList);

    setListeners();

}

export { controllerObj }