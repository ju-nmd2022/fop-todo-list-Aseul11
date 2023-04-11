// main source used for js part: https://www.youtube.com/watch?v=G0jO8kUrg-I

// shows what will happen if 'add' button is clicked
function addTaskButton() {
  // if input field is empty, then alert pops up:
  if (taskInput.value === "") {
    alert("Error! The input field is empty!");
  } else {
    // when typing in the text, it appears under the input field
    let li = document.createElement("li");
    li.innerHTML = taskInput.value;
    listContainer.appendChild(li);
    // delete task button:
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);
  }

  // clearing the input field after adding task to the list:
  taskInput.value = "";
  savingData();
}

// when clicking the task it will be marked as finished (line-through); got an idea how to do that from this source: https://www.w3schools.com/howto/howto_js_todolist.asp
// styling made in css
listContainer.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
      savingData();
      // making 'close' button delete the task element
    } else if (ev.target.tagName === "SPAN") {
      ev.target.parentElement.remove();
      savingData();
    }
  },
  false
);

// save tasks in local storage
// tasks won't be removed after reloading the page
function savingData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTaskList() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTaskList();
