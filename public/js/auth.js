// listen for auth status changes and logs them to the console
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in: ', user)
        setupUI(user);
    } else {
        
        if(!document.location.href.includes("index.html")){
            document.location.href = "index.html";
            console.log( document.location.href);
        }
        setupUI();
        console.log('user logged out');
    }
})

// sign up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    // prevent refresh (losing info)
    e.preventDefault();

    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    const name = signupForm['signup-name'].value;

    const address = signupForm['signup-address'].value;
    const city = signupForm['signup-city'].value;
    const state = signupForm['signup-state'].value;
    

    const docID = email;
    db.collection('users').doc(docID).set({
        email: email,
        name: name,
        address: address,
        city: city,
        state: state
    })
    
    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    })
    
    auth.onAuthStateChanged(user => {
        Radar.setUserId(user.uid);
        Radar.setMetadata({
            //want to put name and info here too? or unecessary

        });
        db.collection('users').doc(docID).update({
            userid: user.uid || "none"
        }).then(bleh=>{
            //if(document.location.href.includes("index.html"))  document.location.href = "trips.html";
        });
    })
})

// log out
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    // prevent default actions (refresh)
    e.preventDefault()
    auth.signOut().then(() => {
        console.log("logged out");
    })
})

//  login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    // prevent default actions (refresh)
    e.preventDefault()

    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    // log in user
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        // close login modal and reset form
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    })
})
