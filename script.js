document.addEventListener('DOMContentLoaded', () => {


  document.querySelector('#shareBtn').addEventListener('click', (e) => {
    document.querySelector('.card__footer').classList.toggle('card__footer--share');
    document.querySelector('#shareBtn').classList.toggle('btn--alt');
  });

  // Show section/tooltip on click.

  // Hide section/tooltip on click again and also focus lost.
});