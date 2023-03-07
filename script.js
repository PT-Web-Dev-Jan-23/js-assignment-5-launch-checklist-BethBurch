// Write your JavaScript code here!


window.addEventListener("load", function () {
// WINDOW LOAD EVENT
    let list = document.getElementById("faultyItems");
// CREATES A FAULTY ITEMS ID VARIABLE FOR SCRIPT HELPER
    let form = document.querySelector("form");
// THIS IS A VARIABLE FOR SELECTING ANY ID NAMED "FORM" IN THE WHOLE DOCUMENT 
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let pilotInput = document.querySelector("input[name=pilotName]").value;
        let copilotInput = document.querySelector("input[name=copilotName]").value;
        let fuelInput = document.querySelector("input[name=fuelLevel]").value;
        let cargoInput = document.querySelector("input[name=cargoMass]").value;
// varible name is wherever in the whole document you select  the input from the user associated with the [name]
// and then send that input to the server.
// THE LAST PART OF THE FUCNTION IS TO CALL THE FORMSUBMISSION FUNCTION FROM SCRIPTHELPER.JS WHEERE EVERYTHING RUNS.
// !!!!! THIS IS WHERE THE "SUBMIT CLICK" HAPPENS 
        formSubmission(document, list, pilotInput, copilotInput, fuelInput, cargoInput);
    });
    
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
    })
// SHOWS WHICH PICTURE WILL BE SHOWING AT A GIVEN TIME BY CALLING THE FETCH AND THE PICK PLANET RANDOMIZER

});