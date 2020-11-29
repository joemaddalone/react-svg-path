(() => {
  document.body.addEventListener('keyup', (e) => {
    if (e.which === 9) {
      document.documentElement.classList.remove('no-focus-outline');
    } else {
      document.documentElement.classList.add('no-focus-outline');
    }
  });

  document.body.addEventListener('click', () => {
    document.documentElement.classList.add('no-focus-outline');
  });
})();
