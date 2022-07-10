var respostas = {
    primeiraQuestao: '2001',
    seguntaQuestao: ['Avatar','Vingadores Ultimato']
}
var resposta
var resposta2
function pegarRespostas(){
    resposta = document.getElementById('input_1').value
    resposta2 = document.getElementById('input_2').value
}

function conferirResposta(){
    pegarRespostas();
    if(resposta == respostas.primeiraQuestao){
        window.alert('Acertou')
    }
    else if (resposta == null){        

    }

    else{
        window.alert('incorreto')
    }

    if(resposta2 == respostas.seguntaQuestao[0] ){
        window.alert('Acertou')
    }

    else if (resposta2 ==  null){        

    }

    else{
        window.alert('incorreto')
    }

}