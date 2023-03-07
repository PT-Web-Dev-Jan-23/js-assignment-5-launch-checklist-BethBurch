// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    
        //This function should make the destination information of the chosen planet appear in mission target div.
        document.getElementById("missionTarget").innerHTML = `
          <h2>Mission Destination</h2>
          <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter} </li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance} </li>
            <li>Number of Moons: ${moons} </li>
          </ol>
          <img src="${imageUrl}"/>`;
        // I want to change mission target. innerHTML to reflect the data from chosen planet
      
}

function validateInput(testInput) {
    if (testInput === "") {
      return "Empty";
    } else if (isNaN(testInput)) {
      return "Not a Number";
    } else if (!isNaN(testInput)) {
      return "Is a Number";
    }
  }
// the entire point of this function is to make sure its not empty and its isnt not not empty is it supposed to be a number

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotValidResponse = validateInput(pilot);
    let copilotValidResponse = validateInput(copilot);
    let fuelValidResponse = validateInput(fuelLevel);
    let cargoValidResponse = validateInput(cargoLevel);
    // CALLS THE FUNCTION TO MAKE SURE EACH RESPONSE IS VALID BEFORE PUTTING IT INTO THE CONDITIONALS

     list.style.visibility = "hidden";
    //  list is in script.js "list" is document "faulty items"

    if (
        pilotValidResponse === "Empty" || 
        copilotValidResponse === "Empty" ||
        fuelValidResponse === "Empty" ||
        cargoValidResponse === "Empty"
    ) {
        alert("All fields are required");
    } else if (pilotValidResponse === "Is a Number") {
        alert("Pilot Name cannot be a Number!");
    } else if (copilotValidResponse === "Is a Number") {
        alert("Copilot Name cannot be a Number!");
    } else if (fuelValidResponse === "Not a Number") {
        alert("Fuel Level must be a Number!");
    } else if (cargoValidResponse === "Not a Number") {
        alert("Cargo Mass must be a Number!");
    } else {
        // IF ANY ARE EMPTY ,ALERT, ALERTS DEPENDING ON TYPE
        
         list.style.visibility = "visible";

        // UPDATES THE HEADER WHEN THE BUTTON IS CLICKED
    document.getElementById("pilotStatus"
        ).innerHTML = `Pilot ${pilot} is ready for launch`;
        
    document.getElementById("copilotStatus"
        ).innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }
 // HEADER CHANGES TO RED WHEN NOT READY FOR LAUNCH 
 let launchStatusUpdate = document.getElementById("launchStatus");
 let fuelStatusUpdate = document.getElementById("fuelStatus");
 let cargoStatusUpdate = document.getElementById("cargoStatus");

 // THIS HOW THE INFO CHANGES DEPENDING ON THE INPUT GIVEN
 if (fuelLevel < 10000) {
   fuelStatusUpdate.innerHTML = "Fuel level too low for launch";
   launchStatusUpdate.innerHTML = "Shuttle Not Ready for Launch";
   launchStatusUpdate.style.color = "rgb(199, 37, 78)";
 } else if (10000 < cargoMass) {
   fuelStatusUpdate.innerHTML = "Fuel level high enough for launch";
   cargoStatusUpdate.innerHTML = "Cargo mass too heavy for launch";
   launchStatusUpdate.innerHTML = "Shuttle Not Ready for Launch";
   launchStatusUpdate.style.color = "rgb(199, 37, 78)";
 } else {
   fuelStatusUpdate.innerHTML = "Fuel level high enough for launch";
   cargoStatusUpdate.innerHTML = "Cargo mass low enough for launch";
   launchStatusUpdate.innerHTML = "Shuttle is Ready for Launch";
   launchStatusUpdate.style.color = "'rgb(65, 159, 106)";
 }
}



async function myFetch() {
    let planetsReturned;
// ADDED URL FOR WHERE TO GET THE FETCH(GIVEN TO US) RETURN THE RESPONSE IN jSON
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });

    return planetsReturned;
}
// THIS IS THE MATH FOR RANDOMIZATION SEEN IN MATH STUDIO
function pickPlanet(planets) {
    let item = planets[Math.floor(Math.random() * planets.length)];
    return item;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
