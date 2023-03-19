let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function adicionar() {
    let n = Number(num.value)
    if (num.value.length == 0 || valores.indexOf(n) != -1 || num.value > 100 || num.value <= 1) { //testa número repetido ou fora do limite
        alert('[ERRO] Valor inválido ou já encontrado na lista')
    } else {
        lista.style.display = 'block' //mostra o select
        res.innerHTML = '' //reseta a resposta quando clicar no botão adicionar
        valores.push(n) //adiciona o valor no array!!!!
        let opt = document.createElement('option')
        lista.appendChild(opt)
        for(let c = 0; c < valores.length; c++) {
            opt.text = `Valor ${valores[c]} adicionado`
        }
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('[ERRO] Adicione algum valor para continuar!') //[1, 2, 3, 4, 5, 6, 7, 8]
    } else {
        let length = Number(valores.length)
        let soma = 0
        valores.sort((a, b) => a - b) //coloca em ordem crescente

        for (let c = 0; c < length; c++) { //soma todos os números dentro do array
            soma += valores[c]
        }
        let media = soma / length //calcula a média
        res.innerHTML = `<p>Ao todo temos ${length} valores</p>`
        res.innerHTML += `<p>O maior valor é ${valores[length - 1]}</p>`
        res.innerHTML += `<p>O menor valor é ${valores[0]}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}