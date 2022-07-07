var respostas = {
    primeiraQuestao: 2001,
    seguntaQuestao: 2002
}

function conferirResposta(){
    var resposta = document.getElementById('input_1').value
    if(resposta == respostas.primeiraQuestao[0]){
        window.alert('Acertou')
    }
    else{
        window.alert('incorreto')
    }
}