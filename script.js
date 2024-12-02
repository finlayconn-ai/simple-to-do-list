// Add at the top of the file
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Add this helper function
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Select input and button
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add event listener for the Enter key
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission default behavior
        addTaskBtn.click(); // Trigger the add task button
    }
});

// Add task when button is clicked
addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task === '') return;

  tasks.push({ text: task, completed: false });
  saveTasks();
  renderTasks();  // Render all tasks
  
  taskInput.value = ''; // Clear the input field
});

// Add this new function to handle displaying tasks
function renderTasks() {
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button onclick="toggleTask(${index})">Toggle</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Add these helper functions
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

// Add at the bottom of the file
renderTasks();  // Initial render
