const arr = [7, 69, 2, 221, 8974]
arr.sort()

console.log(arr)

let max = 0
let min = 0

for (let i = 0; i < arr.length - 1; i++) {
  max = max + arr[i]
}

for (let j = arr.length - 1; j > 1 - 1; j--) {
  min = min + arr[j]
}

console.log(max, min)
