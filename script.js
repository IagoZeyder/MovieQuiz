var respostas = {
    primeiraQuestao: 2001,
    seguntaQuestao: Avatar
}

function conferirResposta(){
    var resposta = document.getElementById('input_1').value
    var resposta = document.getElementById('input_2').value
    if(resposta == respostas.primeiraQuestao[0]){
        window.alert('Acertou')
    }
    else{
        window.alert('incorreto')
    }
}