import { supabase } from './supabase.js'

// Fetch tasks from Supabase
async function fetchTasks() {
    try {
        const { data, error } = await supabase
            .from('tasks')
            .select('*')
            .order('created_at', { ascending: true })
        
        if (error) throw error
        
        tasks = data
        renderTasks()
        showNotification('Tasks loaded successfully')
    } catch (error) {
        console.error('Error fetching tasks:', error)
        showNotification('Failed to load tasks: ' + error.message, true)
    }
}

// Add task to Supabase
async function addTask(text) {
    try {
        const { data, error } = await supabase
            .from('tasks')
            .insert([{ text, completed: false }])
            .select()
        
        if (error) throw error
        
        tasks.push(data[0])
        renderTasks()
        showNotification('Task added successfully')
    } catch (error) {
        console.error('Error adding task:', error)
        showNotification('Failed to add task: ' + error.message, true)
    }
}

// Toggle task in Supabase
async function toggleTask(index) {
    try {
        const task = tasks[index]
        const { error } = await supabase
            .from('tasks')
            .update({ completed: !task.completed })
            .eq('id', task.id)
        
        if (error) throw error
        
        task.completed = !task.completed
        renderTasks()
        showNotification('Task updated successfully')
    } catch (error) {
        console.error('Error toggling task:', error)
        showNotification('Failed to update task: ' + error.message, true)
    }
}

// Delete task from Supabase
async function deleteTask(index) {
    try {
        const task = tasks[index]
        const { error } = await supabase
            .from('tasks')
            .delete()
            .eq('id', task.id)
        
        if (error) throw error
        
        tasks.splice(index, 1)
        renderTasks()
        showNotification('Task deleted successfully')
    } catch (error) {
        console.error('Error deleting task:', error)
        showNotification('Failed to delete task: ' + error.message, true)
    }
}

// Initial load
fetchTasks()

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

  addTask(task);
  taskInput.value = ''; // Clear the input field
});

// Add this new function to handle displaying tasks
function renderTasks() {
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="task-item">
                <input type="checkbox" 
                    class="task-checkbox" 
                    ${task.completed ? 'checked' : ''} 
                    onchange="toggleTask(${index})"
                >
                <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            </div>
            <button onclick="deleteTask(${index})" class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Add this function to show notifications
function showNotification(message, isError = false) {
    const notification = document.createElement('div');
    notification.className = `notification ${isError ? 'error' : 'success'}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
