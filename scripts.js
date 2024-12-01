// Add a task
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskDate = document.getElementById('task-date');

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


