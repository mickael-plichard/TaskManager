// Add a task
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskDate = document.getElementById('task-date');
const taskList = document.getElementById('task-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

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

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


// View tasks function
function displayTasks() {
    taskList.innerHTML = ''; // Réinitialiser la liste avant chaque affichage
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.setAttribute('data-index', index);
      li.innerHTML = `
        <span>${task.text} - ${task.date}</span>
        <button class="delete-btn" onclick="deleteTask(${index})">×</button>
      `;
      taskList.appendChild(li);
    });
  }
  
  // Afficher les tâches au chargement de la page
  document.addEventListener('DOMContentLoaded', displayTasks);
  
