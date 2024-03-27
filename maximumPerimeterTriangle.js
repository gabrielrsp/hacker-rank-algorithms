// soma dos 2 menores lados deve ser maior que o lado maior

// 1, 2, 3, 4, 5, 10

// 1 > 2 + 3
// 1 > 2 + 4
// 1 > 2 + 5
// 1 > 2 + 10

// 1 > 3 + 4
// 1 > 3 + 5
// 1 > 3 + 10

// 1 > 4 + 5
// 1 > 4 + 10

// 1 > 5 + 10

// ///////

// 2 > 1 + 3
// 2 > 1 + 4
// 2 > 1 + 5
// 2 > 1 + 10

// 2 > 3 + 4
// 2 > 3 + 5
// 2 > 3 + 10

// 2 > 4 + 5
// 2 > 4 + 10

// 2 > 5 + 10


// const sticks = [1, 1, 1, 3, 3]
// const sticks = [1, 2, 3, 4, 5, 10]
// const sticks = [1, 2, 3]
// const sticks = [1, 1, 1, 2, 3, 5]

const sticks = [
  9, 2015, 5294, 58768, 285, 477, 72, 13867, 97, 22445, 48, 36318, 764, 8573, 183, 3270, 81, 1251, 59, 95094
].sort(function (a, b) { return a - b })

let arrCopy = [...sticks]
let sum = 0
arrCopy = [...sticks]
let big
let acc = [0, 0, 0]
for (let i = 0; i < sticks.length; i++) {
  arrCopy = [...sticks]
  big = sticks[i]
  arrCopy.splice(i, 1)


  for (let j = 0; j < arrCopy.length - 1; j++) {
    // if (big >= arrCopy[j] && big > arrCopy[j + 1]) {
    //   if (big < arrCopy[j] + arrCopy[j + 1]) {
    //     console.log(arrCopy[j], arrCopy[j + 1], big)
    //   }
    // }


    if (big >= arrCopy[j + 1] && big > arrCopy[j]) {


      if (big < arrCopy[j] + arrCopy[j + 1]) {

        if (arrCopy[j] + arrCopy[j + 1] + big > acc[0] + acc[1] + acc[2]) {
          acc = [arrCopy[j], arrCopy[j + 1], big]
        }

      }
    }


    if (big === arrCopy[j + 1] && big === arrCopy[j]) {
      acc = [arrCopy[j], arrCopy[j + 1], big]
    }

  }

}

if (acc[0] === 0 && acc[1] === 0 && acc[2] === 0) {
  console.log(-1)
  return [-1]
} else {
  console.log([acc[0], acc[1], acc[2]])
  return [acc[0], acc[1], acc[2]]
}
