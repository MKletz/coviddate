function determineOrdinal(Day_Count) {
  var Last_Digit = Day_Count.toString().slice(-1)
  var ordinal = ''

  switch(Last_Digit) {
      case "1":
        ordinal = 'st'
        break
      case "2":
        ordinal = 'nd'
        break
      case "3":
        ordinal = 'rd'
        break
      default:
        ordinal = 'th'
        break    
  }

  return ordinal
}

function updateClock() {
  var today = new Date()
  var covidStart = new Date("03/01/2020")
  var Difference_In_Time = covidStart.getTime() - today.getTime()
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)
  var Rounded_Days = Math.round(Difference_In_Days) * -1
  var Ordinal = determineOrdinal(Rounded_Days)
  var DayText = Rounded_Days + Ordinal

  document.getElementById('d').innerHTML = DayText
  document.getElementById('h').innerHTML = today.getHours()
  document.getElementById('m').innerHTML = today.getMinutes()
  document.getElementById('s').innerHTML = today.getSeconds()
}

function clockGoBrrr() {
  updateClock()
  window.setInterval("updateClock()", 1)
}