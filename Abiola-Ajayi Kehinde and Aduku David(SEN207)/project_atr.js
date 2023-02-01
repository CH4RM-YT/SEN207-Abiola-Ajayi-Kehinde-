// Get elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // Add task event
    addTaskBtn.addEventListener('click', addTask);
    //Remove task event
    taskList.addEventListener('click', removeTask);
}

function addTask(e) {
    e.preventDefault();
    if (taskInput.value === '') {
        alert('Add a task');
    } else {
        // Check if there are any hidden task available
        const hiddenTask = document.querySelector("li[style='display: none;']");
        if (hiddenTask) {
            hiddenTask.style.display = 'flex';
            hiddenTask.innerHTML = taskInput.value + '<a href="#" class="delete-item secondary-content"><i class="fa fa-trash"></i></a>';
            taskInput.value = '';
        } else {
            alert("You have reached the max amount of tasks")
        }
    }
}




//Remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.style.display = 'none';
    }
}