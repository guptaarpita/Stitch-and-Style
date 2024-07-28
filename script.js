document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/user')
        .then(response => response.json())
        .then(data => {
            document.getElementById('username').textContent = data.username;
            document.getElementById('email').textContent = data.email;
            // You can add more data handling here
        })
        .catch(error => console.error('Error fetching user data:', error));
});
