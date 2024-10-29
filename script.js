let selectedText = 'BYE';
let capturedText = document.createElement('p');
//document.append(capturedText);
const buttonElement = document.getElementsByClassName('button-translate');
console.log(buttonElement);

chrome.storage.local.set({ selectedText: selectedText });

document.addEventListener('selectionchange', () => {
  console.log('eventListener is being executed');
  selectedText = window.getSelection().toString();
  console.log(selectedText);
  capturedText.innerText = `Testing this text area: ${selectedText}`;
});

buttonElement.addEventListener('click', () => {
  alert('Button Works');
});
//we should insert a buttom in aour popup.html
//then, we should insert an eventListener associated to click on button
//after we highlited, it;s supposed that we have an in
//eventListener('click', ()=>{
// selectedText => out API google traslate and then do a fetch() })
