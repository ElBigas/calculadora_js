/**
 * Este código utiliza o evento "click" em elementos "button" na página HTML 
 * para recuperar o valor dos botões pressionados e exibir o resultado na tela.
 * A função "calcular" verifica o valor passado para determinar a ação a ser 
 * realizada. Se o valor for 'C', o valor exibido na tela é apagado. Se o valor 
 * for um operador (+, -, X, /, .), ele é adicionado ao final da expressão 
 * exibida na tela. Se o valor for igual a '=', a expressão é avaliada usando a 
 * função "eval" do JavaScript e o resultado é exibido na tela. Caso contrário, 
 * o valor é adicionado ao final da expressão exibida na tela. 
 
 * O loop "forEach" é usado para percorrer todos os elementos "button" na página 
 * HTML e adicionar um manipulador de eventos "click" a cada um deles. O manipulador 
 * de eventos "click" chama a função "calcular" com o valor do botão pressionado.
 */

const botoes = document.querySelectorAll('button')

const resultado = document.getElementById('resultado');


function calcular(valor) {

    console.log(valor)

    if (valor === 'C') {
        resultado.value = '';
    } else if (
        valor === '+' ||
        valor === '-' ||
        valor === 'X' ||
        valor === '/' ||
        valor === '.'
    ) {
        resultado.value += valor;
    } else if (valor === '=') {
        let expressao = resultado.value;
        expressao = expressao.replace(/\x/g, '*');
        resultado.value = eval(expressao);
    } else {
        resultado.value += valor;
    }
}

botoes.forEach(elemento => {
    elemento.addEventListener('click', (evento) => {
        let tipo;
        if (elemento.classList.contains('acao')) {
            tipo = 'acao';
        } else if (elemento.classList.contains('valor')) {
            tipo = 'valor';
        }
        calcular(evento.target.textContent);
    });
});
