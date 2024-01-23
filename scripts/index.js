// Gather Elements needed
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const exit = document.getElementById("exit");

// toggle the menu open and close
menu.addEventListener("click", function(){
    nav.style.display = "block";
    menu.style.display = "none";
    exit.style.display = "block";
});

// toggle the the exit button
exit.addEventListener("click", function(){
    nav.style.display = "none";
    menu.style.display = "block";
    exit.style.display = "none";
})



