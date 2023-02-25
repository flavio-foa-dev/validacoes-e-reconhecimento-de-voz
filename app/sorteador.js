const menorValor = document.getElementById('number-smaller');
const maiorValor = document.getElementById('number-bigger');
const smaller = 1;
const bigger = 1000;
const numberSecret = sorteador();

function sorteador () {
  const numberSecret = parseInt(Math.random() * bigger + 1 );;

  return numberSecret;
}

console.log(numberSecret);

menorValor.innerHTML = smaller;
maiorValor.innerHTML = bigger;
