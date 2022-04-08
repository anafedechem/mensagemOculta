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
//função para que:
//se select == "cifra" e radio == "codificar" --> function codificarCifraDeCesar()
//se select == "cifra" e radio == "decodificar" --> function decodificarCifraDeCesar()

//se select == "base64" e radio == "codificar" --> function codificarBase64()
//se select == "base64" e radio == "decodificar" --> function decodificarBase64()

function mostrarResultado() {
    let bases = document.getElementById("bases")
    let codificarChecked = document.getElementById("codificar").checked;

    if (bases.value == "cifra" && codificarChecked == true){
        codificarCifraDeCesar()
    } else if (bases.value == "cifra" && codificarChecked == false){
        decodificarCifraDeCesar()
    } else if (bases.value != "cifra" && codificarChecked == true){
        codificarBase64()
    } else{
        decodificarBase64()
    }
}

//

//--------------------------------------------------------------------------------------------
//Funções para Cifra De Cesar

function codificarCifraDeCesar() {
    let alfabeto = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    let dadosRecebidos = document.getElementById("dadosATratar").value;
    let dadosCodificados = '';
    let incremento = parseInt(document.getElementById("valorDoIncremento").value); //converter o valor do incremento que estava em string para number

    // descobrir posição da letra no alfabeto.
    // descobrir posição da nova letra usando incremento
        // descobrir qual é a nova letra consultando o alfabeto na posição da nova letra
    for (let i = 0; i < dadosRecebidos.length; i++) {
        let letra = dadosRecebidos.charAt(i).toUpperCase(); 
        let posicaoDaLetra = alfabeto.indexOf(letra);
        let posicaoDaNovaLetra = (posicaoDaLetra + incremento) % 27;
        let novaLetra = alfabeto[posicaoDaNovaLetra]

        dadosCodificados = dadosCodificados + novaLetra

    }
    document.getElementById("dadosTratados").value = dadosCodificados; 
}

//---------------------------------------------------------------------------------------------
function decodificarCifraDeCesar() {
    function moduloCustomizado(x, m) {
        return (x % m + m) % m;
    }
    //fazer a mesma logica de cofidicar só que ao inves de somar subtrai o valor do incremento    
        let alfabeto = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    
        let dadosRecebidos = document.getElementById("dadosATratar").value;
        let dadosCodificados = '';
        let incremento = parseInt(document.getElementById("valorDoIncremento").value); //converter o valor do incremento que estava em string para number
    
        // descobrir posição da letra no alfabeto.
        // descobrir posição da nova letra usando incremento
            // descobrir qual é a nova letra consultando o alfabeto na posição da nova letra
        for (let i = 0; i < dadosRecebidos.length; i++) {
            let letra = dadosRecebidos.charAt(i).toUpperCase(); 
            let posicaoDaLetra = alfabeto.indexOf(letra);

            let posicaoDaNovaLetra = moduloCustomizado((posicaoDaLetra - incremento), 27);
            let novaLetra = alfabeto[posicaoDaNovaLetra]
    
            dadosCodificados = dadosCodificados + novaLetra
    
        }
        document.getElementById("dadosTratados").value = dadosCodificados; 
}


//--------------------------------------------------------------------------------------------
//Funções para base64

function codificarBase64(){
    let valorDadosACodificar = document.getElementById("dadosATratar").value;
    let valorDadosCodificados = atob(valorDadosACodificar);

    document.getElementById("dadosTratados").value = valorDadosCodificados;
}
    
function decodificarBase64() {
    let valorDadosCodificados = document.getElementById("dadosATratar").value;
    let valorDadosDecodificados = btoa(valorDadosCodificados);

    document.getElementById("dadosTratados").value = valorDadosDecodificados;    
}
