// A: [Anti, Apple, Appricot], 

function main(array) {
    let obj = {}
// console.log(array)
let sorted =array.sort()
// console.log(sorted)

sorted.forEach(element => {
    let arr = []
    // console.log(element[0])
    if(obj[element[0]]) {
        obj[element[0]].push(element)
    } else {    
        obj[element[0]] = [element] 
    }
});
let entries = Object.entries(obj)
// console.log(entries)
entries.forEach(element => {
    let letter = element[0]
    console.log(`${element[0]}`)
    let items = element[1] 
    items.forEach(el => {
        let [name, price] = el.split(' : ')
        console.log(`  ${name}: ${price}`)
    })
})

}
main(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])