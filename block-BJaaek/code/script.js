let box1 = document.querySelector(".first");
let box2 = document.querySelector(".second");

  box1.addEventListener("click",  setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    box1.style.backgroundColor = "#" + randomColor;
  
  });

  box2.addEventListener("mousemove",  setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    box2.style.backgroundColor = "#" + randomColor;
  
  });
