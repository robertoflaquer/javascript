function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', '.img/crianca-h.png')
            } else if (idade < 20) {
                img.setAttribute('src', '.img/jovem-h.png')
            } else if (idade < 60) {
                img.setAttribute('src', '.img/adulto-h.png')
            } else {
                img.setAttribute('src', '.img/idoso-h.png')
            }
        } else {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', '.img/crianca-m.png')
            } else if (idade < 20) {
                img.setAttribute('src', '.img/jovem-m.png')
            } else if (idade < 60) {
                img.setAttribute('src', '.img/adulto-m.png')
            } else {
                img.setAttribute('src', '.img/idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerText = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}