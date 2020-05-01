

const initView = function(controllerlist){

    let test = controllerlist;

    /*let c = document.getElementById("app"); 
    let cNode = c.cloneNode(false);
    c.parentNode.replaceChild(cNode,c);

    let b = document.getElementById("app");  
    let mV = document.createElement("div");
    mV.id = "masterview";*/

    let pV = document.getElementById("projectview");
    let cNode = pV.cloneNode(false);
    pV.parentNode.replaceChild(cNode,pV);
    pV = document.getElementById("projectview");

    let tV = document.getElementById("todoview");
    cNode = tV.cloneNode(false);
    tV.parentNode.replaceChild(cNode,tV);
    tV = document.getElementById("todoview");


    const createProject = function(obj, index){
        let a = document.getElementById("todoview");
        if(parseInt(a.getAttribute("project-index")) > -1){
            a = parseInt(a.getAttribute("project-index"));
        }


        let p = document.createElement("div");
        p.innerHTML = obj.title;
        p.classList.add("projectnode");
        if(a == index){
            p.classList.add("selected");
        }
        let b = document.createElement("button");
        b.innerHTML = "x";
        b.classList.add("deleteproject");
        let e = document.createElement("button");
        e.innerHTML = "edit";
        e.classList.add("editproject");

        p.appendChild(e);
        p.appendChild(b);
        pV.appendChild(p);
    }

    const createTodo = function(){
        let a = document.getElementById("todoview");
        if(parseInt(a.getAttribute("project-index")) > -1){
            let tdlist = test[parseInt(a.getAttribute("project-index"))].todos;
            for (let a = 0; a < tdlist.length; a++) {
                let p = document.createElement("div");
                p.innerHTML = tdlist[a].title;
                p.classList.add("tododiv");

                let b = document.createElement("button");
                b.innerHTML = "x";
                b.classList.add("deletetodo");
                let e = document.createElement("button");
                e.innerHTML = "edit";
                e.classList.add("edittodo");

                let x = document.createElement("p");
                x.innerHTML=tdlist[a].description;
                let y = document.createElement("p");
                y.innerHTML = "Due: " + tdlist[a].dueDate;
                let z = document.createElement("p");
                z.innerHTML = tdlist[a].priority;
                p.appendChild(e);
                p.appendChild(b);
                p.appendChild(x);
                p.appendChild(y);
                p.appendChild(z);
                tV.appendChild(p);
            }
            
            let addTodo = document.createElement("button");
            addTodo.innerHTML = "Add New To Do";
            addTodo.id = "addtodo";
            tV.appendChild(addTodo);
        }    
    }


    for(let i in test){
        createProject(test[i],i);
    }
    createTodo();

    let addProject = document.createElement("button");
    addProject.innerHTML = "Add New Project";
    addProject.id = "addproject";

    
    pV.appendChild(addProject);
}

export { initView }