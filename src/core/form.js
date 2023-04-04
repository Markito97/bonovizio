export const form = () => {
  const messageForm = document.forms.message;
  const name = messageForm.elements.name;
  const email = messageForm.elements.email;
  const message__text = messageForm.elements.message__text;
  const sumbitBtn = document.querySelector(".message__submit");
  const EMAIL_PATTERN =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validate = () => {
    if (EMAIL_PATTERN.test(email.value)) {
      email.style.outline = "none";
    } else {
      email.style.outline = "2px solid red";
    }
  };

  email.addEventListener("input", validate);

  const sendForm = (e) => {
    e.preventDefault();
    const formElements = [name, email, message__text];
    const data = {};

    if (!name.value) {
      name.style.outline = "2px solid red";
    } else {
      name.style.outline = "none";
      data.name = name.value;
    }

    if (!email.value) {
      email.style.outline = "2px solid red";
    } else {
      email.style.outline = "none";
      data.email = email.value;
    }

    if (!message__text.value) {
      message__text.style.outline = "2px solid red";
    } else {
      message__text.style.outline = "none";
      data.message = message__text.value;
    }

    if (email.value && name.value && message__text.value) {
      console.log(data);
    }
  };

  messageForm.addEventListener("submit", sendForm);
};
