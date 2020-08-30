
const form = document.getElementById("form-container");
const stopNumberElement = document.getElementById("num-of-stops");

let idTracker = 0;


function updateForm() {
    let newRow = document.createElement("div");
    
    newRow.classList.add("row");

    newRow.innerHTML = `
                    <div class="input-field col s12">
                    <input placeholder="" id="destination-` + toString(idTracker) + `" type="text" class="validate">
                    <label for="destination-` + toString(idTracker) + `">Destination #` + toString(idTracker + 1) + `</label>
                    </div>`;

    form.appendChild(newRow);

}

stopNumberElement.addEventListener("input", updateForm)