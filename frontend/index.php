<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Office Commute App</title>
    <link rel="stylesheet" href="style.css">
    <script src="app.js" defer></script>
</head>

<body>
    <header>
        <h1>Book your Ride</h1>
        <nav>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="" id="profileNav">Profile</a></li>
                <li><a href="logout.php">Log Out</a></li>

            </ul>
        </nav>
    </header>

    <main>
        <section id="book-ride">
            <h2>Book a Ride</h2>
            <form id="bookingForm">
                <div class="form-group">
                    <label for="ridetype">Ride Type</label>
                    <select id="ridetype" name="ridetype" required>
                        <option value="" hidden disabled selected>Select Ride Type</option>
                        <option value="Pickup">Pickup</option>
                        <option value="Drop">Drop</option>

                    </select>
                </div>



                <div class="form-group">
                    <label id="timeLabel" for="timeinput">Ride Time</label>
                    <input type="datetime-local" id="timeinput" name="timeinput" required>
                </div>

                <button id="bookridebtn" type="button">Book Ride</button>
            </form>
            <button id="sosBtn" type="button">Emergency SOS</button>
        </section>



        <hr style="margin: 0;">
        <section id="profile">
            <h2>Profile</h2><br><br><br>
            <p><strong>Name:</strong> <span id="name"><?php echo $_SESSION['Name']; ?></span> </p>
            <p><strong>Employee ID:</strong> <span id="employeeId"><?php echo $_SESSION['EmployeeID']; ?></span></p>
            <p><strong>Contact Number:</strong> <span id="ContactNumber"><?php echo $_SESSION['ContactNumber']; ?></span></p>
            <p><strong>Address:</strong> <span id="Address"><?php echo $_SESSION['Address']; ?></span></p>
        </section>
        <section>
            <div class="calendar">
                <div class="header">
                    <button id="prevMonth">&lt;</button>
                    <div id="monthYear"></div>
                    <button id="nextMonth">&gt;</button>
                </div>
                <div class="days">
                    <div class="day">Sun</div>
                    <div class="day">Mon</div>
                    <div class="day">Tue</div>
                    <div class="day">Wed</div>
                    <div class="day">Thu</div>
                    <div class="day">Fri</div>
                    <div class="day">Sat</div>
                </div>
                <div id="dates" class="dates"></div>
            </div>
            <?php // echo $_SESSION['RideType'][0] ?>
            <?php // echo $_SESSION['DateTime'] ?>
            <?php // echo $_SESSION['Bookings'][0]["RideType"] ?>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Office CommuteApp</p>
    </footer>
    <script src="script.js"></script>
    <!--<script src="calender.js"></script>-->
</body>

</html>