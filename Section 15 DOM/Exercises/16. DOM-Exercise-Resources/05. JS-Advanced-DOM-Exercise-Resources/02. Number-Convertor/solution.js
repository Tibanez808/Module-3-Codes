function solve() {
    let options = document.querySelector('#selectMenuTo option')
    let selectMenu = document.querySelector('#selectMenuTo')
    let numInput = document.querySelector('#input')
    let convertButton = document.querySelector('button')
    let output = document.querySelector('#result')
    
    console.log(options)
    options.textContent = 'Binary'
    options.setAttribute('value',  'binary')
    options.setAttribute('selected',  'binary')
    // options.setAttribute('selected',  'binary')
    let hexadecimal = document.createElement('option')
    hexadecimal.textContent = 'Hexadecimal'
    hexadecimal.setAttribute('value', 'hexadecimal')
    // hexadecimal.setAttribute('selected', 'Hexadecimal')
    selectMenu.appendChild(hexadecimal)
    
    convertButton.addEventListener('click', () => {
        console.log(selectMenu.value)
        console.log(output)
        if(selectMenu.value == 'binary') {
            console.log(numInput.value)
            let converted = Number(numInput.value).toString(2)
            console.log(converted)
            output.value = converted
        } else if (selectMenu.value == 'hexadecimal') {
            console.log(numInput.value)
            let converted = Number(numInput.value).toString(16)
            console.log(converted)
            output.value = converted
        }
        
    })

    
}