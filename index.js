// Code your solution in this file
function findMatching(arrayOfDrivers, anyString) {
  arrayOfDrivers.filter((el)=> el.toLowercase()== anyString.toLowercase())
}