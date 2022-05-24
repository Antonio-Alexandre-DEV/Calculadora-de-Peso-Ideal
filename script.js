//O Q PRECISO DE ENTRADA? O Q DEVE SAIR? COMO FAZER ESSA AÇÃO?//

// DIVIDIR OS PROBLEMAS EM PROBLEMAS MENORES//

//NESSE DESAFIO O PRINCIPAL PROBLEMA SERIA CALCULAR O IMC, ENTÃO VAMOS COMEÇAR POR ELE//

let niveis = ["Muito abaixo do peso", 
              "Abaixo do peso", 
              "Peso normal",
              "Acima do peso",
              "Obesidade grau I", 
              "Obesidade grau II",
              "Obesidade grau III"]

//para calcular o IMC de varias pessoas usarei novamente"Array"/

let pessoas = ["Antonio", "Alexandre", "Igor"]
let massas = [100, 68,79]
let alturas = [1.81, 1.75, 1.68]

//modificar let imc = calcular (massas[0], alturas[0]); vai mostrar  o estado da pessoa "Antonio"//

//para imprimir as 3 pessoas juntas faremos outras modificaçoes//

function calcularIMC (massa, altura){

    let imc = massa / (altura **2);
     return imc
}

//agora vamos ver se funciona//

//console.log(calcularIMC(100,1.90));

//mas o que "27" quer dizer? Agora criarei niveis para descobrir//

function verificarNivel (imc){

    let nivel = 0;

//valores dos niveis retirados de uma site especifico//

        if (imc < 17){
            nivel = 0
        }else if (imc < 18.5){
            nivel = 1
        }else if (imc < 25){
            nivel = 2
        }else if (imc < 30){
            nivel = 3
        }else if (imc < 35){
            nivel = 4
        }else if (imc < 40){
            nivel = 5
        }else {
            nivel = 6
        }
            return nivel
}

for(let indice = 0; indice < pessoas.length; indice++){
let pessoa = pessoas[indice];
let massa = massas[indice];
let altura = alturas[indice];

let imc = calcularIMC (massa, altura);
let nivel = verificarNivel(imc);

console.log("Nome:" + pessoa);
console.log("Peso:" + massa);
console.log("Altura:" + altura);
console.log("IMC:" +imc.toFixed(2));
console.log(niveis[nivel]);
console.log(" ");
}


