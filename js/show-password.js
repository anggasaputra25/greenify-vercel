const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function () {
    // Toggle type attribute
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Toggle icon
    this.classList.toggle('fa-eye-slash');
    this.classList.toggle('fa-eye');
});

// Confirm Password
const ctogglePassword = document.getElementById('ctogglePassword');
if (ctogglePassword) {
    const cpasswordInput = document.getElementById('cpassword');
    ctogglePassword.addEventListener('click', function () {
        // Toggle type attribute
        const type = cpasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        cpasswordInput.setAttribute('type', type);

        // Toggle icon
        this.classList.toggle('fa-eye-slash');
        this.classList.toggle('fa-eye');
    });
}