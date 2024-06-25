document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const doctor = document.getElementById('doctor').value;
    if (name === '' || email === '' || date === '' || time === '' || doctor === '') {
        displayMessage('Please fill in all fields', 'error');
        return;
    }
    displayMessage(`Appointment booked successfully for ${name} with ${doctor} on ${date} at ${time}`, 'success');
    document.getElementById('appointmentForm').reset();
});
function displayMessage(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type} show`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}