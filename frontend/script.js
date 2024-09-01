document.addEventListener('DOMContentLoaded', () => {
    const rideForm = document.getElementById('rideForm');
    const rideList = document.getElementById('rideList');
    const sosButton = document.getElementById('sosButton');
    const sosModal = document.getElementById('sosModal');
    const closeModal = document.querySelector('.close');
    const confirmSOS = document.getElementById('confirmSOS');

    // Handle ride form submission
    rideForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const pickupLocation = document.getElementById('pickupLocation').value;
        const dropoffLocation = document.getElementById('dropoffLocation').value;
        const pickupTime = document.getElementById('pickupTime').value;

        const rideItem = document.createElement('li');
        rideItem.textContent = `From: ${pickupLocation}, To: ${dropoffLocation}, At: ${pickupTime}`;
        rideList.appendChild(rideItem);

        rideForm.reset();
    });

    // Handle SOS button click
    sosButton.addEventListener('click', () => {
        sosModal.style.display = 'block';
    });

    // Handle closing of the SOS modal
    closeModal.addEventListener('click', () => {
        sosModal.style.display = 'none';
    });

    // Handle sending of SOS
    confirmSOS.addEventListener('click', () => {
        alert('SOS Alert Sent!');
        sosModal.style.display = 'none';

        // Implement actual SOS alert logic here (e.g., send a request to the backend)
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', (e) => {
        if (e.target == sosModal) {
            sosModal.style.display = 'none';
        }
    });
});
const rideType=document.getElementById("ridetype")
const timeLabel=document.getElementById("timeLabel")
const timeInput=document.getElementById("timeinput")
const bookridebtn=document.getElementById("bookridebtn")
rideType.addEventListener("change",()=>{console.log(rideType.value)
    timeLabel.innerText=rideType.value+" Time"
})
bookridebtn.addEventListener("click",(event)=>{
    event.preventDefault;
    console.log(timeInput.value)
    const currentTime = new Date();
    const selectedTime = new Date(timeInput.value);
     const differenceInMs = selectedTime - currentTime;
    
        // Convert the difference to a more readable format (e.g., hours, minutes, seconds)
        const differenceInSeconds = Math.floor(differenceInMs / 1000);
        const differenceInMinutes = Math.floor(differenceInSeconds / 60);
        const differenceInHours = Math.floor(differenceInMinutes / 60);
       // Format the difference for display
        const displayHours = differenceInHours;
        const displayMinutes = differenceInMinutes % 60;
        const displaySeconds = differenceInSeconds % 60;
       if (rideType.value==="Pickup") {
      
        if (displayHours > 12) {
            window.alert("Ride booked Successfully.")
        } else {
            window.alert("Can't book this ride. You have to book 12 hours before the ride")
            
        }
      
      
       console.log(`${displayHours} ${displayMinutes} ${displaySeconds}`);
        
    } else {
        if (displayHours >4) {
            window.alert("Ride booked Successfully.")
        } else {
            window.alert("Can't book this ride. You have to book 4 hours before the ride")
            
        }
    }
    
    let currentDate = new Date();
    const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    for (let i = 1; i <= lastDate; i++) {
        const dateDiv = document.createElement('div');
        dateDiv.classList.add('date');
        dateDiv.innerText = i;
        console.log(typeof timeInput);
        
       console.log(timeInput.value.getFullYear());
       
        if (i ===timeInput.value.getFullYear()) {
            dateDiv.classList.add('current');
        }

        dateDiv.addEventListener('click', function () {
            const selected = document.querySelector('.date.selected');
            if (selected) {
                selected.classList.remove('selected');
            }
            dateDiv.classList.add('selected');
        });

        datesElement.appendChild(dateDiv);
    }
})
const sosButton=document.getElementById("sosBtn")
sosButton.addEventListener("click",()=>{window.alert("Alert sent to local authorities")})
// script.js


