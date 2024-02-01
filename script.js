const colorGenerator = document.querySelector('.color-generator');
const colorRGB = document.querySelector('.text');
const hexColor = document.querySelector('.Hex');





colorGenerator.addEventListener('click', function(){

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);


    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    colorRGB.innerHTML = `RGB (${red}, ${green}, ${blue})`;


        let redHex = red.toString(16).padStart(2, '0');
        let greenHex = green.toString(16).padStart(2, '0');
        let blueHex = blue.toString(16).padStart(2, '0');

        let hexCode = `#${redHex}${greenHex}${blueHex}`

        hexColor.innerHTML = hexCode.toUpperCase(); 
    
});



