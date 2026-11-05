// Each card's button independently controls its own editable fun fact.
[
  ['fun-fact-button', 'fun-fact'],
  ['mohan-fun-fact-button', 'mohan-fun-fact'],
].forEach(([buttonId, factId]) => {
  const button = document.getElementById(buttonId);
  const fact = document.getElementById(factId);

  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isExpanded));
    fact.hidden = isExpanded;
    button.innerHTML = isExpanded
      ? 'Show fun fact <span aria-hidden="true">↗</span>'
      : 'Hide fun fact <span aria-hidden="true">↙</span>';
  });
});
