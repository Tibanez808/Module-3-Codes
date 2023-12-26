function solve() {
let counter = 0   
let arr = []
let checkoutButton = document.querySelector('.checkout')

let addBread = document.querySelectorAll('.add-product')[0]
console.log(addBread)
let addMilk = document.querySelectorAll('.add-product')[1]
console.log(addMilk)
let addTomatoes = document.querySelectorAll('.add-product')[2]
console.log(addTomatoes)
// console.log()

let textArea = document.querySelector('textArea')

   addBread.addEventListener('click', () => {
      textArea.value += `Added Bread for 0.80 to the cart.\n`
      counter += 0.8
      if(arr.includes('Bread')) {

      } else {
         arr.push('Bread')
         console.log(arr)
      }
   })
   addMilk.addEventListener('click', () => {
      textArea.value += `Added Milk for 1.09 to the cart.\n`
      counter += 1.09
      if(arr.includes('Milk')) {

      } else {
         arr.push('Milk')
         console.log(arr)
      }
   })
   addTomatoes.addEventListener('click', () => {
      textArea.value += `Added Tomatoes for 0.99 to the cart.\n`
      counter += 0.99
      if(arr.includes('Tomatoes')) {

      } else {
         arr.push('Tomatoes')
         console.log(arr)
      }
   })

   checkoutButton.addEventListener('click', () => {
      addBread.remove()
      addMilk.remove()
      addTomatoes.remove()
      // addMilk.classList.remove('add-product')
      // addTomatoes.classList.remove('add-product')
      console.log(addBread)
      console.log(addMilk)
      console.log(addTomatoes)
      console.log(arr)
      console.log(counter)
      textArea.value += `You bought ${arr.join(', ')} for ${counter.toFixed(2)}`
      addBread.removeEventListener('click', () => {})
      addMilk.removeEventListener('click', () => {})
      addTomatoes.removeEventListener('click', () => {})
      checkoutButton.removeEventListener('click', () => {})
      checkoutButton.remove()
   })
}