function nextTime() {
  let text = "Welcome! Green Cadets";
  return text;

}

quirky = nextTime();
quirky = String(quirky);

var speed = 75;
var i = 0;

function typeWriter() {
  if (i < quirky.length) {
    document.getElementById("form").innerHTML += quirky.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

