const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função que calcula a soma do número recebido
function numberSum(number) {
  let sum = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

// Função que lida com a pergunta usando uma Promise
function handleQuestion(question) {
  return new Promise(resolve => {
    rl.question(question, answer => {
      resolve(answer);
    });
  });
}

// Função principal que solicita um número ao usuário, calcula a soma e exibe o resultado
async function askingTerminal() {
  const numberProvided = await handleQuestion("Digite um número inteiro: ");

  if (numberProvided == '') {
    handleQuestion("Digite pelo menos um caractere.");
    rl.close();
    return
  }

  if (isNaN(numberProvided)) {
    handleQuestion("Caractere inválido! Somente números inteiros!");
    rl.close();
    return
  }

  if(numberProvided){
    const result = numberSum(Number(numberProvided));
    console.log(`A soma dos valores divisíveis por 3 ou 5 abaixo de ${numberProvided} é: ${result}`);
    rl.close();
  }
  
}

askingTerminal();
