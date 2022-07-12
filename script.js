// Array com as repostas das perguntas

var resposta = {
    resposta1: ['',''],
    resposta2: ['',''],
    resposta3:['','']
}

var questoesResp = {
    primeiraQuestao: ['2001',''],
    seguntaQuestao: ['Avatar','Vingadores Ultimato'],
    terceiraQuestao:['Homem de Ferro','Homem Aranha',]
}
function pegarRespostas(){    
        resposta[0] = document.getElementById('input_1').value
        resposta[1] = document.getElementById('input_2').value
        resposta[2] = document.getElementById('input_3').value    
}

function conferirResposta(){
    pegarRespostas();
    var cont = 1
    for(var i = 0; i<3; i++){
        console.log(resposta[i],[i])
        console.log('Respostas'+questoesResp[i],[i])
        if(resposta[i],[i] == questoesResp[i],[i]){
            window.alert(cont +' - Questão: Acertou')
            cont++
         }
        else if (resposta[i],[i] == ''){        
            window.alert('incorreto')
            cont++
        }

        else if(resposta[i],[i] != questoesResp[i],[i]){
            window.alert('incorreto')
            cont++
        }
  
    }
}