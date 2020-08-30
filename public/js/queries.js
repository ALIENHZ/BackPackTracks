const users = db.collection("users");

function getUser(UserID){ /*in future want to use user ID*/
    return new Promise((resolve,reject)=>{

        users.doc(UserID).get().then(
        function(snapshot) {
            let doc = snapshot.docs[0];
            if(doc && doc.exists) { 
                console.log(doc.data());
                resolve(doc);
            }
            else{
                reject("Error user does not exist.");
            }
            }).catch((error) => reject(error));

    })
}

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

function setTripData(userID, tripID, start, listOfDestinations, distance, startTime, endTime, eta, planStartTime) {

    let info = getUserInfo(userID);
    let tripList = info.trips;
    tripList.push(
        {
            tripID: tripID,
            start: start,
            destinations: listOfDestinations,
            distance: distance,
            startTime: startTime,
            endTime: endTime,
            eta: eta,
            planStartTime: planStartTime,
        }
    )

    db.collection('users').doc(userID).update({
        trips: tripList
    }).then( 
        bleh => { return true; }
    ).catch(
        error => { 
            console.error(error);
            return false;
        }
    )

}

function updateTripData(userID, tripID, start, listOfDestinations, distance, startTime, endTime, eta, planStartTime) {
    let info = getUserInfo(userID);
    let tripList = info.trips;
    tripList.forEach(
        function (trip, i) {
            if (trip.tripID == tripID) {
                tripList[i] = {
                    tripID: tripID,
                    start: start,
                    destinations: listOfDestinations,
                    distance: distance,
                    startTime: startTime,
                    endTime: endTime,
                    eta: eta,
                    planStartTime: planStartTime,
                }
            }
            db.collection('users').doc(userID).update({
                trips: tripList
            }).then( 
                bleh => { return true; }
            ).catch(
                error => { 
                    console.error(error);
                    return false;
                }
            )
        }
    )
    console.log("No trip of that name found")
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

function getAllTripInfo(userID) {

    let info = getUserInfo(userID);
    return info.trips || false;

}