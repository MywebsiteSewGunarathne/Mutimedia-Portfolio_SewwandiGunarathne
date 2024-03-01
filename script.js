/*ABOUT ME PAGE */
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById('changeColorBtn');
  const body = document.body;
  const colors = ['#FF5733', '#336EFF'];

  let currentIndex = 0;

  button.addEventListener('click', function() {
    body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
  });
});

/*PORTFOLIO PAGE*/
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
// Get the button
let mybutton = document.getElementById("myBtn1");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*CONTACT PAGE*/
document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    var form = document.getElementById("myForm");

    // Add submit event listener
    form.addEventListener("submit", function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get form data
        var formData = new FormData(form);
        
        // Example: You can access form data like this
        var name = formData.get("name");
        var email = formData.get("email");
        
        // Example: You can do something with the form data (like send it to a server)
        console.log("Name:", name);
        console.log("Email:", email);
    });
});

function validateForm() {
  var x = document.forms["Form1"]["fname"].value;
  if (x == "" || x == null) {
    alert("Name must be filled out");
    return false;
  }
}