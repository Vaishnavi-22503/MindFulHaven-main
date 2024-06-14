document.addEventListener('DOMContentLoaded', function () {
     const forgotPasswordForm = document.getElementById('forgotPasswordForm');

     forgotPasswordForm.addEventListener('submit', function (event) {
          event.preventDefault();
          const email = document.getElementById('forgotEmail').value;

          // Perform validation if needed, e.g., check if email is valid

          // Simulate password reset process (replace with actual implementation)
          alert(`Password reset instructions sent to ${email}`);
          // Redirect back to the login page or show confirmation message
          window.location.href = 'client-login.html'; // Redirect to your login page
     });
});
