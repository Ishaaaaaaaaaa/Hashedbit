const createButton = document.getElementById('create-button');
const containerEl = document.getElementById('container');

createButton.addEventListener('click', () => {
  for (let i = 0; i < 3; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('dynamic-element');
    newDiv.textContent = i + 1; // Set content (optional)
    containerEl.appendChild(newDiv);
  }
});
