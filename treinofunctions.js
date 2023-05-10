const tela = document.getElementById('exemplo')
const array = [1,2,3,4,5,6,7,8,9,10]
const array2 = [...array, 55, 300, 800]

function numeroMaior(lista){
    let maior = lista[0]
    for (let num of lista){
        if (num > maior){
            maior = num
        }
    }
    return tela.innerHTML += `<p>${maior}</p>`
}
console.log(numeroMaior(array))

function mediaLista(Lista){
    let soma = 0
    for (let num of Lista){
        soma += num
    }
    console.log(soma)
    connsole.log(Lista.lenght)
    return soma / Lista.lenght
}
console.log(mediaLista(array2))