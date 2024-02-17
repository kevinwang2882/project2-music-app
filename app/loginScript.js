const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await axios.post('http://localhost:3001/users/login', { username, password });
        console.log('Login successful:', response.data);
       
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('username', username);
        // Redirect to d home page on successful login
        window.location.href = 'userLogin.html';
    } catch (error) {
        console.error('Login failed:', error.response.data);
    }
});
