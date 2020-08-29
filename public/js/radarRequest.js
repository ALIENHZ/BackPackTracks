const url = "https://api.radar.io/v1/track";

let body = {
    deviceId:"C305F2DB-56DC-404F-B6C1-BC52F0B680D8",
    userId: "1",
    latitude: 40.78382,
    longitude: -73.97536,
    accuracy: 65
}

fetch(url,{
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'prj_test_pk_35e16f210872ff7482ff092b7d66b68de856ccbd'
    },
    body: JSON.stringify(body)
}).then(response=>{
    //should have some error handling here
    if (response.ok){
        console.log(response.body);
        response.json();
    }else {
        return new Promise.reject("oopsie");
    }
    })
.then(data => {
    // user and events generated
    console.log(data);
  })
.catch(error=>console.error(error));
