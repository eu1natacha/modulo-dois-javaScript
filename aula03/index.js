const alunas = [
	{
  	nome: 'Nath',
    nota: 5.5
    curso: 'Sistema da Informação'
  },
  {
  	nome: 'Joyce',
    nota: 9,
    curso: 'Letras'
  },
  {
  	nome: 'Vera',
    nota: 9,
    curso: 'Engenharia'
  }
]

    alunas.filter((aluna) => {
        if (aluna.nota >=7) {
            console.log(aluna.nome + 'Aprovada')
    } else{
        console.log(aluna.nome + 'Reprovada')
    }
    })


    console.log
