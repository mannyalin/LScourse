const MESSAGE = require('./calculator_messages.json');
const LANGUAGE = 'en';
const readline = require('readline-sync');

function messages (message, lang = 'en') {
  return MESSAGE[lang][message];
}
function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}


while (true) {
  prompt('welcome');

  prompt('number1');
  let number1 = readline.question();
  while (invalidNumber(number1)) {
    prompt('invalidNumber');
    number1 = readline.question();
  }

  prompt('number2');
  let number2 = readline.question();
  while (invalidNumber(number2)) {
    prompt('invalidNumber');
    number2 = readline.question();
  }

  prompt('operation');
  let operation = readline.question();
  while (!['1','2','3','4'].includes(operation)) {
    prompt('invalidOperation');
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(output);

  prompt('startAgain');
  let startAgain = readline.question();
  if (startAgain[0].toLowerCase() !== 'y') {
    console.log('goodbye');
    break;
  }
}

