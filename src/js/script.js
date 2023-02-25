
let tasks = []
let display_tasks = [];
let TEST = document.getElementById("test");
let TEST_TWO = document.getElementById("test-two");

function setElementOnDOM() {
  const root = document.getElementById("one");
  root.innerHTML = ''
    display_tasks.forEach((task) => {
      const div = document.createElement("div");
      div.classList.add("cart");
      // add id to div
      div.innerHTML = `
      <div class="cart__item" style="background-color: ${task.color}">
      <div class="cart__item_element">
          <p>${task.color}</p>
          <p>${task.type}</p>
          <p>${task.code}</p>
      </div>
  </div>
    `;
  
    root.insertBefore(div, root.firstElementChild);
    
  });
}

  document.getElementById("save").addEventListener("click", (event) => {
       event.preventDefault();

       function nameAudit(){
        if(COLOR.length != 0){
         TEST.innerHTML = `color`;
           return true;
        }else{
          TEST.innerHTML=`Заповніть поле <style> #test {color:red }</style>`;
          return false;
          }
        }
      
      function codeAudit(){
          if(CODE.length == 0){
           TEST_TWO.innerHTML=`Заповніть поле <style> #test-two {color:red }</style>`
           return false
           }else{
            TEST_TWO.innerHTML = `color`;
            return true;
             
        }
      }
     
    let COLOR = document.getElementById("input-color").value;
   let TYPE = document.getElementById("select").value;
   let CODE = document.getElementById("input-code").value; 

       if( nameAudit() && codeAudit()){

   const task = {
    color: COLOR,
    type: TYPE,
    code: CODE,
  }
  tasks.push(task);
  display_tasks = tasks;

//
        document.getElementById("input-color").value = "";
        document.getElementById("input-code").value = "";
  
  //



  setElementOnDOM()

 
}

})
console.log(tasks)

let cookievalue = `${display_tasks.task}`
function WriteCookies(){
  document.cookie = "Color" + " "+ cookievalue;
   }


   WriteCookies()