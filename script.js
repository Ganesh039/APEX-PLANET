// Form validation function
document.getElementById('contactForm').addEventListener('submit', function(event) {
  // Get form elements
  const password = document.getElementById('password').value;
  const male = document.getElementById('male');
  const female = document.getElementById('female');
  
  // Validate password (must include lowercase, uppercase, special character, and number)
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  if (!password.match(passwordRegex)) {
    alert("Password must contain at least one uppercase letter, one lowercase letter, one special character, and one number.");
    event.preventDefault();  // Stop form submission
    return;
  }
  
  // Validate gender (male or female must be selected)
  if (!male.checked && !female.checked) {
    alert("Gender must be selected.");
    event.preventDefault();  // Stop form submission
    return;
  }

  // If all validations pass, allow form submission
  alert("Form Submitted Successfully!");
});

// Dynamic To-Do List functionality
document.getElementById('addTaskBtn').addEventListener('click', function() {
  const taskInput = document.getElementById('todoInput');
  const taskList = document.getElementById('todoList');
  const newTask = taskInput.value.trim();

  // Check if the input is not empty
  if (newTask) {
    const li = document.createElement('li');
    li.textContent = newTask;

    // Add a "delete" button for each task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
      taskList.removeChild(li);  // Remove the task
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';  // Clear the input field
  } else {
    alert("Please enter a task.");
  }
});
