let nome = 'Nat'

fetch('https://cep.awesomeapi.com.br/20761121')
.then(resposta => resposta.json())
.then(dados => console.log(dados.address_name))

//processo de consumo de API

console.log(nome)

function qualquer (){
    return 2
}

console.log(qualquer())

const curso = 'PRETALAB'

document.getElementById('aula').innerHTML = 'Trabalhando com o D.O.M no JavaScript'

const novaDiv = document.createElement('div')

novaDiv.innerHTML = 'Div criada com o DOM'

document.getElementById('aula').appendChild(novaDiv)









