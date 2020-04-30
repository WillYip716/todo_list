import { controllerObj } from './controller'



const initView = function(){

    let test = controllerObj();


    let b = document.getElementsByTagName("BODY")[0]; 
    let mV = document.createElement("div");
    mV.id = "masterview";

    let pV = document.createElement("div");
    pV.id = "projectview";

    let tV = document.createElement("div");
    tV.id = "todoview";
    mV.appendChild(pV);
    mV.appendChild(tV);
    b.appendChild(mV);

    


}


export { initView }