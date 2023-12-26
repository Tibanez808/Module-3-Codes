// brand: [model:produced,model:produced]

function main(array) {
    let cars = {}
array.forEach(element => {
    let [brand, model, produced] = element.split(` | `)
    if (cars[brand]) {
        let obj = {}
        obj[model] = Number(produced)
        // console.log(Object.entries(cars[brand][0]))
        let entries = Object.entries(cars[brand][0])
        // console.log(entries)
        // console.log(entries[0][0])
        if(entries[0][0] == model) {
            // console.log(model)
            // console.log(cars[brand])
            // console.log(cars[brand][0])
            // console.log(cars[brand][0][model] += Number(produced))
            cars[brand][0][model] += Number(produced)
            // console.log(cars[brand][0].model += Number(produced))
            // cars.brand.model += Number(produced)
            // obj[model] += Number(produced)

        }else {
            cars[brand].push(obj)
        }
    } else {
        let obj = {}
        obj[model] = Number(produced)
        cars[brand] = [obj]
    }
});
// console.log(cars)
// console.log(cars.Audi)
// console.log(cars.Audi[0])
// console.log(cars.Audi[0].Q7)
let entries = Object.entries(cars)
// console.log(entries)
// console.log(entries)
entries.forEach(element => {
    console.log(element[0])
    element[1].forEach(el => {
        // console.lo1g(el)
        let elEntries = Object.entries(el)
        // console.log(elEntries)
        // console.log(elEntries[0][0])
        // console.log(elEntries[0][1])
        console.log(`###${elEntries[0][0]} -> ${elEntries[0][1]}`)
    })
})
}
main(	["Audi | Q7 | 1000", "Audi | Q6 | 100", "BMW | X5 | 1000", "BMW | X6 | 100", "Citroen | C4 | 123", "Volga | GAZ-24 | 1000000", "Lada | Niva | 1000000", "Lada | Jigula | 1000000", "Citroen | C4 | 22", "Citroen | C5 | 10"])

// main(	["Lamborghini | Aventador | 300", "Tesla | Model S | 2000", "Tesla | Roadster | 1234", "Jaguar | F-TYPE | 700", "Porsche | 918 Spyder | 300", "Porsche | Carrera GT | 2000", "Jaguar | XF | 450", "Tesla | Roadster | 568"])