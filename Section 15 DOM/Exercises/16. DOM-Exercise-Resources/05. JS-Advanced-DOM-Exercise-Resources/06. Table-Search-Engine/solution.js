function solve() {
    let targetRows = document.querySelectorAll(`tbody > tr`)
    console.log(targetRows)

    let rowData = document.querySelectorAll('tbody > tr> td')
    console.log(rowData)

    let searchButton = document.querySelector('button')
    let searchData= document.querySelector('#searchField')

    searchButton.addEventListener('click', () => {
      targetRows.forEach(element => {
         element.classList.remove('select')
      });
      rowData.forEach(element => {
         console.log(element)
         console.log(searchData.value)
         if(!searchData.value) {

         } else if (element.textContent.includes(searchData.value)) {
            // console.log(element.parentElement)
            element.parentElement.classList.add('select');
            console.log(element.parentNode);
            
         }
         console.log(searchData.innerText)
      })
      searchData.value  = ''
   })
}