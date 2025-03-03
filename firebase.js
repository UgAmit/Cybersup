const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
document.getElementById("loginBtn").addEventListener("click", function() {
    let provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            alert("Login Successful");
            document.getElementById("loginBtn").style.display = "none";
            document.getElementById("logoutBtn").style.display = "block";
        })
        .catch(error => console.log(error));
});
document.getElementById("logoutBtn").addEventListener("click", function() {
    auth.signOut().then(() => {
        alert("Logged Out");
        document.getElementById("loginBtn").style.display = "block";
        document.getElementById("logoutBtn").style.display = "none";
    });
});