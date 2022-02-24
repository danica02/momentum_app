function dateTime() {
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];

    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();

    var day = days[d.getDay()];
    var month = months[d.getMonth()];
    var date = d.getDate();
    var year = d.getFullYear();
    
    // Check whether AM or PM
    var newformat = hours >= 12 ? 'PM' : 'AM'; 

    // Check whether morning or afternoon
    var newGreetings = ( hours < 12 ) ? 'Good Morning' : 
                       (( hours <= 17 && hours >= 12 ) ? 'Good Afternoon' : 'Good Evening'); 
    
    // Find current hour in AM-PM Format
    hours = hours % 12; 
    
    // To display "0" as "12"
    hours = hours ? hours : 12; 
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    document.querySelector(".time").innerHTML 
    = hours + ':' + minutes + ' ' + newformat;

    document.querySelector(".date").innerHTML
    = day + ' ' + month + ' ' + date + ', ' + year;

    document.querySelector(".greetings").innerHTML
    = newGreetings + "," ;
}
dateTime()

//----- display the inputed main focus for the day -----/

var input = document.getElementById("task");
input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("mainTask").innerHTML = input.value;
    input.value = '';
    }
});

//----------------- to do list -------------------//

function openToDos() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("myQoutes").style.display = "none"
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  // Create a "close" button and append it to each list item
  var close = document.getElementsByClassName("close");
  var i;
  var span = document.createElement("span");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Click on a close button to hide the current list item
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//----------------- Edit Qoutes -------------------//

function openQoutes() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("myQoutes").style.display = "block";
}

function closeQoutes() {
  document.getElementById("myQoutes").style.display = "none";
}

var newQoutes = document.getElementById("kowts");
newQoutes.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("qoutes").innerHTML =  newQoutes.value;
    newQoutes.value = '';
    }
});

//----------------- random qoutes -------------------//

// Array of qoutes
var randomQoutes = [ " “Believe you can and you're halfway there.” - Theodore Roosevelt ",
                     " “You are never too old to set another goal or dream a new dream.” - Les Brown ",
                     " “Success means having the courage, the determination and the will to become the person you believe you were meant to be.” - George Sheehan ",
                     " “Victory is always possible for the person who refuses to stop fighting.” - Napoleon Hill ",
                     " “If you have the courage to begin, you have the courage to succeed.” - David Viscott ",
                     " “To accomplish great things, we must not only act, but also dream, not only plan, but also believe.” - Anatole France " ]

function changeImage() {   
  var i = Math.floor((Math.random() * 6));
  document.getElementById("qoutes").innerHTML = randomQoutes[i]

}
setInterval(changeImage, 10000);


