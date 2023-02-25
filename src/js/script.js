
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

let input = document.getElementById("input-color"); // Отримуємо поле вводу
input.addEventListener("input", function() { // Додаємо обробник події для поля вводу
  let regex = /[^a-zA-Z]/g; // Визначаємо регулярний вираз для перевірки на наявність не-буквенних символів
  input.value = input.value.replace(regex, ""); // Замінюємо будь-які не-буквенні символи на порожній рядок
});

let inputTwo = document.getElementById("input-code"); // Отримуємо поле вводу
inputTwo.addEventListener("input", function() { // Додаємо обробник події для поля вводу
  let regex = /[^0-99,]/g; // Визначаємо регулярний вираз для перевірки на наявність не-буквенних символів
  inputTwo.value = inputTwo.value.replace(regex, ""); // Замінюємо будь-які не-буквенні символи на порожній рядок
});

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

<<<<<<< HEAD



// add Cookies
  let now = new Date();
  // переводимо поточну дату в мілі секунди 
  let time = now.getTime() + 5000;
  // встановлюєм час  1000м/c * 60 х/в * 60 г. * 3 г.
  let expireTime = new Date(time);
 

// Зчитуємо поточне значення Cookie
let currentUsername = getCookieValue("color");

// Додаємо нове значення до списку
let newUsername = currentUsername + "," + COLOR;

// Зберігаємо оновлений список Cookie
document.cookie = `color=${newUsername};expires=${expireTime}; path=/`;

// Функція для зчитування значення Cookie
function getCookieValue(name) {
  let cookies = document.cookie.split(';');
  let cookie = cookies.find(cookie => cookie.includes(name + '='));
  if (cookie) {
    return cookie.split('=')[1];
  }
  return null;
}
 

=======
 let cookievalue = `${display_tasks.task}`
  WriteCookies(cookievalue)
>>>>>>> c2f2642fa3e25a687e619d7e8e5d722410565502
}

})

<<<<<<< HEAD
=======
console.log(tasks)
console.log(display_tasks)



function WriteCookies(value){
  document.cookie = "Color" + " "+ value;
   }


 
>>>>>>> c2f2642fa3e25a687e619d7e8e5d722410565502
