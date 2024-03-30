// DOM elements
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

// Event listeners
if (loginForm) {
    loginForm.addEventListener('submit', loginUser);
}

if (signupForm) {
    signupForm.addEventListener('submit', signupUser);
}

// Functions
function loginUser(event) {
    event.preventDefault();
    
    const formData = new FormData(loginForm);
    const email = formData.get('email');
    const password = formData.get('password');

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (response.ok) {
            window.location.href = '/'; // Redirect to homepage after successful login
        } else {
            alert('Login failed. Please check your email and password.');
        }
    })
    .catch(error => console.error('Error:', error));
}

function signupUser(event) {
    event.preventDefault();

    const formData = new FormData(signupForm);
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');

    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    })
    .then(response => {
        if (response.ok) {
            window.location.href = '/login'; // Redirect to login page after successful signup
        } else {
            alert('Sign up failed. Please try again.');
        }
    })
    .catch(error => console.error('Error:', error));
}
