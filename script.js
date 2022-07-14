// Array com as repostas das perguntas

var resposta = {
    respostas: ['','','']
    
}

var questoesResp = {
    questoes: ['2001','Avatar','Homem de Ferro']   
}
function pegarRespostas(){    
        resposta.respostas[0] = document.getElementById('input_1').value             
        resposta.respostas[1] = document.getElementById('input_2').value       
        resposta.respostas[2] = document.getElementById('input_3').value            
}

function conferirResposta(){
    pegarRespostas();
    var cont = 1
    for(var i = 0; i<3; i++){
        console.log(resposta.respostas[i])
        console.log('Respostas: '+questoesResp.questoes[i])
        if(resposta.respostas[i] == questoesResp.questoes[i]){
            window.alert(cont +' - Questão: Acertou')
            cont++
         }
        else if (resposta.respostas,[i] == ''){        
            window.alert('incorreto')
            cont++
        }

        else if(resposta.respostas[i] != questoesResp.questoes,[i]){
            window.alert('incorreto')
            cont++
        }
        for(var e = 0; e<2; e++){
            resposta.respostas[i] = ''
        }
  
    }
}