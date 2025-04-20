const allCheckBoxes = document.querySelectorAll(".custom-checksum");
const inputFields = document.querySelectorAll(".enterdata");
const warning = document.querySelector(".warning");
const progressvalue = document.querySelector(".progress");
progressvalue.style.width = '0%';

// Initialize goals: fallback to empty object if null, and ensure each input has a default entry
let allGoals = JSON.parse(localStorage.getItem('goals123')) || {};
inputFields.forEach((input) => {
  if (!allGoals[input.id]) {
    allGoals[input.id] = { name: '', completed: false }; // Initialize if missing
  }
  input.value = allGoals[input.id].name; // Populate input
});

let completedGoalsCount = Object.values(allGoals).filter((goal) => goal.completed).length;
updateProgress(); // Initialize progress bar

// Checkbox click handler
allCheckBoxes.forEach((checkbox) => {
  checkbox.addEventListener('click', (e) => {
    const tickSign = checkbox.querySelector('.tick-sign');
    const inputTask = checkbox.closest('.goalcontainer').querySelector('.enterdata');
    e.stopPropagation();

    if (inputTask.value === "") {
      alert('Enter some data in tasks section');
      return; // Exit early if input is empty
    }

    // Toggle UI state
    tickSign.classList.toggle('completed');
    inputTask.classList.toggle('strikeit');

    // Update data
    const inputId = inputTask.id;
    allGoals[inputId].completed = !allGoals[inputId].completed;
    saveToLocalStorage();

    // Update progress
    completedGoalsCount = Object.values(allGoals).filter((goal) => goal.completed).length;
    updateProgress();
  });
});

// Input field handlers
inputFields.forEach((input) => {
  input.addEventListener('focus', () => {
    warning.style.display = 'none';
  });

  input.addEventListener('input', (e) => {
    if (!allGoals[input.id]) {
      allGoals[input.id] = { completed: false }; // Ensure structure exists
    }
    allGoals[input.id].name = input.value;
    saveToLocalStorage();
  });
});

// Helper functions
function saveToLocalStorage() {
  localStorage.setItem('goals123', JSON.stringify(allGoals));
}

function updateProgress() {
  const totalGoals = inputFields.length;
  const progressPercent = totalGoals > 0 ? (completedGoalsCount / totalGoals) * 100 : 0;
  progressvalue.style.width = `${progressPercent}%`;
}