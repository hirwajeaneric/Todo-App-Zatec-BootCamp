const saveBtn = document.getElementById('save');
let taskDiv = "";
let name = "";
let date = "";
let completed = "";
let taskContainer = "";

saveBtn.addEventListener('click',addTask);

function addTask() {
    //Getting data form the form
    name = document.getElementById('name').value;
    date = document.getElementById('date').value;
    completed = document.getElementsByName('completed');

    if (name== "" || date == "" || date=="") {
        alert("Please, first make sure all inputs are filled!");
    } else {     
        //get task container
        taskContainer = document.getElementById('task-container');

        if (completed[0].checked) {
            createColloredTask("bg-green-600");
            putTasksInDiv("line-through");      
            clearFields();
        } else {
            createColloredTask("bg-slate-300");
            putTasksInDiv("block");
            clearFields();
        }
}

function createColloredTask(backgroundColor) {
    //create a new div to append to the container
    taskDiv = document.createElement('div');
    taskDiv.classList.add("mb-3","flex" ,"flex-col" ,"w-100%" ,"shadow-md" ,"border" ,"rounded-lg" ,"border-transparent" ,"shadow-lg" ,"shadow-black","m-2","hover:text-gray-600");
    taskDiv.classList.add(`${backgroundColor}`);                 
    }
}

function putTasksInDiv(linethroughStyle) {
    //Create paragraph elements to go inside the task div
    const taskName = document.createElement('p');
    taskName.classList.add("mt-2" ,"ml-2" ,"mr-2");
    taskName.classList.add(`${linethroughStyle}`);
    taskName.innerHTML = name;

    const taskDate = document.createElement('p');
    taskDate.classList.add("mt-2" ,"ml-2" ,"mb-2" ,"ml-3" ,"mr-3" ,"text-xs" ,"text-right");
    taskDate.innerHTML = date;
    taskDate.classList.add(`${linethroughStyle}`);
    
    //Adding the paragraph elements to the div
    taskDiv.appendChild(taskName);
    taskDiv.appendChild(taskDate);
    //Adding the task div to the task container
    taskContainer.appendChild(taskDiv)        
}

function clearFields() {
    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
}
