const candles = [3, 2, 1, 3]

let b = 0
let total = 0
for (let i = 0; i < candles.length; i++) {
  if (candles[i] > b) {
    b = candles[i]
  }
}



for (let i = 0; i < candles.length; i++) {
  if (candles[i] === b) {
    total += 1
  }
}

return total