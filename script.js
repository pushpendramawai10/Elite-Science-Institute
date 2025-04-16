// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3ydz419KcuNRQxdBSTIHfbjgpSK-oOdU",
  authDomain: "esi-2d7b2.firebaseapp.com",
  projectId: "esi-2d7b2",
  storageBucket: "esi-2d7b2.firebasestorage.app",
  messagingSenderId: "348170091277",
  appId: "1:348170091277:web:d0e1f150fe97c4638e4e44",
  measurementId: "G-32610QEXWY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login Function
function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login successful!");
            window.location.href = "index.html"; // Redirect to home page
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Check if user is logged in
auth.onAuthStateChanged((user) => {
    if (user) {
        document.getElementById("login-btn").style.display = "none";
        document.getElementById("logout-btn").style.display = "inline-block";
    } else {
        document.getElementById("login-btn").style.display = "inline-block";
        document.getElementById("logout-btn").style.display = "none";
    }
});

// Logout Function
document.getElementById("logout-btn").addEventListener("click", () => {
    auth.signOut().then(() => {
        alert("Logged out successfully!");
        window.location.href = "login.html"; // Redirect to login page
    });
});