let numPy = prompt('Bienvenue dans ma super pyramide ! Choisis un nombre d etages');
var div = "#" * numPy

var count = 1
for(var pyramide = "#" ; count <= numPy; pyramide += "#", count++){
  console.log(`${pyramide}`);
}
