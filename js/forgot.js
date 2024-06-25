document.addEventListener('DOMContentLoaded', function () {
     const forgotPasswordForm = document.getElementById('forgotPasswordForm');
     forgotPasswordForm.addEventListener('submit', function (event) {
          event.preventDefault();
          const email = document.getElementById('forgotEmail').value;
          alert(`Password reset instructions sent to ${email}`);
          window.location.href = 'client-login.html'; // Redirect to your login page
     });
});