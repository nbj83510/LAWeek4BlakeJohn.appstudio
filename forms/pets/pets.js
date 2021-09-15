let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']

let withSal = petNames
withSal.push("Sal")
console.log(withSal)

console.log(`The third pet is named ${petNames[2]}.`)

let withSalLength = withSal.length
console.log('The array has', withSalLength, 'names in it.')

withSal.pop()
console.log(withSal)
