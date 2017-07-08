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
    body.append(earth);
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
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
function makeHobbits(array) {
  var shire = document.getElementById("The Shire"); // get "the shire" by id
  var hobbitList = document.createElement('ul'); // create ul with var hobbitList
  hobbitList.setAttribute("id", "allHobbits");
  for (var i = 0; i < hobbits.length; i++) { // for loop to iterate through hobbit array
    var hobbitName = document.createElement('li'); // create li with var hobbitName
    hobbitName.appendChild(document.createTextNode(hobbits[i])); // use li var and append child to create text based on hobbits array
    hobbitName.setAttribute("id", hobbits[i]); // creat id's for all hobbits using hobbit array
    hobbitName.setAttribute('class', "hobbit");
    hobbitList.appendChild(hobbitName); // append ul with the li
    shire.appendChild(hobbitList); // append shire with ul
  }
  console.log(hobbitList); // test ul
return hobbitList;
}
makeHobbits();


// Part 3
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
    var oneRing = document.createElement("div"); // create div oneRing
    oneRing.setAttribute("id", 'the-ring'); // set id as "the-ring"
    body.append(oneRing); // append oneRing to body
  // give the div a class of 'magic-imbued-jewelry'
    oneRing.setAttribute("class", 'magic-imbued-jewelry'); // add class to oneRing
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
    document.getElementById('the-ring').addEventListener("click", nazgulScreech); // create event listener on oneRing
  // add the ring as a child of Frodo
    var frodoRing = document.getElementById("Frodo Baggins"); // get frodo baddins
    frodoRing.appendChild(oneRing); // append oneRing to frodo
}
keepItSecretKeepItSafe();


// Part 4
function makeBuddies() {
  // create an aside tag
    var companions = document.createElement('aside'); // create aside
  // attach an unordered list of the 'buddies' in the aside
    var buddiesList = document.createElement('ul'); // create ul buddiesList
    buddiesList.setAttribute('id', "theBuddies");
    for (var i =0; i < buddies.length; i++) { // create for loop
      var buddyName = document.createElement('li'); // create li buddyName
      buddyName.appendChild(document.createTextNode(buddies[i])); // append li with buddies array
      buddyName.setAttribute('id', buddies[i]); // set id of buddyName based on buddies array
      buddyName.setAttribute('class', "theBuddies");
      buddiesList.appendChild(buddyName); // append li to ul
      companions.appendChild(buddiesList); // append ul to aside companions
  // insert your aside as a child element of rivendell
      var elfLand = document.getElementById("Rivendell"); // get rivendell 
      elfLand.appendChild(companions); // append rivendell with the aside companions
    }
    console.log(buddiesList); // test ul
}
makeBuddies(); // make the buddies


// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var byeStrider = document.getElementById("theBuddies"); // get buddies ul
  byeStrider.removeChild(byeStrider.childNodes[3]); // remove strider
  var newBuddy = document.createElement('li'); // create new li
  var kingReturns = document.createTextNode("Aragorn"); // create aragorn
  newBuddy.appendChild(kingReturns); // append li with king returns
  newBuddy.setAttribute("id", "Aragorn");
  byeStrider.insertBefore(newBuddy, byeStrider.childNodes[3]); // add aragorn to list in the same place strider was
}
beautifulStranger();


// Part 6
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
    var assembleHobbits = document.getElementById('allHobbits'); // get ul of the hobbits
    var newLocation = document.getElementById("Rivendell"); // get new location rivendell
    newLocation.appendChild(assembleHobbits); // append hobbits to rivendell
}
leaveTheShire();


// Part 7
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
    var rivendell = document.getElementById("Rivendell"); // get new location rivendell
    var fellowship = document.createElement('div', "the-fellowship");
    fellowship.setAttribute('id', "theFellowship");
    rivendell.appendChild(fellowship);
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
    var fellowshipForms = document.getElementById("theFellowship");

    var gandalf = document.getElementById("Gandalf the Grey");
    fellowshipForms.appendChild(gandalf);
    alert("Gandalf the Grey has joined the Fellowship of the Ring");

    var legolas = document.getElementById("Legolas");
    fellowshipForms.appendChild(legolas);
    alert("Legolas has joined the Fellowship of the Ring");

    var gimli = document.getElementById("Gimli");
    fellowshipForms.appendChild(gimli);
    alert("Gimli has joined the Fellowship of the Ring");

    var aragorn = document.getElementById("Aragorn");
    fellowshipForms.appendChild(aragorn);
    alert("Aragorn has joined the Fellowship of the Ring");

    var boromir = document.getElementById("Boromir");
    fellowshipForms.appendChild(boromir);
    alert("Boromir has joined the Fellowship of the Ring");

    var frodo = document.getElementById("Frodo Baggins");
    fellowshipForms.appendChild(frodo);
    alert("Frodo Baggins has joined the Fellowship of the Ring");

    var sam = document.getElementById("Samwise 'Sam' Gamgee");
    fellowshipForms.appendChild(sam);
    alert("Samwise Gamgee has joined the Fellowship of the Ring");

    var merry = document.getElementById("Meriadoc 'Merry' Brandybuck");
    fellowshipForms.appendChild(merry);
    alert("Meriadoc Brandybuck has joined the Fellowship of the Ring");

    var pippin = document.getElementById("Peregrin 'Pippin' Took");
    fellowshipForms.appendChild(pippin);
    alert("Peregrin Took has joined the Fellowship of the Ring");
}
forgeTheFellowShip();


// Part 8
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
    var theWhite = document.getElementById("Gandalf the Grey").textContent = "Gandalf the White";
    var whiteWizard = document.getElementById("Gandalf the Grey");
    whiteWizard.setAttribute('id', "gandalfTheWhite");
  // apply style to the element
  // make the background 'white', add a grey border
    document.getElementById("gandalfTheWhite").style.backgroundColor = "white";
    document.getElementById("gandalfTheWhite").style.border = "2px solid gray";
}
theBalrog();


// Part 9
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
    alert("The Horn of Gobdor has been blown");
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
    var byeBoromir = document.getElementById("Boromir").style.textDecoration = "line-through";
  // Remove Boromir from the Fellowship
    var boromirIsDead = document.getElementById("Boromir");
    var dead = document.getElementsByTagName('body');
//    dead.appendChild(boromirIsDead);
}
hornOfGondor();


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
    var frodo = document.getElementById("Frodo Baggins");
    var sam = document.getElementById("Samwise 'Sam' Gamgee");
    var mordor = document.getElementById("Mordor");
    mordor.appendChild(frodo);
    mordor.appendChild(sam);
  // add a div with an id of 'mount-doom' to Mordor
    var mordor = document.getElementById("Mordor");
    var mtDoom = document.createElement('div');
    mtDoom.setAttribute('id', "mountDoom");
    mordor.appendChild(mtDoom);

}
itsDangerousToGoAlone();


// Part 11
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
    var mordor = document.getElementById("Mordor");
    var gollum = document.createElement('div');
    gollum.setAttribute('id', "gollum");
    mordor.appendChild(gollum);
  // Remove the ring from Frodo and give it to Gollum
    var destroyRing = document.getElementById("the-ring");
    gollum.appendChild(destroyRing);
  // Move Gollum into Mount Doom
    var fireOfMtDoom = document.getElementById("mountDoom");
    fireOfMtDoom.appendChild(gollum);
}
weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
    var mtDoom = document.getElementById("mountDoom");
    var gollum = document.getElementById("gollum");
    mtDoom.removeChild(gollum);
  // remove all the baddies from the document
    var fellowshipBreakup = document.getElementById("theFellowship");
    var buddiesGoHome = document.getElementsByClassName("theBuddies");
    console.log(buddiesGoHome);
//    fellowshipBreakup.removeChild(buddiesGoHome);
  // Move all the hobbits back to the shire
    var backToTheShire = document.getElementById("The Shire");
    var hobbitsGoHome = document.getElementsByClassName("hobbit");
    console.log(hobbitsGoHome);
 //   backToTheShire.appendChild(hobbitsGoHome);
}
thereAndBackAgain();