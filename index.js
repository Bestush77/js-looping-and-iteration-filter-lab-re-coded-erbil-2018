// Code your solution in this file
function findMatching(arrayOfDrivers, anyString) {
  return arrayOfDrivers.filter((el)=> {return    el.toLowerCase() === anyString.toLowerCase()
})
}

function fuzzyMatch(drivers, anyString){
  return drivers.filter((el)=>{
    return el.slice(0, anyString.length) === anyString;
  })
}

function matchName(drivers, anyString){
  
}