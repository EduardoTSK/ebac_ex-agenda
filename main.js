const form = document.getElementById('form')
const nomes = []
const numbs = []

let linhaS = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    addLinha()
    attTable()
})

function addLinha() {
    const nCont = document.getElementById('name')
    const telCont = document.getElementById('tel')

    if (nomes.includes(nCont.value)) {
        alert(`O contato: ${nCont.value} já foi inserido`)
    } else {
        nomes.push(nCont.value)
        numbs.push(parseInt(telCont.value))

        let linha = '<tr>'
        linha += `<td>${nCont.value}</td>`
        linha += `<td>${telCont.value}</td>`
        linha += '<tr>'

        linhaS += linha
    }

    nCont.value = ''
    telCont.value = ''
}

function attTable() {
    const tBody = document.querySelector('tbody')
    tBody.innerHTML = linhaS
}