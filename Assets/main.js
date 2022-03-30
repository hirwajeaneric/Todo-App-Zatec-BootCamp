const saveBtn = document.getElementById('save');

saveBtn.addEventListener('click',addTask);

function addTask() {
    //Getting data form the form
    const name = document.getElementById('name').ariaValueMax;
    const date = document.getElementById('date').ariaValueMax;
    const completed = document.getElementById('yes').ariaValueMax;
    const NotCompleted = document.getElementById('no').ariaValueMax;

    //get task container

}

/* <div class="task-container bg-gray-700 w-full p-2 border rounded-lg border-transparent mt-6 shadow-lg shadow-black">
<div class="a-task mb-3 flex flex-col w-full bg-green-600 shadow-md max-w-md border rounded-lg border-transparent shadow-lg shadow-black">
  <p class="task-name mt-2 ml-2 mr-2 line-through">Frontend challenge asfsadfsd.</p>
  <p class="task-date mb-2 ml-3 mr-3 text-xs text-right">03/30/2022,03:34 PM</p>
</div>

<div class="a-task mb-3 flex flex-col w-full bg-slate-300 shadow-md max-w-md border rounded-lg border-transparent shadow-lg shadow-black">
  <p class="task-name mt-2 ml-2 mr-2 text-black">Frontend challenge asfsadfsd.</p>
  <p class="task-date mb-2 ml-3 mr-3 text-xs text-right">03/30/2022,03:34 PM</p>
</div>
</div> */