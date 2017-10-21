
  var lose=false;
var cheat=false;



  window.onload = function(){
    var boundary = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundary.length-1; i++) {
        boundary[i].addEventListener("mouseover", gameOver);
    }
    document.getElementById("end").addEventListener("mouseover",goal);
    document.getElementById("start").addEventListener("click",beginGame);
}

function overBoundary() {
    lose = true;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addClassName("youlose");
    }
}
