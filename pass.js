<script>
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function myFunction() {
  var x = document.getElementById("myInput").value;
  if (x == "123456") 
  {
    window.location = "https://aameccse.github.io/IT6601/ ";
  }
  else {
   window.location = "https://aameccse.github.io/cse/ ";
  }
}

<!--
var nHist = window.history.length;
if(window.history[nHist] != window.location)
  window.history.forward();
//-->
var message="Function Disabled!";

function clickIE4(){
if (event.button==2){
alert(message);
return false;
 }
}

function clickNS4(e){
if (document.layers||document.getElementById&&!document.all){
if (e.which==2||e.which==3){
alert(message);
return false;
}
}
}

if (document.layers){
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=clickNS4;
}
else if (document.all&&!document.getElementById){
document.onmousedown=clickIE4;
}

document.oncontextmenu=new Function("alert(message);return false")

  Object.getOwnPropertyNames(console).filter(function(property) {
     return typeof console[property] == 'function';
  }).forEach(function (verb) {
     console[verb] =function(){return 'Sorry, for security reasons...';};
  });

</script>
