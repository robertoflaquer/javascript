let dinheiro = 80

function abastecer(d) {
    let combustivel = d / 5
    return combustivel;
}

let comb = abastecer(dinheiro)

function andar(c) {
    let andar = c * 20
    return andar;
}

console.log(`Com essa quantidade de dinheiro você abastece ${abastecer(dinheiro)} litros`)
console.log(`Com ${comb} litros, o carro anda ${andar(comb)}km`)