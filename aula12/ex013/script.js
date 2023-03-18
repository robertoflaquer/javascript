function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = "./.img/img-manha.png"
        document.body.style.background = "#d9c697"
    }else if (hora >= 12 && hora < 18) {
        img.src = "./.img/img-tarde.png"
        document.body.style.background = "#b24007"
    } else {
        img.src = "./.img/img-noite.png"
        document.body.style.background = "#34263f"
    }
}