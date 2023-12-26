function solve() {

    let expressionOutput = document.getElementById('expressionOutput')
    let resultOutput = document.getElementById('resultOutput')

    let clearButton = document.querySelector('.top button')
    console.log(clearButton)

    clearButton.addEventListener('click', () => {
        expressionOutput.innerText = ""
        resultOutput.innerText = ""
    })

    let buttons = document.querySelectorAll('.keys button')
    console.log(buttons)
    let newArray = Array.from(buttons)
    let removed = newArray.splice(14, 1)
    console.log(newArray)
    let equals = buttons[14]
    console.log(equals)
    // buttons.splice(14, 1)
    // buttons = buttons.shift()
    newArray.forEach(element => {
        element.addEventListener('click', () => {
            if (element.value == '/' || element.value == '*' || element.value == '-' || element.value == '+' ) {
                expressionOutput.innerHTML += ` ${element.value} `
                // expressionOutput.innerHTML += ` `
            } else if (element.value == '.') {
                expressionOutput.innerHTML += `${element.value}`
            } else {
                expressionOutput.innerHTML += element.value
            }

        })
    })
    equals.addEventListener('click', () => {
        console.log(expressionOutput)
        let [num1, del, num2] = expressionOutput.innerHTML.trim().split(' ')
        let data = expressionOutput.innerHTML.trim().split(' ')
        console.log(data)
        console.log(data.length)
        if(data.length == 1) {
            resultOutput.innerHTML = `${data}`

        } else if(data.length < 3 && data.length >1 ) {
            resultOutput.innerHTML = `${NaN}`
            console.log(data)
            console.log(resultOutput)
        }  else {

            switch (del) {
                case '+': result = Number(num1) + Number(num2);
                resultOutput.innerHTML = `${result}`
                console.log(resultOutput)
                console.log(data)
                break;
                case '/': result = Number(num1) / Number(num2);
                resultOutput.innerHTML = `${result}`
                break;
                case '-': result = Number(num1) - Number(num2);
                resultOutput.innerHTML = `${result}`
                break;
                case '*': result = Number(num1) * Number(num2);
                // console.log(result)
                // console.log(resultOutput)
                resultOutput.innerHTML = `${result}`
                break;
                
                default:
                    break;
                }
            }
        // console.log(data)
    })
}