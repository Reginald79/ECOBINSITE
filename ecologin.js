document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginLink = document.getElementById('login-link');
    const signupLink = document.getElementById('signup-link');
    const loginSection = document.getElementById('login');
    const signupSection = document.getElementById('signup');

    // Event listener for switching to Sign Up form
    signupLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        loginSection.style.display = 'none';
        signupSection.style.display = 'block';
    });

    // Event listener for switching to Login form
    loginLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        signupSection.style.display = 'none';
        loginSection.style.display = 'block';
    });

    // Event listener for Login form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission for demo purposes
        // Replace with actual form submission logic using fetch or AJAX
        console.log('Login Form Submitted');
        // Example: Fetch API or AJAX call to handle login
    });

    // Event listener for Sign Up form submission
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission for demo purposes
        // Replace with actual form submission logic using fetch or AJAX
        console.log('Sign Up Form Submitted');
        // Example: Fetch API or AJAX call to handle sign up
    });
});
