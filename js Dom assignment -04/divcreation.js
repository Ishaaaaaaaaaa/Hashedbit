const containerEl = document.getElementById('container');

const newDiv = document.createElement('div');
newDiv.classList.add('new-div');
newDiv.textContent = "This is a dynamically created div.";

containerEl.appendChild(newDiv);
