function myFunc(){
    alert("You Clicked me");
 }
//loop through all dropup buttons to show dropup contents.
 var dropup = document.getElementsByClassName("dropup-btn");
var i;

for (i = 0; i < dropup.length; i++) {
  dropup[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropupContent = this.nextElementSibling;
    if (dropupContent.style.display === "block") {
      dropupContent.style.display = "none";
    } else {
      dropupContent.style.display = "block";
    }
  });
}