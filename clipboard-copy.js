const textCopy = document.querySelector('.Hex');
const allText = document.querySelector('.color-code');

allText.addEventListener('click', function(){

    navigator.clipboard.writeText(textCopy.innerHTML);

    alert('The color is copied to the clipboard');

});