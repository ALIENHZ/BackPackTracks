

function getUserInfo(userID) {

    return new Promise((resolve,reject)=>{

        db.collection('users').doc(userID).get().then(
        function(snapshot) {
            let doc = snapshot.docs[0];
            if(doc && doc.exists) { 
                resolve(doc.data());
            }
            else{
                reject("Error user does not exist.");
            }
            }).catch((error) => reject(error));

    })

}

function setTripData(userID, tripID, start, end, distance, date, startTime, endTime, eta) {

    let info = getUserInfo(userID);
    let tripList = info.trips;

    db.collection('users').doc(userID).update({
        trips: tripList.push(
            {
                tripID: tripID,
                start: start,
                end: end,
                distance: distance,
                date: date,
                startTime: startTime,
                endTime: endTime,
                eta: eta,
            }
        )
    }).then( 
        bleh => { return true; }
    ).catch(
        error => { 
            console.error(error);
            return false;
        }
    )

}

function updateTripData(userID, tripID, start, end, distance, date, startTime, endTime, eta) {
    let info = getUserInfo(userID);
    let tripList = info.trips;
    tripList.forEach(
        function (trip, i) {
            if (trip.tripID == tripID) {
                tripList[i] = {
                    tripID: tripID,
                    start: start,
                    end: end,
                    distance: distance,
                    date: date,
                    startTime: startTime,
                    endTime: endTime,
                    eta: eta,
                }
            }
            return true;
        }
    )
    return false;
}



function getTripInfo(userID, tripID) {

    let info = getUserInfo(userID);
    let tripList = info.trips;

    tripList.forEach(
        function (trip, i) {
            if (trip.tripID == tripID) {
                return tripList[i];
            }
        }
    )
    return false;
}