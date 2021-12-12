var buttonEL = document.querySelector("#save-task");
var tasksToDoEL = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEL.appendChild(listItemEl);
  };

// On a button click, create a task
buttonEL.addEventListener("click", createTaskHandler);
 