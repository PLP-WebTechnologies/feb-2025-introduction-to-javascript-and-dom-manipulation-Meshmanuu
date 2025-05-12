document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('text').textContent = 'The text has been changed!';
});

document.getElementById('changeStyleButton').addEventListener('click', function() {
    document.getElementById('text').style.color = 'blue';
    document.getElementById('text').style.fontSize = '20px';
});

document.getElementById('addElementButton').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'A new paragraph has been added!';
    document.getElementById('newElementContainer').appendChild(newElement);
});

document.getElementById('removeElementButton').addEventListener('click', function() {
    const container = document.getElementById('newElementContainer');
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
});
