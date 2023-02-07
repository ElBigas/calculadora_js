# calculadora_js

<h3>Projeto criado no decorrer do curso de JavaScript da Udemy</h3>

Foi um projeto bem simples, o seu HTML e CSS já estavam criados e pude aprender mais sobre manipulação de objetos com JavaScript. Também tive ajuda na melhoria do código pelo <a href="https://chat.openai.com/chat">ChatGPT</a>. 

Tive uma dificuldade para poder percorrer os botões e pedi a ajuda do bot. Sua ideia foi que eu tirasse o parametro "tipo" que antes havia na função "calcular". A minha ideia original era criar um ID "acao" para os botões que não fossem números, e eles teriam suas respectivas funções, porém tive uma dificuldade para concretizar essa ação e fui atrás do bom e (nem tão) velho bot.

Suas ajudas foram:

"Você pode remover o parâmetro "tipo" da função "calcular" e usar o método "classList" para verificar o tipo de botão clicado em vez disso. Aqui está um exemplo de como fazer isso:

```javascript
function calcular(valor) {

    console.log(valor)

    if (valor === 'c') {
        resultado.value = '';
    } else if (
        valor === '+' ||
        valor === '-' ||
        valor === '*' ||
        valor === '/' ||
        valor === '.'
    ) {
        resultado.value += valor;
    } else if (valor === '=') {
        resultado.value = eval(resultado.value);
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
```

Depois disso, também tive problema com a multiplicação, pois a minha função buscava pelo "textContent" que havia no botão, e como no caso do multiplicar está "x", acabava num erro. Eu poderia mudar o texto no HTML, mas não ficaria muito intuítivo para algum usuário mais leigo, então pensei em substituir o "x" por "*" e ficou assim:

```javascript
else if (valor === '=') {
        let expressao = resultado.value;
        expressao = expressao.replace(/\x/g, '*');
        resultado.value = eval(expressao);
}
```

<hr>
