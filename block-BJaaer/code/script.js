let form = document.querySelector('form');
let display = document.querySelector('.display')
let close = document.querySelector('.close-btn')

let userInfo = {};

function handelsubmit(event) {
    event.preventDefault();

    userInfo.name = form.elements.text.value;
    userInfo.email = form.elements.email.value;
    userInfo.gender = form.elements.gender.value;
    userInfo.color = form.elements.color.value;
    userInfo.range = form.elements.rating.value;
    userInfo.fiction = form.elements.fiction.value;
    userInfo.terms = form.elements.terms.value;

    console.dir(form.elements, "gddf");

    document.querySelector("h1").innerText = `Hello ${userInfo.name}`
    document.querySelector(".email").innerText = `Email: ${userInfo.email}`
    document.querySelector(".interest").innerText = `You Love: ${userInfo.gender}`
    document.querySelector(".color").innerText = `Color: ${userInfo.color}`
    document.querySelector(".rating").innerText = `Rating: ${userInfo.range}`
    document.querySelector(".genre").innerText = `Book Genre: ${userInfo.fiction}`
    document.querySelector(".term").innerText = `You are ${userInfo.terms ? 'agreed' : 'notagreed'} to terms and condition`;

    display.classList.add('open');
}

close.addEventListener('click', function(){display.classList.remove('open')})

form.addEventListener("submit", handelsubmit);
