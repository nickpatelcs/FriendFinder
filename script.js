var scriptBtn = document.getElementById("scriptBtn");

var fullName = document.getElementById("fullName");
var ema = document.getElementById("title");
var edu = document.getElementById("education");
var hob = document.getElementById("favHobby");
var foo = document.getElementById("favFood");
var spo = document.getElementById("favSport");

if (scriptBtn) {
  scriptBtn.addEventListener("click", makeProfile);
  scriptBtn.addEventListener("click", makeVisible);
}
document.getElementById("makeProfile").style.display = "none";

function makeProfile()
{
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var email = document.getElementById("email").value;
  var hobby = document.getElementById("hobby").value;
  var food = document.getElementById("food").value;
  var college = document.getElementById("college").value;
  var sport = document.getElementById("sport").value;
  
  fullName.innerHTML = name;
  ema.innerHTML = "Email: "+ email;
  edu.innerHTML = "College: "+ college;
  hob.innerHTML = "Hobbies: " + hobby;
  foo.innerHTML = "Favorite Food: " + food;
  spo.innerHTML = "Favorite Sport: " + sport;
}

var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};

function makeVisible()
{
  document.getElementById("makeProfile").style.display = "block";
}
