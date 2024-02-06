const textCopy = document.querySelector('.Hex');

textCopy.addEventListener('click', function(){

    navigator.clipboard.writeText(textCopy.innerHTML);

    alert('Text copied to clipboard');

});