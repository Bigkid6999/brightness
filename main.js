// BRIGHTNESS IPO CALC BY MR.F

// Event listener on the button
document.getElementById('btn').addEventListiner('click', btnClicked);

function btnClicked() {
    
}

//Input
let R = +prompt("Enter a R color value (Red):");
let G = +prompt("Enter a G color value (Green):");
let B = +prompt("Enter a B color value(blue):");


//Process
let brightness = Math.sqrt(0.299(R) ** 2 + 0.587(G) ** 2 + 0.114(B) ** 2);  

//Output
alert ('the brightness is:${brightness}');