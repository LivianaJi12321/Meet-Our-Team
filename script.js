// Each button controls the fun fact identified by its aria-controls attribute.
document.querySelectorAll('.fun-fact-button').forEach((funFactButton) => {
  const funFact = document.getElementById(funFactButton.getAttribute('aria-controls'));

  funFactButton.addEventListener('click', () => {
    const isExpanded = funFactButton.getAttribute('aria-expanded') === 'true';
    funFactButton.setAttribute('aria-expanded', String(!isExpanded));
    funFact.hidden = isExpanded;
    funFactButton.innerHTML = isExpanded
      ? 'Show fun fact <span aria-hidden="true">↗</span>'
      : 'Hide fun fact <span aria-hidden="true">↙</span>';
  });
});
