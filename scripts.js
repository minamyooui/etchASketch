for (i=0; i <256; i++) {
    const p = document.querySelector('.wrapper');
    const d = document.createElement('div');
    d.classList.add('square'); 
    p.appendChild(d);
}
callAddHover();

function callAddHover() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', addColor));
    
}


function addColor () {
    if (this.style.backgroundColor) {
        let bg = this.style.backgroundColor;
        let rgbs = shadeRGB(bg); 
        this.style.backgroundColor = rgbs;
        return;
    }
    let rgb = randomRGB();
    this.style.backgroundColor = rgb;
}

function shadeRGB(bg) {
    let rgb = bg.match(/\d+/g);
        let r = parseInt(rgb[0]);
        let b = parseInt(rgb[1]);
        let g = parseInt(rgb[2]);
        let nR = r *.7;
        let nB = b *.7;
        let nG = g *.7;
        const nrgb = `rgb(${nR},${nG},${nB})`;
    return nrgb;
}

const button = document.querySelector('button');
button.addEventListener('click', resetGrid);

function resetGrid () {
    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = '';
    let squares = parseInt(prompt('How many square per side?', 10));
    while (squares>=100 || squares <=0) {
        squares = parseInt(prompt('Please enter a number between 1 and 100', 10));
    }
    wrapper.style.cssText = `display:grid; grid-template-columns: repeat(${squares}, 1fr); grid-template-rows: repeat(${squares}, 1fr); height: 960px; width: 960px;`;
    let nSquares = squares * squares;
    for (i=0; i<nSquares; i++){
        const p = document.querySelector('.wrapper');
        const d = document.createElement('div');
        d.classList.add('square'); 
        p.appendChild(d);
    }
    callAddHover();

}


function randomRGB() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
}