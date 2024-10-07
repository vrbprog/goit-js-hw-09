
const formData = {
    email: "",
    message: ""
}

const inputForm = document.querySelector("form");

const saveEmail = localStorage.getItem("userEmail");
const saveMess = localStorage.getItem("userMess"); 

if (saveEmail !== null) {
    formData.email = saveEmail;
    inputForm.elements.email.value = saveEmail;
}

if (saveMess !== null) {
    formData.message = saveMess;
    inputForm.elements.message.value = saveMess;
}

inputForm.addEventListener("input", event => {
    if (event.target.name === "email") {
        formData.email = event.target.value;
        localStorage.setItem("userEmail", event.target.value);
    } else if (event.target.name === "message") {
        formData.message = event.target.value;
        localStorage.setItem("userMess", event.target.value);
    }
});

const submit = document.querySelector(".feedback-form");
submit.addEventListener("submit", event => {
    event.preventDefault();
    
    if (formData.email === '' || formData.message === '') {
        alert("Fill please all fields");
    }
    else {
        console.log(formData);
        //submit.submit();
        submit.reset(); 
        formData.email = '';
        formData.message = '';
        inputForm.elements.email.value = '';
        inputForm.elements.message.value = '';
        localStorage.clear();
    }

});