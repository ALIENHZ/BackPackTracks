//Radar.initialize('prj_test_pk_35e16f210872ff7482ff092b7d66b68de856ccbd'); //will have to change to live key



console.log(2);
const start = function(tripNum){
    // order placed or user taps "I'm on my way"
    //let trips = currentUserData.trips[tripNum];
    //let dest = trips.listOfDestinations;
    /*
    dest.forEach(address=>{
        const url = "https://api.radar.io/v1/geofences/";
                //console.log(results);
                let body = {
                    description:"C305F2DB-56DC-404F-B6C1-BC52F0B6d80D8",
                    type: "circle",
                    coordinates: [40.70390, -73.98670],
                    radius: 100
                }

                fetch(url,{
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'prj_test_sk_385d241314be68dfed532a8bea96aff105d74bcb',
                    },
                    body: JSON.stringify(body)
                }).then(response=>{
                    //should have some error handling here
                    if (response.ok){
                        console.log(response);
                        response.json();
                        console.log("nice");
                    }else {
                        return new Promise.reject("oopsie");
                    }
                    })
                .then(data => {
                    // user and events generated
                    console.log(data);
                })
                .catch(error=>console.error(error));
    })*/

    Radar.trackOnce({
        latitude: 39.2904,
        longitude: -76.6122,
        accuracy: 65
      }, function(err, result) {
        if (!err) {
            console.log("hi");
        }
      });
      
        
      console.log("h");
    Radar.trackOnce(function(err, result) {
        if (!err) {
          console.log(result.location);
          console.log(result.events);
          console.log(result.user);
        }
      });

    console.log("tri")

    //event handling when enter geofence?

    console.log(1);
}
          // do something with result.events, result.user
console.log(3);
start();

const test = function(){
    let address = "57 Barn Swallow Blvd";
        let city = "Marlboro";
        let state = "NJ";
        console.log(`${address} ${city} ${state}`);
        const url = "https://api.radar.io/v1/geofences/";
                //console.log(results);
                let body = {
                    description:"C305F2DB-56DC-404F-B6C1-BC52F0B6d80D8",
                    type: "circle",
                    coordinates: [40.70390, -73.98670],
                    radius: 100
                }

                fetch(url,{
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'prj_test_sk_385d241314be68dfed532a8bea96aff105d74bcb',
                    },
                    body: JSON.stringify(body)
                }).then(response=>{
                    //should have some error handling here
                    if (response.ok){
                        console.log(response);
                        response.json();
                        console.log("nice");
                    }else {
                        return new Promise.reject("oopsie");
                    }
                    })
                .then(data => {
                    // user and events generated
                    console.log(data);
                })
                .catch(error=>console.error(error));
        /*const url = "https://api.radar.io/v1/geocode/forward?query=20+jay+st+brooklyn+ny";
                console.log("nut");
                

                fetch(url,{
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'prj_test_pk_35e16f210872ff7482ff092b7d66b68de856ccbd',
                    }
                }).then(response=>{
                    //should have some error handling here
                    if (response.ok){
                        console.log(response);
                        response.text();
                        console.log("nice");
                    }else {
                        return new Promise.reject("oopsie");
                    }
                    })
                .then(data => {
                    // user and events generated
                    console.log(data);
                })
                .catch(error=>console.error(error));*/
        /*Radar.geocode('20 jay st brooklyn ny', function(err, result) {
            if (!err) {
              console.log("cool");
            }
            else{
                console.log(err);
            }
          });*/
        /*Radar.geocode('20 jay st brooklyn ny', function(err, result){
            if(!err){

                const url = "https://api.radar.io/v1/geofences/";
                console.log(results);
                let body = {
                    description:"C305F2DB-56DC-404F-B6C1-BC52F0B6d80D8",
                    type: "circle",
                    coordinates: [result.addresses.latitude, result.address.longitude],
                    radius: 100
                }

                fetch(url,{
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'prj_test_sk_385d241314be68dfed532a8bea96aff105d74bcb',
                    },
                    body: JSON.stringify(body)
                }).then(response=>{
                    //should have some error handling here
                    if (response.ok){
                        console.log(response);
                        response.json();
                        console.log("nice");
                    }else {
                        return new Promise.reject("oopsie");
                    }
                    })
                .then(data => {
                    // user and events generated
                    console.log(data);
                })
                .catch(error=>console.error(error));




            }

        })*/
}

//test();