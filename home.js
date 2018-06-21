/*var myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 3 seconds
}*/

document.querySelector('.btn').addEventListener('click', () => {
    const body = document.querySelector('body');
    //changes applied class of light/dark
    if (body.classList.contains('light')) {
      body.classList.remove('light');
      body.classList.add('dark');
    }
    else {
      body.classList.remove('dark');
      body.classList.add('light');
    }
  })
;
