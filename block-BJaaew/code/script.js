
    /* 
  <!-- <article class="article flex-30">
    <div class="flex flex-start">
      <div class="image-container">
        <img src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg" alt="got-characters">
      </div>
      <h2>Eddard "Ned" <span>Stark</span></h2>
    </div>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui mollitia officia sed modi veritatis dolorem!</p>
    <a href="" class="btn">Learn More!</a>
  </article> -->
 
*/


let section = document.querySelector("section");
let tags = document.querySelector(".tags");
let input = document.querySelector(".search");

function createUI (data) {
  section.innerHTML = "";
  data.forEach((ele) => {
    ele.people.forEach((person) => {
        let article = document.createElement("article");
        article.classList.add("article", "flex-30");
    
        let divOuter = document.createElement("div");
        divOuter.classList.add("flex", "flex-start");
    
        let divInner = document.createElement("div");
        divInner.classList.add("image-container");
    
        let img = document.createElement("img");
        img.src = person.image;
        divInner.append(img);
    
        let h2 = document.createElement("h2");
        h2.innerText = person.name;
    
        divOuter.append(divInner, h2);
    
        let p = document.createElement("p");
        p.innerText = person.description;
    
    
        let a = document.createElement("a");
        a.classList.add("btn");
        a.innerText = "Learn More!"
        a.href = person.wikiLink
        a.target = "_blank"
    
        article.append(divOuter, p, a);
    
        section.append(article);
        
      
    })
    })
}
createUI(got.houses);

function filterPeople(event) {
  let value = event.target.innerText

let filterdHouse = got.houses.filter(ele => {
  if(ele.name.toLowerCase() === value.toLowerCase()) {
    return ele;
   }
})
createUI(filterdHouse);
}

function searchPeople(event) {
  console.log(event)
  let value = event.target.innerText
let searchPerson = got.houses.filter(ele => {
  if(ele.name.toLowerCase() === value.toLowerCase()) {
    return ele;
   }
})
createUI(searchPerson);
}

input.addEventListener("keyup", searchPeople)
tags.addEventListener("click", filterPeople);
