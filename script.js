document.getElementById("menu-toggle").addEventListener("click", function () {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
  });
  
      // Function to toggle between Signup and Login forms
      function showSignup() {
        document.getElementById('signup-form').classList.remove('hidden');
        document.getElementById('login-form').classList.add('hidden');
      }
  
      function showLogin() {
        document.getElementById('signup-form').classList.add('hidden');
        document.getElementById('login-form').classList.remove('hidden');
      }
  
      // Example functions for Signup and Login handling
      function handleSignup() {
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;
        alert(`Signed up with username: ${username}`);
        // Logic for saving signup data would go here
      }
  
      function handleLogin() {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        alert(`Logged in with username: ${username}`);
        // Logic for verifying login data would go here
      }