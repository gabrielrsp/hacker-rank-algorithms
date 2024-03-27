// hh:mm:ssAM   or  hh:mm:ssPM     
// 12 - 00AM
// 01 - 01AM
//   .
// .
// .
// 12 - 12PM
// 13 - 01PM

const s = '01:05:45PM'

const arrH = s.split(':')

const hour = arrH[0]

const amOrPm = arrH[arrH.length - 1].split('')[2]

let newHour = 0


if (hour === '12') {
  if (amOrPm === 'P') {
    newHour = '12'
  }
  if (amOrPm === 'A') {
    newHour = '00'
  }
}


if (hour === '12') {
  if (amOrPm === 'P') {
    newHour = '12'
  }
  if (amOrPm === 'A') {
    newHour = '00'
  }
}

if (hour === '01') {
  if (amOrPm === 'P') {
    newHour = '13'
  }
  if (amOrPm === 'A') {
    newHour = '01'
  }
}


if (hour === '02') {
  if (amOrPm === 'P') {
    newHour = '14'
  }
  if (amOrPm === 'A') {
    newHour = '02'
  }
}

if (hour === '03') {
  if (amOrPm === 'P') {
    newHour = '15'
  }
  if (amOrPm === 'A') {
    newHour = '03'
  }
}


if (hour === '04') {
  if (amOrPm === 'P') {
    newHour = '16'
  }
  if (amOrPm === 'A') {
    newHour = '04'
  }
}



if (hour === '05') {
  if (amOrPm === 'P') {
    newHour = '17'
  }
  if (amOrPm === 'A') {
    newHour = '05'
  }
}


if (hour === '06') {
  if (amOrPm === 'P') {
    newHour = '18'
  }
  if (amOrPm === 'A') {
    newHour = '06'
  }
}

if (hour === '07') {
  if (amOrPm === 'P') {
    newHour = '19'
  }
  if (amOrPm === 'A') {
    newHour = '07'
  }
}

if (hour === '08') {
  if (amOrPm === 'P') {
    newHour = '20'
  }
  if (amOrPm === 'A') {
    newHour = '08'
  }
}

if (hour === '09') {
  if (amOrPm === 'P') {
    newHour = '21'
  }
  if (amOrPm === 'A') {
    newHour = '09'
  }
}

if (hour === '10') {
  if (amOrPm === 'P') {
    newHour = '22'
  }
  if (amOrPm === 'A') {
    newHour = '10'
  }
}


if (hour === '11') {
  if (amOrPm === 'P') {
    newHour = '23'
  }
  if (amOrPm === 'A') {
    newHour = '11'
  }
}


arrH.splice(0, 1, newHour)

const withPm = arrH.join().replace(/,/g, ':')

const result = withPm.split('').splice(0, 8, 0).join().replace(/,/g, '')

return result
