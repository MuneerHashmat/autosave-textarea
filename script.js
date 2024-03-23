let textElement = document.getElementById("text");

textElement.addEventListener("input", (e) => {
    let userText = e.target.value;
    localStorage.setItem("textInput", userText)
});

window.addEventListener("load", () => {
    if (localStorage.getItem("textInput")) {
        textElement.value = localStorage.getItem("textInput");
    }
})