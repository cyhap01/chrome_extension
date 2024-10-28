let entireBody = document.querySelector('body');
let selectedText = null;
let highlightedText = document.addEventListener('selectionchange', () => {
  selectedText = window.getSelection().toString();
  console.log(selectedText);
  return selectedText;
});

console.log('It works');
const capturedText = document.createElement('p');
entireBody.append(capturedText);
capturedText.innerText = `testing this text area ${selectedText}`;
