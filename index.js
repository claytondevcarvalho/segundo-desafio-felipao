let saldo = diferencaVitoriasDerrotas(100,50)
let nomeRank = ["Ferro","Bronze","Prata","Ouro","Diamante","Lendário","Imortal"]
let numeroRank = 0

main()

function diferencaVitoriasDerrotas(vitorias = 0 , derrotas = 0){
    return vitorias - derrotas;
}
function calcularRank(){
    if (saldo<10){
        numeroRank = 0
    }
    else if (saldo >= 10 && saldo <=20){
        numeroRank = 1
    }
    else if (saldo > 20 && saldo <=50){
        numeroRank = 2
    }
    else if (saldo > 50 && saldo <=80){
        numeroRank = 3
    }
    else if (saldo > 80 && saldo <=90){
        numeroRank = 4
    }
    else if (saldo > 90 && saldo <=100){
        numeroRank = 5
    }else {
        numeroRank = 6
    }
    return numeroRank
}
function main(){
    calcularRank()
    console.log(`O Herói tem um saldo de ${saldo} vitórias e está no nível ${nomeRank[numeroRank]}!!!`)
}