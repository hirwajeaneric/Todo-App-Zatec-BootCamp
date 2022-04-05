const saveBtn = document.getElementById("save");
let taskDiv = "";
let name = "";
let date = "";
let completed = "";
let taskContainer = "";

saveBtn.addEventListener("click", addTask);

function addTask() {
    name = document.getElementById("name").value;
    date = document.getElementById("date").value;
    completed = document.getElementById("yes");

  if (name == "" || date == "") {
        alert("Please, first make sure all inputs are filled!");
  } else {
        taskContainer = document.getElementById("task-container");

    if (completed.checked) {
        createColoredTaskDiv("bg-green-600");
        putTasksInDiv("line-through");
        clearFields();
    } else {
        createColoredTaskDiv("bg-slate-300");
        putTasksInDiv("block");
        clearFields();
    }
  }
}

function createColoredTaskDiv(backgroundColor) {
    taskDiv = document.createElement("div");
    taskDiv.classList.add("mb-3","flex","flex-col","w-100%","shadow-md","border","rounded-lg","border-transparent","shadow-lg","shadow-black","m-2","hover:text-gray-600");
    taskDiv.classList.add(`${backgroundColor}`);
}

function putTasksInDiv(linethroughStyle) {
    const taskName = document.createElement("p");
    taskName.classList.add("mt-2", "ml-2", "mr-2");
    taskName.classList.add(`${linethroughStyle}`);
    taskName.innerHTML = name;

    const taskDate = document.createElement("p");
    taskDate.classList.add("mt-2","ml-2","mb-2","ml-3","mr-3","text-xs","text-right");
    taskDate.innerHTML = date;

    taskDiv.appendChild(taskName);
    taskDiv.appendChild(taskDate);
    taskContainer.appendChild(taskDiv);
}

function clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
}
