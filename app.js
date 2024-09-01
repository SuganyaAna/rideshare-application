document.addEventListener('DOMContentLoaded', () => {
    const rideForm = document.getElementById('rideForm');
    const rideList = document.getElementById('rideList');

    if (rideForm) {
        rideForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const pickupLocation = document.getElementById('pickupLocation').value;
            const dropoffLocation = document.getElementById('dropoffLocation').value;
            const pickupTime = document.getElementById('pickupTime').value;
            const name = document.getElementById('name').value;
            const contactNumber = document.getElementById('contactNumber').value;

            const rideItem = document.createElement('li');
            rideItem.innerHTML = `<strong>Ride for ${name}</strong><br>Pickup: ${pickupLocation}<br>Dropoff: ${dropoffLocation}<br>Time: ${pickupTime}<br>Contact: ${contactNumber}`;
            rideList.appendChild(rideItem);

            alert('Ride booked successfully!');
            rideForm.reset();
        });
    }
});
