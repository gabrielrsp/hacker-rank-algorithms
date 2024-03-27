// const arr = [
//   [-1, 1, -7, -8],
//   [-10, -8, -5, -2],
//   [0, 9, 7, -1],
//   [4, 4, -2, 1]

// ]


const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
]


//dp
// i = 0 j = 0
// i = 1 j = 1
// i = 2 j = 2


//ds
// i = 0 j = 2
// i = 1 j = 1
// i = 2 j = 0


// i = 0 j = 4
// i = 1 j = 3
// i = 2 j = 2
// i = 3 j = 1
// i = 4 j = 0


let dp = []
let ds = []

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i === j) {
      dp.push(arr[i][j])
    }

    if (i === arr.length - 1 - j) {

      ds.push(arr[i][j])
    }

  }
}


let sumDP = 0
for (let a = 0; a < arr.length; a++) {
  sumDP = sumDP + dp[a]
}

let sumDS = 0
for (let b = 0; b < arr.length; b++) {
  sumDS = sumDS + ds[b]
}

console.log(Math.abs(sumDP - sumDS))
return Math.abs(sumDP - sumDS)