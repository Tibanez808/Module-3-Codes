//  let li = document.getElementsByTagName('li')[0]
//  console.log(title)
// li.innerHTML = '<b>WTF</b>'

// let li = document.getElementByClassName('list-item')[0]
// li.innerText= 'New List Item'

// let li=document.querySelectorAll('.my-list')[0]
// li.innerHTML  = 'Cheers Mate'

// let firstLi = document .querySelector('li:nth-child(1)')
// firstLi.style.backgroundColor = 'blue'
// firstLi.style.color = 'red'

// let secondLi = document.querySelector('li:nth-child(2)')
// secondLi.setAttribute('id', 'hello-kerry-like-fuck')
// secondLi.remove()

// let ul = document.querySelector('ul')
// let newLi = document.createElement('li')
// newLi.id= 'new'
// newLi.textContent= 'Newly created li'
// ul.appendChild(newLi)

// let root = document.querySelector('#root')
// let h1 = document.createElement('h1')
// h1.innerText = 'Hello world';
// let ul = document.createElement('ul')
// let li = document.createElement('li')
// li.textContent = 'List Item';
// ul.appendChild(li)
// root.appendChild(h1)
// root.appendChild(ul)

let h1 = document.querySelector('h1')
let text = h1.textContent

h1.textContent = 'New Text';

let ul = document.querySelector('ul')
ul.innerHTML = `
<li>Item 1</li>
<li> Item 2 </li>
 
`

let input = document.querySelector('input')
input.value = 'John Doe'
