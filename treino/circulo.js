function perimetro(r) {
    let per = 2*Math.PI*r
    return per.toFixed(2)
}

function area(r) {
    let a = Math.PI*r**2
    return a.toFixed(2)
}

console.log(`O perímetro do circulo é ${perimetro(8)}`)
console.log(`A área do circulo é ${area(8)}`)
