function contar() {
    let ini = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let pss = document.querySelector('input#passo')
    let res = document.querySelector('div#res')
    
     if (ini.value.length == 0 || fim.value.length == 0 || pss.value.length == 0) {
        res.innerText = 'Impossível contar!'
    } else {
        res.innerHTML = "Contando: <br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pss.value)
        if (pss.value == 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //CONTAGEM CRESCENTE
            while (i <= f){
                res.innerHTML += `${i} \u{1F449} `
                i += p
            }
        } else {
            //CONTAGEM DECRESCENTE
            while (i >= f){
                res.innerHTML += `${i} \u{1F449} `
                i -= p
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}