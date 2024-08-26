
        // Add event listeners to login and register buttons
        document.addEventListener("DOMContentLoaded", function() {
            const loginBtn = document.querySelector(".btn-login");
            const registerBtn = document.querySelector(".btn-register");
            loginBtn.addEventListener("click", function() {
                // Login functionality goes here
                console.log("Login button clicked");
            });
            registerBtn.addEventListener("click", function() {
                // Register functionality goes here
                console.log("Register button clicked");
            });
        });