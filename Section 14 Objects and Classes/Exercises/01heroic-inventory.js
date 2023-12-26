function main(arr) {
 let newArr = []
 arr.forEach(element => {
        let obj = {}

       let [name, level, items] = element.split(' / ')
            let allItems = items.split(', ')
        obj.name = name
        obj.level = Number(level)
        obj.items = allItems
        newArr.push(obj)
    });
console.log(JSON.stringify(newArr))
}
main(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])