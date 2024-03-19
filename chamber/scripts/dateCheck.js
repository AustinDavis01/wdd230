const meet = document.getElementById("meet");
const exit = document.getElementById("exit");
const date = new Date;
let currentDate = date.getDay();

if (currentDate == 1 || currentDate == 2 || currentDate == 3)
{
    meet.style.display = "block";
    
}

exit.addEventListener("click", () => {
    meet.style.display = "none";
})


