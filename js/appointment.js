document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const doctor = document.getElementById('doctor').value;

    // Simple validation
    if (name === '' || email === '' || date === '' || time === '' || doctor === '') {
        displayMessage('Please fill in all fields', 'error');
        return;
    }

    // Display success message
    displayMessage(`Appointment booked successfully for ${name} with ${doctor} on ${date} at ${time}`, 'success');

    // Clear form
    document.getElementById('appointmentForm').reset();
});

function displayMessage(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type} show`;
    notification.textContent = message;

    // Append notification to body
    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}
