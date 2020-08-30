
const destinationContainer = document.getElementById("destination-container")
const stopNumberElement = document.getElementById("num-of-stops");

let stopTracker = 0;
let idTracker = 0;


function updateForm() {

    if(stopNumberElement.value > stopTracker) {
        for(i = 0 ; i < stopNumberElement.value - stopTracker ; i++) {
            let newRow = document.createElement("div");
            
            newRow.classList.add("row");

            newRow.innerHTML = `
                            <div class="input-field col s12" style="margin-left: 50%; ">
                            <input placeholder="" id="destination-` + idTracker.toString() + `" type="text" class="validate" style="color: #f39c12">
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

stopNumberElement.addEventListener("input", updateForm)