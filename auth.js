document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const employeeId = document.getElementById('employeeId').value;
            const password = document.getElementById('password').value;

            // Dummy validation for demonstration
            if (employeeId === 'EMP001' && password === 'password') {
                alert('Login successful!');
                window.location.href = 'index.html';  // Redirect to the main app page
            } else {
                alert('Invalid Employee ID or Password. Please try again.');
            }
        });
    }
});
