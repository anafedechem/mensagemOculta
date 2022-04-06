//função para determinar que quando em <select> a opção selecionada for "Cifra de Cesar" aparecerá
//...um campo para informar o valor de incremento 

function fornecerIncremento(){
    let divIncremento = document.getElementById("incr");
    let selected = document.getElementById("bases").value
    if( selected == "cifra" ) {
        divIncremento.style.display = '';
    } else {
        divIncremento.style.display = 'none';
    }
}

