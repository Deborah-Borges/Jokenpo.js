var contUsuario = 0
var contMaquina = 0 

function placar(params) {
    if (contUsuario === 2) {
        alert('Você ganha')

    } else if (contMaquina === 2){
        alert('Oponente ganha')
    }      
}

function playAgain(params) {
    if (contUsuario === 1) {
        return playGame()
        
    } else if(contMaquina === 1){
        return playGame()

    } else if (contUsuario === contMaquina) {
        return playGame()

    } else {
        return placar()   
    }
}

function verificarGanhador(usuario, oponente) {

    if (usuario === oponente) {
        contUsuario = contMaquina = 0
        alert('empate')
        return contUsuario = contMaquina = 0
        
    } else if (usuario === 1) {
        if (oponente === 3){
            return contUsuario = contUsuario + 1
        } else {
            return contMaquina = contMaquina + 1
        }
    } else if (usuario === 2) {
        if (oponente === 1) {
            return contUsuario = contUsuario + 1
        } else {
            return contMaquina = contMaquina + 1
        } 
    } else if (usuario === 3) {
        if (oponente === 2) {
            return contUsuario = contUsuario + 1
            
        } else {
            return contMaquina = contMaquina + 1
        }
          
    }

}

function validarEntrada(escolhaUsuario) {
    if(escolhaUsuario === 1|| escolhaUsuario === 2|| escolhaUsuario === 3) {
        return true
    } else {
        alert('Jogada inválida, tente novamente')
        return false
    }

}


function playGame() {
    
    let usuario = Number(prompt('escolha uma opção: 1 = pedra, 2 = papel, 3 = tessoura'))
    validarEntrada(usuario)

    console.log('jogada usuário' , usuario)
    let oponente = Math.floor(Math.random()* 3) + 1
    console.log('jogada pc' , oponente)

    let verificarG = verificarGanhador(usuario, oponente) 
    console.log('ponto usuário' ,contUsuario)
    console.log('ponto Oponente', contMaquina)
    
    if (verificarG = 1) {
        
        playAgain() 
         
    }
    
}

    

function startGame(params) {
    var usuarioDesejaJogar = confirm('Deseja jogar Jokenpo')
    
    if (usuarioDesejaJogar === true) {
        playGame()
    } else {
        alert('Obrigado por vizitar a página')
    }

}  
startGame()


