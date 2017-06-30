console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');

/*
**General Concepts**
for loop

Document API
.querySelector
.querySelectorAll
.createElement

Element API
.appendChild
.textContent
.setAttribute
.style (.<someCSSProperty>)
.addEventListener

More worth knowing

Element API
.removeChild
.parentNode
.children
.getAttribute
.removeEventListener
*/

// Part 1

function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
    var earth = document.createElement("section");
    earth.setAttribute("id", "middle-earth");
    body.append(earth)

  // inside, add each land as an article tag
    for (var i = 0; i < lands.length; i++) {
      var landsNamed = document.createElement("article");
      landsNamed.setAttribute("id", lands[i]); 

  // inside each article tag include an h1 with the name of the land
      var landsTitle = document.createElement("h1");
      landsTitle.innerHTML = lands[i];

  // append middle-earth to your document body
      earth.append(landsNamed);
      landsNamed.append(landsTitle);
      console.log(lands[i]);
  }
}

makeMiddleEarth();

// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
      var allHobbits = document.getElementById("The Shire"); // create var that selects the shire article and saves it to use later
      var nastyHobbitses = document.createElement("ul"); // create an ul in the shire
   for (var i = 0; i < hobbits.length; i++) { // create for loop to get each hobbit name based on lenth of array
       var hobbitNames = nastyHobbitses.appendChild("li", hobbits[i]); //create the li as a child of the ul (allHobbits) using the i var from the for loop
       hobbitNames.innerHTML = hobbits[i]; // put the hobbit names into the li
       nastyHobbitses.append(hobbitNames);
    }
}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
    var oneRing = document.createElement("div");
    oneRing.setAttribute("id", 'the-ring');
    body.append(oneRing);

  // give the div a class of 'magic-imbued-jewelry'
    oneRing.setAttribute("class", 'magic-imbued-jewelry');

  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
    document.getElementById('the-ring').addEventListener("click", nazgulScreech);

  // add the ring as a child of Frodo
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
