
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskDate = document.getElementById('task-date');
const taskList = document.getElementById('task-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Add a task
taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const task = {
    text: taskInput.value,
    date: taskDate.value,
    completed: false
  };
  tasks.push(task);
  saveTasks();
  displayTasks();
  taskInput.value = '';
  taskDate.value = '';
});

// Save a task into localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


// View all tasks
function displayTasks() {
    taskList.innerHTML = ''; // Reset before display
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.setAttribute('data-index', index);
      
      // Mark a task as completed
      if (task.completed) {
        li.classList.add('completed');
      }

      li.innerHTML = `
        <span>${task.text} - ${task.date}</span>
        <button class="delete-btn" onclick="deleteTask(${index})">×</button>
      `;
      taskList.appendChild(li);
    });
  }
  
  // Display task
  document.addEventListener('DOMContentLoaded', displayTasks);
  
// Delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
  }
  
// Mark a task as completed
function toggleCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    displayTasks();
  }
  
  taskList.addEventListener('click', (event) => {
    const li = event.target.closest('li');
    if (li) {
      const index = li.dataset.index;
      toggleCompletion(index);
    }
  });
  
// Animation for deletion
function deleteTask(index) {
    const li = document.querySelector(`[data-index="${index}"]`);
    li.classList.add('delete');
    setTimeout(() => {
      tasks.splice(index, 1);
      saveTasks();
      displayTasks();
    }, 300);
  }
