let n = 4

let mat = []

for (let i = 0; i < n; i++) {
  mat[i] = []
  for (let j = 0; j < n; j++) {
    if (j < n - 1 - i) {
      mat[i][j] = ' '
    }
    if (j >= n - 1 - i) {
      mat[i][j] = '#'
    }
  }
}

for (let i = 0; i < mat.length; i++) {
  console.log(mat[i].toString().replace(/,/g, ""))
}

