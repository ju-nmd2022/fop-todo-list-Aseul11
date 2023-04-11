// implemented some js part ideas from this video to my code: https://www.youtube.com/watch?v=G0jO8kUrg-I

const taskInput = document.getElementById("taskInput");
const listContainer = document.getElementById("listContainer");

// shows what will happen if 'add' button is clicked
function addTaskButton() {
  // if input box is empty, then alert pops up:
  if (taskInput.value === "") {
    alert("Error! The input field is empty!");
  } else {
    // when typing in the text, it appeard under the input field
    let li = document.createElement("li");
    li.innerHTML = taskInput.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);
  }

  // clearing the input field after adding task to the list:
  taskInput.value = "";
}

// when clicking on the task it will be marked as finished (line-through); got an idea how to do that from this source: https://www.w3schools.com/howto/howto_js_todolist.asp
listContainer.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    } else if (ev.target.tagName === "SPAN") {
      ev.target.parentElement.remove();
    }
  },
  false
);
