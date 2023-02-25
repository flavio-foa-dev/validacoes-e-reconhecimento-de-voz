
function ischuteValid(value) {
  const parseValue = parseInt(value, 10);

  if (valueValid(parseValue)) {
    elementChute.innerHTML = `<p> valor invalido! </p>`;
  }

  if (valueRange(parseValue)){
    elementChute.innerHTML = '<p> chute fora do range</p>'
  }

  if (parseValue === numberSecret){
    document.body.innerHTML = `
    <h2>Voce acertou o numero secreto!</h2>
    <h3>O numero era ${numberSecret}</h3>
    `;
  }

}

function valueValid(parseValue) {
  return Number.isNaN(parseValue);
}

function valueRange(parseValue){
  return parseValue < smaller || parseValue > bigger

}
