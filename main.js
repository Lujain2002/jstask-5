document.querySelector(".Add").onclick=addTask;





function addTask(){
   task=document.querySelector(".text").value;
   document.querySelector(".tasks").innerHTML += `
 <li>
 <div class="taskname">
  <input type="checkbox" value="${task}" class="e">
  <span class="${task}">${task}</span>
  </div>
  </li>`;
  const x = document.querySelectorAll(".taskname input");
  const y = document.querySelectorAll(".taskname span");
  
  for(let i=0;i<x.length;i++){
   let m = x[i];
   m.onclick=myfun;
   function myfun(){
    if(m.checked ==true){
        y[i].style.textDecoration="line-through";
    }
    else{
      y[i].style.textDecoration="none";

    }
   }
 
  
}
}


 
   
