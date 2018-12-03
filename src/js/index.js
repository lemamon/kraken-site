let selected = "home";

const hide = () => {
  let sections = document.querySelectorAll("section");

  for (let i = 0; i < sections.length; i++) {
    if (sections[i].classList.contains(selected)) {
      sections[i].style.display = "flex";
    } else {
      sections[i].style.display = "none";
    }
  }
};

const switchScrens = element => {
  selected = element.id;
  hide();
};

const isBlank = str => /^\s*$/.test(str);

const submitForm = () => {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const subject = document.querySelector("#subject").value;
  const message = document.querySelector("#message").value;
  const form = document.querySelector("form");

  let alertMsg = isBlank(name) ? "- Nome\n" : "";
  alertMsg += isBlank(email) ? "- Email\n" : "";
  alertMsg += isBlank(subject) ? "- Assunto\n" : "";
  alertMsg += isBlank(message) ? "- Mensagem\n" : "";

  if (!isBlank(alertMsg)) {
    alert("Favor preencher:\n" + alertMsg);
  }
  console.log(form);
};

hide();
