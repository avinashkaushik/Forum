function seperate(properName,position){
  var n = properName.split(" ");
  var a = titleCase(n[n.length - position])
    return a
 } 	



function titleCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}