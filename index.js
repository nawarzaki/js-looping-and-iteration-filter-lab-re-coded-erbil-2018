

function findMatching(drivers, name) {

  let x = drivers.filter(function(nam){return nam.toUpperCase()===name.toUpperCase()})
  return x
}

function fuzzyMatch(drivers, letters) {
  let x
  if (letters[0]==="S"){
    x = drivers.filter(function(nam){return nam[0]==="S"})
  }else if (letters[0] != "S"){
    x = []
  }
  return x
}

function matchName(drivers, name) {
let x = drivers.filter(function(nam){return Object.keys(nam).some(function(key) {
  return nam[key]===name

})
})
return x

}
