

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
  return nam[key].includes(name)
<<<<<<< HEAD

=======
  
>>>>>>> 95815445487260d1454d1b3d49f3bdfb39eb11e9
})
})
return x

}
<<<<<<< HEAD
=======

>>>>>>> 95815445487260d1454d1b3d49f3bdfb39eb11e9
