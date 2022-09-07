/* Eventos */

/* 
    onclick: dispara evento quando clicamos uma vez
    ondblclick: dispara evento quando clicamos duas vezes
    onmouseover: dispara evento quando mouse está sobre o elemento
    onmousemove: dispara evento quando mouse é movido para dentro do elemento
    onmouseout: dispara evento quando mouse é movido para fora do elemento
    onmousedown: dispara evento quando botão do clique do mouse for pressionado
    onmouseup: dispara evento quando botão do clique for liberado
    
    onkeydown: dispara evento quando tecla é pressionada
    onkeypress: dispara evento quando tecla é pressionada e solta (não dispara com CTRL, ALT, SHIFT ou BACKSPACE, só dispara com teclas que gerem caracteres da tabela ASCII)
    onkeyup: dispara evento quando tecla é solta (não dispara com TAB)
    
    onchange: dispara evento quando existe mudança no conteudo
    onfocus: dispara evento quando elemento recebe foco (é selecionado/marcado)
    onblur: dispara evento quando elemento perde o foco (não está mais selecionado/marcado)
    onscroll: dispara evento quando barra de rolagem se mover
    onerror: dispara evento quando ocorre erro na página
    onload: dispara evento quando página é terminou de ser carregada
    onresize: dispara evento quando janela é redimensionada
*/
   
let cont = 0;

function mudaCorFundo() {
    document.body.style.background = "grey";
}

function exibirAlerta() {
    alert("Ola mundo");
}

function mudaCorDiv1() {
    let mudaCor;
    mudaCor = document.getElementById("containerColorido");
    mudaCor.style.background = "red";
}

function mudaCorDiv2() {
    let mudaCor;
    mudaCor = document.getElementById("containerColorido");
    mudaCor.style.background = "blue";
}

function adicionaTexto() {
    let texto, elemento;
    elemento = document.getElementById("containerColorido");
    texto = (cont < 1) ? "Clicou " + (++cont) + " vez " : "Clicou " + (++cont) + " vezes ";
    elemento.style.color = "white";
    elemento.append(texto); // append = acrescentar
}

function apagaTexto() {
    document.getElementById("campoTexto").value = ""; // tag input possui atributo "value", que representa o texto inserido no campo
}

function mudanca() {
    alert("Mudança detectada!");
}

function teclaPressionada() {
    let valorCampo = document.getElementById("campoTexto").value;
    document.getElementById("teclaPress").innerHTML = valorCampo;
}