const arr = [-4, 3, -9, 0, 4, 1]


// pegar quantidade de positivos

// pegar qtd negativos

// qtd 0's

// retornar razoes

let p = 0
let n = 0
let z = 0

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    p += 1
  }

  if (arr[i] < 0) {
    n += 1
  }

  if (arr[i] === 0) {
    z += 1
  }
}

let rp = p / arr.length

let rn = n / arr.length

let rz = z / arr.length

console.log(rp.toFixed(6))
console.log(rn.toFixed(6))
console.log(rz.toFixed(6))


return [rp.toFixed(6), rn.toFixed(6), rz.toFixed(6)]