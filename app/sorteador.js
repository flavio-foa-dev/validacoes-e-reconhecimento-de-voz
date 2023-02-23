const dysplayed = document.querySelector('.box')
dysplayed.innerHTML = sorteador()

function sorteador () {
  const numberSecret = parseInt(Math.random() *1000)

  return numberSecret
}

console.log(sorteador())
