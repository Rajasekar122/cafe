// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Sign-In functionality
const signinForm = document.getElementById('signinForm');
signinForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User signed in:', user);
            alert("Sign-in successful!");
            // Redirect to homepage or dashboard after sign-in
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error("Error during sign-in:", errorMessage);
            alert(errorMessage);
        });
});
