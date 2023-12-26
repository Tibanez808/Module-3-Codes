function growingWord() {

 let word = document.querySelector('#exercise p')
    
 // get the current fontsize and color of the word
    let font = word.style.fontSize
    let color = word.style.color

    // check if no fontsize or color i will set the defaults
    if(!font&& !color) {
        word.style.color = 'blue';
        word.style.fontSize = '2px';
        return
    }

    // if clicked more than one time
    // if the word alread has color and font
    let size = font.slice(0, font.length - 2)
    size *= 2;
    word.style.fontSize = size+`px`;

    if(color === 'blue') {
        word.style.color = 'green'
    } else if (color === 'green') {
        word.style.color = 'red'
    } else if (color === 'red') {
        word.style.color = 'blue'
    }
}