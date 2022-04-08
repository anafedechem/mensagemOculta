//função para determinar que quando em <select> a opção selecionada for "Cifra de Cesar"
// aparecerá um campo para informar o valor de incremento 

function aparecerCampoFornecerIncremento() {
    let divIncremento = document.getElementById("incr");
    let selected = document.getElementById("bases").value
    if (selected == "cifra") {
        divIncremento.style.display = '';
    } else {
        divIncremento.style.display = 'none';
    }
}

//ok

//--------------------------------------------------------------------------------------------


//função para fazer o botão trocar o texto e a função ao ser clicado
//quando o radio button "codificar" estiver selecionado, mostrar no botão:
//"Codificar Mensagem!"
//quando o radio button "decodificar" estiver selecionado, mostrar no botão:
//"Decodificar Mensagem!"
//function codificarMensagem() {

function alterarTextoDoBotao(elemento) {
    let botao = document.getElementById("btnCodDecod");

    if (elemento.value == "codificar") {
        botao.innerHTML = "Codificar Mensagem!"
    } else {
        botao.innerHTML = "Decodificar Mensagem!"
    }
}


//ok

//--------------------------------------------------------------------------------------------


function codificarCifraDeCesar() {
    let alfabeto = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    let dadosRecebidos = document.getElementById("dadosACodificar").value;
    let dadosCodificados = '';
    let incremento = document.getElementById("valorDoIncremento").value;


    for (let i = 0; i < dadosRecebidos.length; i++) {
        //dadosCodificados = indexOf + [i].value + valor do incremento + .toUpperCase + concatenar
        let letra = dadosRecebidos.charAt(i).toUpperCase()
        let novaLetra = letra + incremento % 27

        dadosCodificados = dadosCodificados + novaLetra

    }
}

//--------------------------------------------------------------------------------------------
//função para que quando estiver com o select em cifra de cesar e radio button codificar selecionado
//rodar a função codificarCifraDeCesar ao clicar no botão btnCodDecod

function mostrarResultado() {
    if (bases.value == "cifra") {
        alert("funcionou!")
    } else if (bases.value != "cifra") {
        alert("vai dar boa!")
    }
}



//função para que:
//se select == "cifra" e radio == "codificar" --> function codificarCifraDeCesar()
//se select == "cifra" e radio == "decodificar" --> function decodificarCifraDeCesar()

//se select == "base64" e radio == "codificar" --> function codificarBase64()
//se select == "base64" e radio == "decodificar" --> function decodificarBase64()








//---------------------------------------------------------------------------------------------
function decodificarCifraDeCesar() {
    //fazer a mesma logica de cofidicar só que ao inves de somar subtrai o valor do incremento    
    let alfabeto = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    let dadosRecebidos = document.getElementById("dadosACodificar").value;
    let dadosDecodificados = '';
    let incremento = document.getElementById("valorDoIncremento").value;

    for (let i = 0; i < dadosRecebidos.length; i++) {
        //dadosDecodificados = indexOf + [i].value + valor do incremento + .toUpperCase + concatenar
        let letra = dadosRecebidos.charAt(i).toUpperCase()
        let novaLetra = letra - incremento % 27

        dadosCodificados = dadosDecodificados + novaLetra

    }
    return dadosDecodificados
}




//--------------------------------------------------------------------------------------------
//Funções para base64

//function codificarBase64(){

//  let dadosRecebidos = document.getElementById("dadosACodificar").value;
// let dadosCodificados = document.getElementById("dadosDecoodificados").value;
//}


//function decodificarBase64(){
//  let valorDecodificado = atob(document.getElementById("dadosDecodificados").value);
//  let valorCodificado = atob(document.getElementById("dadosACodificar").value);
//}