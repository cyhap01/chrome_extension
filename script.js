let selectedText = '';
let capturedText = document.createElement('p');
//document.append(capturedText);

document.addEventListener('selectionchange', () => {
  selectedText = window.getSelection().toString();
  console.log(selectedText);
  capturedText.innerText = `Testing this text area: ${selectedText}`;
});
chrome.storage.local.set({ selectedText: selectedText });

const button = document.getElementsByClassName('button-translate');

// button.addEventListener('click', () => {
//   // const textStorage = localStorage.getItem('selectedText');
//   if (!selectedText) {
//     alert('Por favor, selecciona un texto primero.');
//     return;
//   }
//   fetch(
//     `https://translation.googleapis.com/language/translate/v2?key=${apiKey}&target=es&q=${encodeURIComponent(
//       selectedText
//     )}`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       const translatedText = data.data.translations[0].translatedText;
//       const translationElement = document.getElementById('translation');
//       translationElement.textContent = translatedText;
//     })
//     .catch((error) => {
//       console.error('Error al traducir:', error);
//       alert(
//         'Ocurrió un error al traducir. Por favor, inténtalo de nuevo más tarde.'
//       );
//     });
// });

//we should insert a buttom in aour popup.html
//then, we should insert an eventListener associated to click on button
//after we highlited, it;s supposed that we have an in
//eventListener('click', ()=>{
// selectedText => out API google traslate and then do a fetch() })
