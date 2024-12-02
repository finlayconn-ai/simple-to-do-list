// Select input and button
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add task when button is clicked
addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task === '') return; // Ignore empty tasks

  // Create a new task element
  const li = document.createElement('li');
  li.textContent = task;

  // Add a delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => li.remove());

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = '';
});
