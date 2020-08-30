
const destinationContainer = document.getElementById("destination-container");


const stopNumberElement = document.getElementById("num-of-stops");
const nameElement = document.getElementById("form-name");
const startDateElement = document.getElementById("form-start-date");
const endDateElement  =document.getElementById("form-end-date");

const submitButton = document.getElementById("form-submit");

let stopTracker = 0;
let idTracker = 0;


function updateForm(e) {
    if(stopNumberElement.value > stopTracker) {
        for(i = 0 ; i < stopNumberElement.value - stopTracker ; i++) {
            let newRow = document.createElement("div");
            
            newRow.classList.add("row");

            newRow.innerHTML = `
                            <div class="input-field col s12" style="margin-left: 50%; ">
                            <input placeholder="" id="destination-` + idTracker.toString() + `" type="text" class="validate" style="color: #f39c12" required>
                            <label for="destination-` + idTracker.toString() + `">Destination #` + (idTracker + 1).toString() + `</label>
                            </div>`;

            destinationContainer.appendChild(newRow);

            idTracker += 1;
        }
    }
    else {
        for(i = 0 ; i < stopTracker - stopNumberElement.value ; i++ ) {
            destinationContainer.removeChild(destinationContainer.lastChild);
            idTracker -= 1;
        }
    }

    stopTracker = stopNumberElement.value;

}

auth.onAuthStateChanged(user => {
    if (user) {
        getUser(user.uid).then(doc=>{
                currentUser = doc;
                currentUserData = doc.data();
            })
            .catch(error=>console.error(error));
        
    }
})

function submitForm() {

    let existingTrips = getAllTripInfo(currentUserData.email);
    
    console.log("existingTrips: " + existingTrips);
if (existingTrips){
    existingTrips.forEach(
        function (trip) {
            if (trip.tripID == nameElement.value) {
                console.log("A trip with that name already exists.")
                return;
                // Put some sort of visual feedback for this later.
            }
        }
    )
}


    let destinationList = [];
    const destinationContainerCount = destinationContainer.childNodes.length;
    console.log(destinationContainer.childNodes[i]);
console.log(destinationContainer.childNodes[i].childNodes[1]);
console.log(destinationContainer.childNodes[i].childNodes[1].childNodes[0].value);
    for(i = 0 ; i < destinationContainerCount ; i++) {
        destinationList.append(destinationContainer.childNodes[i].childNodes[1].childNodes[0].value);
    }

    console.log(destinationList);

    const tripID = nameElement.value;
    const start = destinationList[0];
    const planDateStart = new Date();
    const startDate = startDateElement.value;
    const endDate = endDateElement.value;

    // Do radar.io stuff??
    const distance = null;
    const eta = null;


    console.log(setTripDate(currentUserData.email, tripID, start, destinationList, distance, startDate, endDate, eta, planDateStart));

}


document.addEventListener("DOMContentLoaded", updateForm);

stopNumberElement.addEventListener("input", updateForm)

submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    submitForm();
})