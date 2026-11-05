// The button controls the editable fun fact in index.html.
const funFactButton = document.getElementById('fun-fact-button');
const funFact = document.getElementById('fun-fact');

funFactButton.addEventListener('click', () => {
  const isExpanded = funFactButton.getAttribute('aria-expanded') === 'true';
  funFactButton.setAttribute('aria-expanded', String(!isExpanded));
  funFact.hidden = isExpanded;
  funFactButton.innerHTML = isExpanded
    ? 'Show fun fact <span aria-hidden="true">↗</span>'
    : 'Hide fun fact <span aria-hidden="true">↙</span>';
});
