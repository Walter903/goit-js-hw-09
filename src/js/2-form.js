
const formData = { email: "", message: "" };


const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');


function saveFormData() {
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function loadFormData() {
  const savedData = localStorage.getItem("feedback-form-state");
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}


function handleInput(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();
  saveFormData();
}


function handleSubmit(event) {
  event.preventDefault();
  
  
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  
  
  console.log(formData);
  
  
  localStorage.removeItem("feedback-form-state");
  formData.email = "";
  formData.message = "";
  form.reset();
}


form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);


loadFormData();