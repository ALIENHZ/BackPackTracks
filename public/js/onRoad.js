Radar.initialize('prj_test_pk_35e16f210872ff7482ff092b7d66b68de856ccbd'); //will have to change to live key



console.log(2);
const start = function(tripNum){
    // order placed or user taps "I'm on my way"
    let trips = currentUserData.trips[tripNum];
    let dest = trips.listOfDestinations;

    dest.forEach(address)

        let address = currentUserData.address;
        let city = currentUserData.city;
        let state = currentUserData.state;
        Radar.geocode(`${address} ${city} ${state}`, function(err, result){
            if(!err){
                
            }

        })

    Radar.trackOnce(function(err, result) {
        if (!err) {
          console.log(`location: ${result.location} events: ${result.events} user ${result.user}`)
        }
      });

    console.log("tri")


    console.log(1);
}
console.log(3);
start();