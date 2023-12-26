function solve() {

  let aTags = document.querySelectorAll('a')
  let pTags = document.querySelectorAll('p')

  let visitedArr= Array.from(pTags).map(p => Number(p.innerText.split(' ')[1]))
  console.log(visitedArr)

  // add event listener
  Array.from(aTags).forEach((link, index) => {
    link.addEventListener('click', () => {
        let para = link.nextElementSibling;
        para.innerText = `Visited ${++visitedArr[index]} times`
    })
  }) 
}