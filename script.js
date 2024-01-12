// Common functions
function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function appendCharacter(char) {
    document.getElementById('display').value += char;
  }
  
  function calculate() {
    try {
      let expression = document.getElementById('display').value;
      // Additional processing for scientific calculator
      expression = expression.replace(/Math.sin\(([^)]+)\)/g, (_, value) => `Math.sin(${toRadians(parseFloat(value))})`);
      expression = expression.replace(/Math.cos\(([^)]+)\)/g, (_, value) => `Math.cos(${toRadians(parseFloat(value))})`);
      expression = expression.replace(/Math.tan\(([^)]+)\)/g, (_, value) => `Math.tan(${toRadians(parseFloat(value))})`);
  
      document.getElementById('display').value = eval(expression);
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  
  // Scientific calculator
  function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
  
  // Simple calculator
  function clearDisplaySimple() {
    document.getElementById('displaySimple').value = '';
  }
  
  function appendCharacterSimple(char) {
    document.getElementById('displaySimple').value += char;
  }
  
  function calculateSimple() {
    try {
      document.getElementById('displaySimple').value = eval(document.getElementById('displaySimple').value);
    } catch (error) {
      document.getElementById('displaySimple').value = 'Error';
    }
  }
  
  // Function to switch between calculator modes
  function selectCalculator(type) {
    clearDisplay(); // Clear the display when switching calculators
  
    if (type === 'scientific') {
      document.getElementById('scientificCalculator').style.display = 'block';
      document.getElementById('simpleCalculator').style.display = 'none';
    } else if (type === 'simple') {
      document.getElementById('scientificCalculator').style.display = 'none';
      document.getElementById('simpleCalculator').style.display = 'block';
    }
  }
  function clearSingle() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  
  