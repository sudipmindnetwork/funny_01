document.getElementById('noBtn').addEventListener('click', moveButton);
document.getElementById('yesBtn').addEventListener('click', showMessage);

function moveButton() {
  const noBtn = document.getElementById('noBtn');
  const width = window.innerWidth;
  const height = window.innerHeight;
  const newX = Math.random() * (width - 100);
  const newY = Math.random() * (height - 100); 
  noBtn.style.position = 'absolute';
  noBtn.style.left = newX + 'px';
  noBtn.style.top = newY + 'px';
}

function showMessage() {
  alert("I know you very well LOL !!!");
}
