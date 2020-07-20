// Helpful Resources:
// https://www.w3schools.com/js/js_htmldom.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

/*****************************
 * Section 1 - Personal Info *
 *****************************
 *
 * Description:
 *   Change the code below to display some (static) information
 *   when a user clicks the "Show Info" button.
 *
 * Resources:
 *   (See below for drill-specific resources)
 */

function addName() {
  console.log('addName() ran');

  // See:
  // - https://www.digitalocean.com/community/tutorials/js-innertext-and-innerhtml
  // - https://www.w3schools.com/jsref/prop_node_innertext.asp

  document.getElementById('show-info-button').innerText = 'Have some more fun below!';


  let nameElement = document.querySelector('#name');
  nameElement.innerText = 'Mia!';
}

function addFavoriteThings() {
  console.log('Called addFavoriteThings()');

  // 1. Get a reference to <ul id="favthings">
  // 2. Create a few list items representing your favorite things
  // 3. Add them to append them to favthings

  // See:
  //   - https://htmldog.com/guides/javascript/advanced/creatingelements/
  //   - https://www.javascripttutorial.net/javascript-dom/javascript-createelement/
  //   - https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

  var x = document.createElement("favthings");
  x.setAttribute("id", "favthings");
  document.body.appendChild(x);

  var y = document.createElement("LI");
  var t = document.createTextNode("Tea");
  y.appendChild(t);
  document.getElementById("favthings").appendChild(y);

  var y = document.createElement("LI");
  var s = document.createTextNode("Sushi");
  y.appendChild(s);
  document.getElementById("favthings").appendChild(y);

  var y = document.createElement("LI");
  var m = document.createTextNode("Insomnia Cookies");
  y.appendChild(m);
  document.getElementById("favthings").appendChild(y);

  var y = document.createElement("LI");
  var n = document.createTextNode("Music");
  y.appendChild(n);
  document.getElementById("favthings").appendChild(y);

  var y = document.createElement("LI");
  var q = document.createTextNode("Games");
  y.appendChild(q);
  document.getElementById("favthings").appendChild(y);

}

function replaceImage() {
  console.log('Called replaceImage()');

  // Change the puppy picture to a picture of your choosing

  // See:
  // - https://www.tutorialrepublic.com/javascript-tutorial/javascript-dom-get-set-attributes.php
  // - https://www.w3schools.com/jsref/met_element_setattribute.asp

  document.getElementById("picture").src = "dsc_1054.jpg";
}

function changeCodeStatus() {
  console.log('Called changeCodeStatus()');

  // 1. Get a reference to <div id="codestatus">
  // 2. Create image element containing a sweet ol' meme
  // 3. Replace text in codestatus w/ image


  let nameElement = document.querySelector('#codestatus');

  console.log(nameElement);
  nameElement.innerHTML = '<img src="https://media1.giphy.com/media/110F1JFzWKtiA8/200.webp?cid=ecf05e47d8c7a809f3597780998110da0f55e5f97f683dac&rid=200.webp">';

}

// Get a reference to the button w/ id="show-info-button"
let showInfoButton = document.querySelector('#show-info-button');

var x = document.getElementById("show-info-button").value;


// Do something when showInfoButton is clicke
showInfoButton.addEventListener('click', function() {
  console.log('Clicked "Show Info" button');

  // Implement addName, addFavoriteThings, replaceImage, changeCodeStatus above

  addName();
  addFavoriteThings();
  replaceImage();
  changeCodeStatus();
});

/**********************************
 * Section 2 - Reading From Forms *
 **********************************
 *
 * Description:
 *   Change the code below to populate the section on the right-hand
 *   side of the page with the data entered into the form.
 *
 */

// Get a reference to form w/ id="information-form"
let informationForm = document.querySelector('#information-form');

// Do something when form is submitted
 informationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // You will want this here. Remove it and see what changes.
  console.log("Form Submitted");

  var firstname = document.getElementById('fname').value;
  document.getElementById("firstname").innerHTML = firstname;

  var lastname = document.getElementById('lname').value;
  document.getElementById("lastname").innerHTML = lastname;

  var car = document.getElementById('cars').value;
  document.getElementById("chosencar").innerHTML = car;

  var icecreams = document.getElementsByName('icecream');
	 for(var i = 0; i < icecreams.length; i++){
		 if(icecreams[i].checked){
			 document.getElementById("icecreamstatus").innerHTML = icecreams[i].value;
		 }
	 }


    var checkboxes = document.getElementsByName('skill');
    for (var checkbox of checkboxes) {
    if (checkbox.checked)
      document.getElementById("checks").append(checkbox.value + ', ');
  }




  // Your job:
  //   1. Get information typed into the form
  //   2. Display that info in "Display that info here" section

  // Google things like:
  //   javascript form element get values


});

/*************************************
 * Section 3 - Clicks and Keypresses *
 *************************************
 *
 * Description:
 *   Make the buttons in section 3 of index.html behave as described below.
 *
 */

// When a user clicks "Click me to log something to the console"
// then log something to the console

// Fill in ________ to get a reference to the correct button on the page
let consoleLogButton = document.querySelector('#console-log-button');

// Log something when that button is clicked
consoleLogButton.addEventListener('click', function() {
  console.log('You logged it!')
});


let makeBlueButton = document.querySelector('#make-blue-button');
makeBlueButton.addEventListener('click', function() {

	document.getElementById("colorText").style.color = "blue";

  // Your job:
  //  1. When a user clicks "Change the text to the right blue"
  //  2. Change the text in <div id="colorText">...</div> to blue
});

// Adding an event listener to document means the "keydown" event
// can happen anywhere on the page and we'll respond.
document.addEventListener('keydown', function() {

	document.getElementById("colorText").style.color = "red";
  // This is called whenever a user pressed any key.

  // Your job:
  //  1. Turn colorText red whenever a user presses the 'r' key
  //  2. Add your own keybind somewhere

  // See:
  // - https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
  // - https://javascript.info/keyboard-events
});

/*************************************
 * Section 4 - TODO List             *
 *************************************
 *
 * Description:
 *   Build a simple TODO list.
 *
 *   For this you will need to have a listener on the submit form and add
 *   anything entered into the text box to the to do list on the right side.
 *
 * Bonus:
 *   Add a delete button next to each item and allow it to delete the item
 *   it is next to.
 */

// Your code goes here

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
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

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

/****************************************
 * Section 5 - setInterval + setTimeout *
 ****************************************
 *
 * Description:
 *   Use the setInterval function to create a counter that counts every
 *   second on the page (Should look kind of like a stopwatch counting up).
 *   Display this in the span with the id of 'seconds'.
 *
 *   Then use the SetTimeout function to display something (your choice) to the
 *   div with the id 'delayedDisplay' after 5 seconds have passed.
 *
 * Resources:
 *   - https://javascript.info/settimeout-setinterval
 *
 */
/*
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
<<<<<<< HEAD
} */
=======
}
>>>>>>> ca6b50c9de0b49a11b61dc0f138b26cf675b3a54






/****************************************
 * Section 6 - Your own section!        *
 ****************************************
 *
 * Description:
 *   Add your own section to this page with its own event listeners.
 *   Use a JavaScript event listener that is new to you.
 *   Here is a handy list: https://developer.mozilla.org/en-US/docs/Web/Events
 *   Click on each event listener to see an example of how it is used
 *
 */

var name;
name = prompt('Enter your name:');

document.getElementById("myBtn").addEventListener("click", function() {
  myFunction(name);
});

function myFunction(name) {
  
  document.getElementById("message").innerHTML = name + ", you are amazing!";
}
