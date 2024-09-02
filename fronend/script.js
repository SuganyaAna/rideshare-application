document.addEventListener("DOMContentLoaded", function () {
  const monthYear = document.getElementById("monthYear");
  const datesElement = document.getElementById("dates");
  const prevMonthButton = document.getElementById("prevMonth");
  const nextMonthButton = document.getElementById("nextMonth");
  const profileNav = document.getElementById("profileNav");
  const profileSection = document.getElementById("profile");
  let profile = false;
  const empName = document.getElementById("name");
  const empId = document.getElementById("employeeId");
  const empNumber = document.getElementById("ContactNumber");
  const empAddress = document.getElementById("Address");

  let currentDate = new Date();

  function renderCalendar() {
    datesElement.innerHTML = "";
    const firstDayIndex = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();
    const lastDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    monthYear.innerText = `${currentDate.toLocaleString("default", {
      month: "long",
    })} ${currentDate.getFullYear()}`;

    for (let i = 0; i < firstDayIndex; i++) {
      const emptyDiv = document.createElement("div");
      emptyDiv.classList.add("date");
      datesElement.appendChild(emptyDiv);
    }

    for (let i = 1; i <= lastDate; i++) {
      const dateDiv = document.createElement("div");
      dateDiv.classList.add("date");
      dateDiv.innerText = i;

      const today = new Date();
      if (
        i === today.getDate() &&
        currentDate.getMonth() === today.getMonth() &&
        currentDate.getFullYear() === today.getFullYear()
      ) {
        dateDiv.classList.add("current");
      }

      dateDiv.addEventListener("click", function () {
        const selected = document.querySelector(".date.selected");
        if (selected) {
          selected.classList.remove("selected");
        }
        dateDiv.classList.add("selected");
      });

      datesElement.appendChild(dateDiv);
    }
  }

  async function highlightDateTime(year, month, day, hour, minute, className) {
    renderCalendar();

    const dateDivs = datesElement.querySelectorAll(".date");
    const givenDate = new Date(year, month - 1, day, hour, minute);

    dateDivs.forEach((dateDiv) => {
      if (
        dateDiv.innerText == givenDate.getDate() &&
        currentDate.getMonth() === givenDate.getMonth() &&
        currentDate.getFullYear() === givenDate.getFullYear()
      ) {
        dateDiv.classList.add(className);
      }
    });
  }

  prevMonthButton.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });

  nextMonthButton.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });

  renderCalendar();

  const rideType = document.getElementById("ridetype");
  const timeLabel = document.getElementById("timeLabel");
  const timeInput = document.getElementById("timeinput");
  const bookridebtn = document.getElementById("bookridebtn");

  rideType.addEventListener("change", () => {
    timeLabel.innerText = rideType.value + " Time";
  });

  bookridebtn.addEventListener("click", async (event) => {
    event.preventDefault();
    console.log(timeInput.value);
    const inputDate = new Date(timeInput.value);

    if (isNaN(inputDate.getTime())) {
      alert("Please enter a valid date and time.");
      return;
    }

    const year = inputDate.getFullYear();
    const month = inputDate.getMonth() + 1;
    const day = inputDate.getDate();
    const hour = inputDate.getHours();
    const minute = inputDate.getMinutes();

    const currentTime = new Date();
    const selectedTime = new Date(timeInput.value);
    const differenceInMs = selectedTime - currentTime;

    const differenceInSeconds = Math.floor(differenceInMs / 1000);
    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    const differenceInHours = Math.floor(differenceInMinutes / 60);

    const displayHours = differenceInHours;
    const displayMinutes = differenceInMinutes % 60;
    const displaySeconds = differenceInSeconds % 60;

    const url = "bookride.php";

    const dataToSend = {
      ridetype: rideType.value,
      time: timeInput.value,
    };

    if (rideType.value === "Pickup") {
      if (displayHours > 12) {
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            highlightDateTime(year, month, day, hour, minute, "pickup");
            window.alert("Ride booked successfully.");
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } else {
        window.alert(
          "Can't book this ride. You have to book 12 hours before the ride."
        );
      }
    } else {
      if (displayHours > 4) {
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            highlightDateTime(year, month, day, hour, minute, "drop");
            window.alert("Ride booked successfully.");
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } else {
        window.alert(
          "Can't book this ride. You have to book 4 hours before the ride."
        );
      }
    }

    console.log(
      `${displayHours} hours, ${displayMinutes} minutes, ${displaySeconds} seconds`
    );
  });

  const sosButton = document.getElementById("sosBtn");
  sosButton.addEventListener("click", () => {
    window.alert("Alert sent to local authorities");
  });

  document.addEventListener("click", () => {
    if (profile) {
      profileSection.style.display = "none";
      profile = false;
    }
  });

  profileNav.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    profileSection.style.display = "block";
    profile = true;
  });
});
