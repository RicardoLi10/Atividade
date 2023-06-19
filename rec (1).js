//                             ATRIBUIÇÃO DE VARIAVEIS

// const idade = 17
// const nome = 'RicarLinck'

//                             RETRIBUIÇÃO DE VARIAVEIS
//A)
// var prompt = require ('prompt-sync')();

// let nome = 0;
// function retornarSaudação(){
// nome = prompt('Digite seu nome:  ');
// console.log('Ola,',nome,'!');
// }
// retornarSaudação();

//                              LAÇOS DE REPETIÇAO

// for(let n = 1; n<= 10; n++){
//     console.log(n);
// }

//                              TESTES LOGICOS
//A)
// var prompt = require ('prompt-sync')();

// idade = Number(prompt (`Digite sua idade se pode dirigir ou não:`));

// const minima= 18;
// if(idade>= 18 && minima<= 75){

//     console.log('voce pode dirigir.');
// }
// else{
//     console.log('Voce nao pode dirigir');
// }

//                              DESAFIO

// var prompt = require ('prompt-sync')();

// numero = Number(prompt (`Digite o numero:`));

// const n = parseInt(numero);
// let impar= 0;
// for( let i = 1;i<= n; i+=2){
//     impar+= i;
// }
// console.log('A soma dos numeros impares é:', impar);

//                              EXERCICIO FINAL

// var prompt = require ('prompt-sync')();

// let s =0;
// let saltos = Array()
// let soma=0;
// let atleta = 'Rodrigo Curvello';
// while(true){
// nome = prompt('Nome Do Atleta ou ENTER para cancelar:  ');
//     if(nome!==atleta){
//         console.log('Nome Invalido. Programa encerrado');
//         break;
//     }   else{
//         console.log('ok.Vamos seguir para os saltos');
//     }
// for(s=0; s<5;s++){
//     saltos[s] = Number(prompt('Distancia do salto:  '));
//     //console.log('indice',[s]);
//     saltos[s]=saltos[s];
//     soma+=saltos[s];
// }
// console.log('saltos array',saltos);
// let maior = saltos[0];
// let menor = saltos[0]
// let maiorSalto = 0;
// let menorSalto = 0;
// let media = 0;
// for(m=0;m<saltos.length;m++){
//     if (saltos[m] > maior){
//         maior= saltos[m];
//         maiorSalto = maior;
//     }
//     if (saltos[m] < menor){
//         menor = saltos[m];
//         menorSalto = menor;
//     }
// }
// console.log('O maior salto:  ',maior);
// console.log('O menor Salto:  ',menor);
// media = (soma - (maior+menor))/3;
// console.log('A media dos valores restantes é:  ',media)

// console.log('RESULTADO FINAL:',nome,':',media);
// }