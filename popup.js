// chrome.runtime.onMessage.addListener((message) => {
//   alert(message);
//   if (message.selectedText) {
//     const capturedText = document.getElementById('capturedText');
//     capturedText.innerText = `Testing this text area: ${message.selectedText}`;
//   }
// });

chrome.storage.local.get(['selectedText'], (result) => {
  console.log(result);
  if (result.selectedText) {
    const capturedText = document.getElementById('capturedText');
    capturedText.innerText = `Testing this text area: ${result.selectedText}`;
  }
});


//fetch('url') // api for the get request
// .then(response => response.json()) //PROMISES
// .then(data => console.log(data));



