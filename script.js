const btnTry = document.querySelector('#btnTry')
const btnTryAgain = document.querySelector('#btnTryAgain')
const  screen1 = document.querySelector('.screen1')
const  screen2 = document.querySelector('.screen2')
let msgErro = document.querySelector('h3')
let randomNumber = Math.round(Math.random() * 10)
let attempts = 1

function clickBtnTry(event){
    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumber")
    if(validaInput(inputNumber)){
    }else{
        if(Number(inputNumber.value) == randomNumber){
            handleClick()
            document.querySelector('.screen2 h2').innerHTML = `Acertou em ${attempts} Tentativas!`
        }

        inputNumber.value = ""
        attempts ++
    }
}

//Event

btnTry.addEventListener('click', clickBtnTry)

btnTryAgain.addEventListener('click', clickBtnTryAgain)

function clickBtnTryAgain(){
    handleClick()
    randomNumber = Math.round(Math.random() * 10)
    attempts = 1
}

function handleClick(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

document.addEventListener('keydown', function(event){
    console.log(event.key)
    if(event.key == 'Enter' && screen1.classList.contains('hide')){
        clickBtnTryAgain()
    }
} )


function validaInput(dado){
    let dadoTempo = dado.value
    dado.value = ""
    if(dadoTempo < 0 || dadoTempo > 10  ){
        return msgErro.innerHTML = `Erro!! O numero tem que está entre 0 e 10 você digitou ${dadoTempo}`
    }else if(dadoTempo == ""){
       return msgErro.innerHTML = `Por favor digite algun numero`
    }else{
        return msgErro.innerHTML = ""
    }
}
