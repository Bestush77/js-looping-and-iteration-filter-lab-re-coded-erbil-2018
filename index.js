// Code your solution in this file
function findMatching(arrayOfDrivers, anyString) {
  return arrayOfDrivers.filter((el)=> {return    el.toLowerCase() === anyString.toLowerCase()
})
}

