const elementChute = document.querySelector('#chute')
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition()
recognition.lang = 'pt-BR'
recognition.start()




recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
const chute = e.results[0][0].transcript
ischuteValid(chute)
showChute(chute)
}

function showChute(chute) {
  elementChute.innerHTML += `
    <div>Voce disse.</div>
    <span class="box">${chute}</span>
  `;
}

