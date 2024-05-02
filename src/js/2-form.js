let formData = {
  email: "",
  message: ""
};

const storedFormData = localStorage.getItem("feedback-form-state");
if (storedFormData) {
  formData = JSON.parse(storedFormData);
  document.querySelector('input[name="email"]').value = formData.email;
  document.querySelector('textarea[name="message"]').value = formData.message;
}

document.querySelector('.feedback-form').addEventListener('input', function(event) {
  if (event.target.matches('input[name="email"]')) {
    formData.email = event.target.value.trim();
  } else if (event.target.matches('textarea[name="message"]')) {
    formData.message = event.target.value.trim();
  }

  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

document.querySelector('.feedback-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const trimmedEmail = formData.email;
  const trimmedMessage = formData.message;
  if (trimmedEmail === "" || trimmedMessage === "") {
    alert("Fill please all fields");
  } else {
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData = { email: "", message: "" };
    document.querySelector('.feedback-form').reset();
  }
});