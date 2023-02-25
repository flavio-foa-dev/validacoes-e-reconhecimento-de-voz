function ischuteValid(value) {
  const parseValue = parseInt(value, 10);

  if (value === "game over"){
    document.body.innerHTML = `
    <h3>GAME OVER</h3>
    <h2>O numero era ${numberSecret}</h2>
    <button class="btn-play" id="btn">Jogar</button>
    `
    document.body.classList.add('b')
    return
  }

  if (valueValid(parseValue)) {
    elementChute.innerHTML += `<p> valor invalido! </p>`;
    return
  }

  if (valueRange(parseValue)){
    elementChute.innerHTML += '<p> chute fora do range</p>'
    return
  }

  if (parseValue === numberSecret){
    document.body.innerHTML += `
    <h2>Voce acertou o numero secreto!</h2>
    <h3>O numero era ${numberSecret}</h3>
    <button class="btn-play" id="btn">Jogar</button>
    `;
  } else if (parseValue > numberSecret) {
    elementChute.innerHTML += `
    <div id=""> o numero e menor <i class="fa-sharp fa-solid fa-circle-down"></i></div>
    `;
  }else {
    elementChute.innerHTML +=  `
    <div id=""> o numero e maior <i class="fa-sharp fa-solid fa-circle-up"></i></div>
    `;
  }


}

function valueValid(parseValue) {
  return Number.isNaN(parseValue);
}

function valueRange(parseValue){
  return parseValue < smaller || parseValue > bigger

}

document.body.addEventListener('click', function(e){
  if (e.target.id === 'btn') {
    window.location.reload();
  }
})
