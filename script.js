document.getElementById("add-btn").addEventListener("click", function() {
    const input = document.getElementById("todo-input");
    const task = input.value.trim();
  
    if (task) {
      const listItem = document.createElement("li");
      listItem.textContent = task;
  
      // Mark task as completed when clicked
      listItem.addEventListener("click", function() {
        listItem.classList.toggle("completed");
      });
  
      // Add delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", function() {
        listItem.remove();
      });
  
      listItem.appendChild(deleteBtn);
      document.getElementById("todo-list").appendChild(listItem);
  
      input.value = "";  // Clear input field after adding task
    }
  });