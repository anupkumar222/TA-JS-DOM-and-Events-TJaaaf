let boxses1 = document.querySelectorAll(".first .box");
let boxses2 = document.querySelector(".second")

let randomNmber = function() {
    return Math.floor(Math.random() * 12)
}

boxses1.forEach((ele, index) => {
    ele.addEventListener('click', function(event) {
        event.target.innerText = index + 1;
        event.target.style.backgroundColor = "green";
        setTimeout(function(){
            event.target.innerText = "";
            event.target.style.backgroundColor = "#444444";
        }, 5000) 
    })
})

boxses2.addEventListener('click', function(event) {
        event.target.innerText = randomNmber();
        event.target.style.backgroundColor = "green";
        setTimeout(function(){
            event.target.innerText = "";
            event.target.style.backgroundColor = "#444444";
        }, 5000) 
    })

