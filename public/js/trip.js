auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in: ', user)
        if (!currentUser == null){
            getUser(cred.user.uid).then(doc=>{
                currentUser = doc;
                currentUserData = doc.data();
                
                console.info(currentUserData);
            })
            .catch(error=>console.error(error));
        }else{
            
        }
        
    } else {
        
        if(!document.location.href.includes("index.html")){
            document.location.href = "index.html";
            console.log( document.location.href);
        }
        setupUI();
        console.log('user logged out');
    }
})

function startChecklist(){
    
}