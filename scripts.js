document.addEventListener( 'DOMContentLoaded', function () {

  console.log("the DOM is loaded")

var btn = document.getElementById('clickme')

  console.log("select a button named #click me")

btn.addEventListener('click', animate)

function animate(event) {

    console.log("the button was clicked")

  var target = event.target
  target.classList.add('animated')
  target.classList.add('pulse')
  target.classList.add('infinite')

    console.log("classes were added")
}




}, false );
