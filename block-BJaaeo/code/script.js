let result = document.querySelector(".result");
let allboxes = document.querySelector(".button");


result.innerText = "";



allboxes.addEventListener("click", function(event) {
     const innerText = event.target.innerText;

     if(innerText === "c") {
        result.innerText = "";
         return 
     }

     if(innerText === "=") {
        result.innerText = eval(result.innerText);
        return
     }

  result.innerText = result.innerText + innerText
   

})