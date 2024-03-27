const grades = [73, 67, 38, 33]

const updatedGrades = []

for (let i = 0; i < grades.length; i++) {
  let current = 0
  current = grades[i]


  if (grades[i] >= 0 && grades[i] <= 100)
    if (current % 5 !== 0) {

      while (current % 5 !== 0) {
        current += 1
      }

      if (current - grades[i] < 3 && current > 38) {
        updatedGrades.push(current)
      }
      if (current - grades[i] >= 3 || grades[i] < 38) {
        updatedGrades.push(grades[i])
      }

    } else {
      updatedGrades.push(grades[i])
    }

}

console.log(updatedGrades)
return updatedGrades