function main(array) {
    output =`<table>\n`
    array.forEach(element => {
        output += `  <tr>\n`
        let data = JSON.parse(element)
        // console.log(data.name)
        // console.log(data.position)
        // console.log(data.salary)
        let entries = Object.entries(data)
        // console.log(entries)
       
            output += `    <td>${data.name}</td>\n`
            output += `    <td>${data.position}</td>\n`
            output += `    <td>${data.salary}</td>\n`
  
        output += `  </tr>\n`
    });
    output += `</table>`
    console.log(output)
}
main(['{"name":"Peter","position":"Manager","salary":100000}','{"name":"Teo","position":"Lecturer","salary":1000}','{"name":"George","position":"Lecturer","salary":1000}'])
main(	['{"position":"Secretary","name":"Jessica","salary":9000}'])