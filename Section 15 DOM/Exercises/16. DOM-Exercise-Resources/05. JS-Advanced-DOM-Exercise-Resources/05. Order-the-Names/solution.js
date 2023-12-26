function solve() {
    let atoZ = document.querySelectorAll('li')
    console.log(atoZ.length)

    let input = document.querySelector('input')
    console.log(input)

    // console.log(atoZ[0].split(', '))
    console.log(atoZ[13].innerText.split(', '))
    //  + ' navy'.split(' ').join(', '))
    let button = document.querySelector('button')
    button.addEventListener('click', () => {
        console.log(input.value)
        console.log(input.value[0])
        switch (input.value[0]) {
            case 'A': atoZ[0].innerHTML  = atoZ[0].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'B': atoZ[1].innerHTML  = atoZ[1].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'C': atoZ[2].innerHTML  = atoZ[2].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'D': atoZ[3].innerHTML  = atoZ[3].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'E': atoZ[4].innerHTML  = atoZ[4].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'F': atoZ[5].innerHTML  = atoZ[5].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'G': atoZ[6].innerHTML  = atoZ[6].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'H': atoZ[7].innerHTML  = atoZ[7].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'I': atoZ[8].innerHTML  = atoZ[8].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'J': atoZ[9].innerHTML  = atoZ[9].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'K': atoZ[10].innerHTML  = atoZ[10].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'L': atoZ[11].innerHTML  = atoZ[11].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'M': atoZ[12].innerHTML  = atoZ[12].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'N': atoZ[13].innerHTML  = atoZ[13].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            // case 'n': atoZ[13].innerHTML  = atoZ[13].innerText.split(', ').concat(input.value.split(' ')).join(', ');break;
            // let current = atoZ[13].innerText.split(', ')
            // console.log(current)
            //     let newInput = input.value.split(' ')
            // console.log(newInput)
            //     let final = current.concat(newInput)
            //     console.log(final)
            //     console.log(final.join('='))
            //     atoZ[13].innerHTML= `${final.join(', ')}`
                //  += ` ${input.textContent}`.split(' ').join(', '); 
              
            case 'O': atoZ[14].innerHTML  = atoZ[14].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'P': atoZ[15].innerHTML  = atoZ[15].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'Q': atoZ[16].innerHTML  = atoZ[16].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'R': atoZ[17].innerHTML  = atoZ[17].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'S': atoZ[18].innerHTML  = atoZ[18].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'T': atoZ[19].innerHTML  = atoZ[19].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'U': atoZ[20].innerHTML  = atoZ[20].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'V': atoZ[21].innerHTML  = atoZ[21].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'W': atoZ[22].innerHTML  = atoZ[22].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'X': atoZ[23].innerHTML  = atoZ[23].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'Y': atoZ[24].innerHTML  = atoZ[24].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;
            case 'Z': atoZ[25].innerHTML  = atoZ[25].innerText.split(', ').concat(input.value.split(' ')).join(' ').trim().split(' ').join(', ');break;


            default:
                break;
        }
        input.value = ""
    })
}