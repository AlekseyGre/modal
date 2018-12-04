var modal = document.querySelector("#modal"),
    closebutton = document.querySelector("#close-button"),
    openbutton = document.querySelector("#open-button");
console.log(modal);
closebutton.addEventListener("click", function() {
    modal.classList.toggle("closed");
});
openbutton.addEventListener("click", function() {
    modal.classList.toggle("closed");
});