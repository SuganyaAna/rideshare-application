// Booking a Ride
document.getElementById('ride-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const pickupLocation = document.getElementById('pickup-location').value;
    const dropoffLocation = document.getElementById('dropoff-location').value;
    const pickupTime = document.getElementById('pickup-time').value;

    if (pickupLocation && dropoffLocation && pickupTime) {
        alert('Ride booked successfully from ' + pickupLocation + ' to ' + dropoffLocation + ' at ' + pickupTime);
        // Reset form fields
        document.getElementById('ride-form').reset();
        // Append ride to ride history (for simplicity, we'll just show an alert)
        const rideList = document.getElementById('ride-list');
        const listItem = document.createElement('li');
        listItem.textContent = `Ride from ${pickupLocation} to ${dropoffLocation} at ${pickupTime}`;
        rideList.appendChild(listItem);
    } else {
        alert('Please fill in all fields to book a ride.');
    }
});

// Editing Profile
function editProfile() {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const button = document.querySelector('#profile-form button');

    if (button.textContent === 'Edit Profile') {
        nameField.removeAttribute('readonly');
        emailField.removeAttribute('readonly');
        button.textContent = 'Save Profile';
    } else {
        nameField.setAttribute('readonly', 'true');
        emailField.setAttribute('readonly', 'true');
        button.textContent = 'Edit Profile';
        alert('Profile updated successfully!');
    }
}

// Sending an SOS Alert
function sendSOS() {
    // For simplicity, we're just displaying an alert. In a real app, this would trigger an API call to emergency services.
    alert('Emergency SOS alert sent to local authorities!');
}
