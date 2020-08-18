function changetheme() {
    var element = document.body;
    element.classList.toggle("light-mode");

    var elee = document.getElementById("mc_embed_signup");
    if (elee.style.backgroundColor === "rgb(37, 37, 37)") {
        elee.style.backgroundColor = "rgb(247,244,244)";
    } else {
        elee.style.backgroundColor = "rgb(37, 37, 37)";
    }
}