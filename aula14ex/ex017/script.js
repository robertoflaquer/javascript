function gerar() {
    let number = document.querySelector('input#txtnum')
    let tab = document.querySelector('select#seltab')
    tab.style.display = 'block'

    if (number.value.length == 0) {
        alert('Por favor, digite um número.')
        tab.style.display = 'none'
    }else {
        tab.innerHTML = ''
        let n = Number(number.value)
        for(let c = 1; c <= 10; c++){
            let opt = document.createElement('option')
            tab.appendChild(opt)
            opt.value = `tab${c}`
            opt.text = `${n} X ${c} = ${n*c}`
        }
    }
}