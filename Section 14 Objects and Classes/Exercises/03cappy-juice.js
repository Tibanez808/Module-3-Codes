function main(array) {
    let data = {}
    let bottled = []
array.forEach(element => {
    let [name, quantity] = element.split(' => ')
    if (data[name]) {
        data[name] += Number(quantity)
        if(data[name] >= 1000) {
            if(!bottled.includes(name))
            bottled.push(name)
    }
    
} else {
    data[name] = Number(quantity)
    if(Number(quantity) >= 1000) {
            if(!bottled.includes(name))
            bottled.push(name)
        }
    }
    
});
let entries = Object.entries(data)
// console.log(entries)
bottled.forEach(element => {
    console.log(`${element} => ${Math.floor(data[element] / 1000)}`)
})
// entries.forEach(element => {
//     let final = element[1] / 1000
//     if (element[1] >= 1000) {
//         console.log(`${element[0]} => ${final.toFixed(0)}`)
//     }
// })
}
// main(['Orange => 2000','Peach => 1432','Banana => 450','Peach => 600','Strawberry => 549'])
main(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])