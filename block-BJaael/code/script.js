let ul = document.querySelector("ul");

// for creating box
let displayArry =[];
for(let i=0; i<500; i++){
   li = document.createElement('li');
   li.classList.add('item');
   li.innerText = Math.floor(Math.random() * 1000)
   console.log(li);
   displayArry.push(li);
   ul.append(li);
}
li = document.querySelectorAll('.item');

// for generating random color
function generateRandomColor() {
    let tempArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let color = "#";

    for(let i = 0; i < 6; i++) {
        color += tempArray[Math.floor(Math.random() * 16)]
    }
    return color;
}


function handleMouseMove() {
    li.forEach((box) => {
        box.style.backgroundColor = generateRandomColor();
        box.innerText = Math.floor(Math.random() * 1000)
    })
}

ul.addEventListener('mousemove', handleMouseMove);