
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.num-button');


buttons.forEach(button => {
  button.addEventListener('click', () => {

    const value = button.value;


    switch (value) {
      case '+':
        
    display.value += '+';
        break;
      case '-':
       
    display.value += '-';
        break;
      case '*':
        
    display.value += '*';
        break;
      case '/':
        
    display.value += '/';
        break;
      case '=':
        
    try {
          const result = eval(display.value);
          display.value = result;
        } catch (error) {
          display.value = 'Error';
        }
        break;
      default:
        
    display.value += value;
    }
  });
});

// Add an event listener to the clear button
document.getElementById('clear').addEventListener('click', () => {
  display.value = '';
});