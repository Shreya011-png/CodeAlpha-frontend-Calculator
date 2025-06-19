const display = document.getElementById('display');
const toggleBtn = document.getElementById('darkToggle');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}

// 🎹 Keyboard Input
document.addEventListener('keydown', function (event) {
  const key = event.key;
  if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    deleteChar();
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});

// 🌑 Dark Mode Toggle
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.innerHTML = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});
