const form = document.getElementById("projectForm");
const statusText = document.getElementById("status");

// 🔧 ВСТАВЬ СЮДА СВОЙ GOOGLE FORM URL
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/XXXXXXXX/formResponse";

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = new FormData(form);

    fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: data
    });

    statusText.textContent = "Данные отправлены ✔";
    form.reset();
});
