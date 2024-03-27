// function countApplesAndOranges(s, t, a, b, apples, oranges) 

// s = inicio da casa 7
// t = fim da casa 11
// a = macieira 5
// b = larangeira 15

// apples: array de distancias da maças ate a macieira 3
// orange: array de distancias da laranja ate a larangeira 2


// saida1: numero de maças dentro do intervalo da casa
// saida2: numero  de laranjas dentro do intervalo da casa

// function countApplesAndOranges(s, t, a, b, apples, oranges) 



countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])



function countApplesAndOranges(s, t, a, b, apples, oranges) {

  let positionApples = []
  let positionOranges = []

  let applesHouse = 0
  let orangesHouse = 0

  for (let i = 0; i < apples.length; i++) {
    positionApples.push(a + apples[i])
  }
  // console.log('PA', positionApples)

  for (let i = 0; i < oranges.length; i++) {
    positionOranges.push(b + oranges[i])
  }
  // console.log('PO', positionOranges)

  for (let j = 0; j < positionApples.length; j++) {
    if (positionApples[j] >= s && positionApples[j] <= t) {
      applesHouse += 1
    }
  }

  for (let j = 0; j < positionOranges.length; j++) {
    if (positionOranges[j] >= s && positionOranges[j] <= t) {
      orangesHouse += 1
    }
  }

  console.log(applesHouse,)
  console.log(orangesHouse)
  return [applesHouse, orangesHouse]
}