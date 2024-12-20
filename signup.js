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

// Sign-Up functionality
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User signed up:', user);
            // Optionally, update user profile with name
            user.updateProfile({ displayName: name }).then(() => {
                alert("Sign-up successful!");
                // Redirect to sign-in page or dashboard
                window.location.href = "signin.html";
            });
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error("Error during sign-up:", errorMessage);
            alert(errorMessage);
        });
});
