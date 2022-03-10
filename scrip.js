let scoreCounter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement('span');
  bubble.classList.add('bubble');
  document.body.appendChild(bubble);

  const size = Math.round(Math.random() * 200 + 100) + 'px';
  bubble.style.width = size;
  bubble.style.height = size;

  bubble.style.top = Math.round(Math.random() * 100 + 50) + '%  ';
  bubble.style.left = Math.round(Math.random() * 100) + '%';

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty('--left', Math.random() * plusMinus * 100 + '%');
  setTimeout(() => {
    bubble.remove();
  }, 8000);

  bubble.addEventListener('click', () => {
    bubble.remove();
    scoreCounter += 1;
  });
  counter.innerText = scoreCounter;
};
setInterval(bubbleMaker, 300);
