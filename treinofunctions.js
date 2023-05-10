const tela = document.getElementById('exemplo')
const array = [1,2,3,4,5,6,7,8,9,10]

function soma (num1, num2){
    return tela.innerHTML = `<p>${num1 + num2}</p>`
}
soma(15,20)

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