// Array com as repostas das perguntas

var resposta = {
    respostas: ['','','','']
    
}

var questoesResp = {
    questoes: ['2001','Avatar','Homem de Ferro','2015']   
}
function pegarRespostas(){    
        resposta.respostas[0] = document.getElementById('input_1').value             
        resposta.respostas[1] = document.getElementById('input_2').value       
        resposta.respostas[2] = document.getElementById('input_3').value 
        resposta.respostas[3] = document.getElementById('input_4').value                    
}

function conferirResposta(){
    pegarRespostas();
    var cont = 1
    for(var i in questoesResp.questoes){
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
function mostrarPergunta(){
    document.querySelector('#pergunta_1').classList.remove('oculto')
    document.querySelector('#pergunta_1').innerHTML = '1 - Qual o ano de lançamento do primero filme do Harry Potter? '
    document.querySelector('#pergunta_1').classList.add('perguntas')
    document.getElementsByClassName('inputs').style.opacity = '0'
}