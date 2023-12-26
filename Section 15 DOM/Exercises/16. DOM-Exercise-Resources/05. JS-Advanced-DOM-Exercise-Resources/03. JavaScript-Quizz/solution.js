function solve() {
  
let sections = document.querySelectorAll('section')
let section1 = sections[0]
let section2 = sections[1]
let section3 = sections[2]
console.log(sections)
let answers = document.querySelectorAll('.answer-text')
console.log(answers)
let results = document.querySelector('li > h1')
console.log(results)
let quiz = document.querySelector('#quizzie > ul')
console.log(quiz)
quiz.style.display = 'block' 
let counter = 0
answers[0].addEventListener('click', () => {
  counter++
})
answers[3].addEventListener('click', () => {
  counter++
})
answers[4].addEventListener('click', () => {
  counter++
})
answers.forEach(element => {
    element.addEventListener('click', () => {
      if(!section1.hasAttribute('class')) {
        section1.classList.add('hidden')
        section2.removeAttribute('class')
        console.log(sections)
      } else if(!section2.hasAttribute('class')) {
        section2.classList.add('hidden')
        section3.removeAttribute('class')
        console.log(sections)
      } else if(!section3.hasAttribute('class')) {
        section3.classList.add('hidden')
        console.log(sections)
        // section2.classList.remove('hidden')
       if (counter <3) {
         results.textContent = `you have ${counter} right answers`;
       } else {

         results.textContent = "You are recognized as top JavaScript fan";
         console.log(results)
        }
      }
    })
  });

}
