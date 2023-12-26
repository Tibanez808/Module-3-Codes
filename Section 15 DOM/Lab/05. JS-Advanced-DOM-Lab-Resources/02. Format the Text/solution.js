function solve() {
  let para = document.getElementById('input')
  console.log(para.innerText)
  let output = document.getElementById('output')
  let split = para.innerText.split('.')
  split.pop()
  console.log(split)
  // for(let i = 0; i<split.length; i+=3) {
  //   let arr = []
  //   arr.push(split[i])
  //   arr.push(split[i+1])
  //   arr.push(split[i+2])
  //   final= arr.join('.')
  //   let paragraph = document.createElement('p')
  //   paragraph.innerText = final + `.`
  //     output.appendChild(paragraph)
  // }
  while(split.length > 0) {
    let paragraph = document.createElement('p')
    let pArr = split.splice(0, 3)
    paragraph.innerText = pArr.join('.') + `.`
        output.appendChild(paragraph)
  }
}
