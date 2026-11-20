
const config = window.ZUPPO_FIREBASE_CONFIG;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

// Email and password login
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("loginMessage");

  try {
    await auth.signInWithEmailAndPassword(email, password);
    message.textContent = "Login successful!";
    window.location.href = "index.html";
  } catch (error) {
    message.textContent = error.message;
  }
});

// Google login
document.getElementById("googleLogin").addEventListener("click", async () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  try {
    await auth.signInWithPopup(provider);
    window.location.href = "index.html";
  } catch (error) {
    document.getElementById("loginMessage").textContent = error.message;
  }
});

// Forgot password
document.getElementById("forgotPassword").addEventListener("click", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;

  if (!email) {
    alert("Please enter your email address first.");
    return;
  }

  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset email sent!");
  } catch (error) {
    alert(error.message);
  }
});
