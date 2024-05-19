const toggleButton = document.getElementById('toggle-button');
const paragraph1 = document.getElementById('paragraph1');
const paragraph2 = document.getElementById('paragraph2');

toggleButton.addEventListener('click', () => {
  if (paragraph2.style.display !== 'none') {
    paragraph2.style.display = 'none';
  } else {
    paragraph2.style.display = 'block';
  }
});
