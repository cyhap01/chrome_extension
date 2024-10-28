const entireBody = document.querySelector('body');
document.addEventListener('selectionchange', () => {
  const selectedText = window.getSelection().toString();
});
