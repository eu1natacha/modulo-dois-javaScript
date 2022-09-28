//let i = 0 

    //while (i < 11){
      //  console.log(" 2 x " + i + " = " + 2*i);
     //   i++;
//}

//  //  //  //

// let salario = 1000

   // while (salario < 5000){
      //  salario +=500;
       // console.log(" O salário é R$" + salariotoFixed(2))
  //  }


  const alunas = [
    { aluno: 'Pitico', nota: 10},
    { aluno: 'Becky', nota: 10},
    { aluno: 'Nat', nota: 9},
    { aluno: 'Renan', nota: 6.75},
];

let index = 0;
let somaDasNotas = 0;
let totalAlunas = alunas.length;

do {
    somaDasNotas += alunas[index].nota;

    index++;
    } while (index < totalAlunas);

    let media = somaDasNotas / totalAlunas;

    console.log(media.toFixed(2));


// laços de repetição 
  //  loop
