const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.querySelector(".todo");

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (input.value === "") {
        alert("Add Todo");
    } else  {
        const list = document.createElement("li")
        const delBtn = document.createElement("button")
        list.classList.add("todo-item")
        delBtn.classList.add("delete")
        list.innerHTML = input.value
        delBtn.innerHTML = "X"
        list.appendChild(delBtn)
        ul.appendChild(list)

        delBtn.addEventListener("click", (e) => {
            list.remove()
        })
    }
    input.value = ""
}) 