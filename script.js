function lineThrough(lineID) {
  var tempLine = document.getElementById("line" + lineID);
  var tempCB = document.getElementById("cb" + lineID).checked;
  if(tempCB) {
    tempLine.classList.add("lined"); //adding by CSS class
    //tempLine.style.textDecoration='line-through'; -- via script
  } else {
    tempLine.classList.remove("lined"); //removing by CSS class
    //tempLine.style.textDecoration='none'; -- via script
  }
}
