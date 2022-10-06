let form = document.querySelector('form');
let nameError = "";
let userNameError = "";
let emailError = "";
let phnError = "";
let pswrdError = "";

function containOnlyNumber(str) {
  return str.split("").every(e => Number(e))
   }

function doesContainANumber(str) {
   return str.split("").some(e => Number(e));
}

function doesContainSymbol(str) {
    return str.split("").some(e => e.includes("@"));
 }

function handleSubmit(event) {
    event.preventDefault();

    let userNameElem = event.target.elements.username;
    let nameElem = event.target.elements.text;
    let emailElem = event.target.elements.email;
    let phnNumber = event.target.elements.phonenumber;
    let cnfPswrd = event.target.elements.cnfpassword;
    let pswrd = event.target.elements.password;
    let submit = event.target.elements.submit;

    
    if(userNameElem.value.length < 4) {
        userNameError = "Can't be less than four character";
    }
    userNameElem.nextElementSibling.innerText = userNameError

     if(doesContainANumber(nameElem.value)){
            nameError = "You can't use number in the name field"
    }
   nameElem.nextElementSibling.innerText = nameError

    if(!doesContainSymbol(emailElem.value)) {
        emailError = "Not a valid email";
    } else if(emailElem.value.length < 6) {
        emailError = "Not a valid email";
    }
    emailElem.nextElementSibling.innerText = emailError

    if(!containOnlyNumber(phnNumber.value)) {
        phnError = "Phone number can only contain numbers"; 
    }
     else if(phnNumber.value.length < 7) {
        emailError = "Not a valid email";
    }
    phnNumber.nextElementSibling.innerText = phnError
    
    if(pswrd.value !== cnfPswrd.value) {
        pswrdError = "Password and confirm password must be same.";
    }
    cnfPswrd.nextElementSibling.innerText = pswrdError;

    if(!nameError  && !userNameError && !emailError && !phnError && !pswrdError) {
        alert(`User Added Successfully!`);
    }
}


form.addEventListener('submit', handleSubmit);