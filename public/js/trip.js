auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in: ', user)
        if (!currentUser == null){
            getUser(cred.user.uid).then(doc=>{
                currentUser = doc;
                currentUserData = doc.data();
                startChecklist();
                console.info(currentUserData);
            })
            .catch(error=>console.error(error));
        }else{
            startChecklist();
        }
        
    } else {
        
        if(!document.location.href.includes("index.html")){
            document.location.href = "index.html";
            console.log( document.location.href);
        }
        
        console.log('user logged out');
    }
})

function startChecklist(){

}

function makeCheck(){
    let container = Document.createElement('div');
    container.classList.add("check-container");
    let img = Document.createElement('img');
    img.src = "images/checky.png"
    let lbl = Document.createElement('label');
    let p = Document.createElement('p');
    p.css({color: "#d16909", font-size: "50px"})
}