tds = document.querySelectorAll("td")


const palabraRandom = (longitud) => {
    palabra = ""

    for (i = 0; i < longitud; i++) {
        const numeroRandom = 65 + (Math.round(Math.random() * 25))
        const caracterRandom = String.fromCharCode(numeroRandom)
        palabra += caracterRandom
    }
    return palabra
}


for (i of tds) {
    i.innerHTML = palabraRandom(10)
}