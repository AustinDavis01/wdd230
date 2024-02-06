
// 
const input = document.querySelector('#favchap');
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value != ""){
        //Create Elements
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        // Populate List
        li.textContent = input.value;
        deleteButton.textContent = "❌";

        //append
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener("click", function() {
            list.removeChild(li);
            input.focus();
            

        });

        input.value = "";

    }
});