function playAudio(card) {
  const audio = card.querySelector('audio');
  audio.currentTime = 0;
  audio.play();
}

function pauseAudio(card) {
  const audio = card.querySelector('audio');
  audio.pause();
  audio.currentTime = 0;
}
