<?php
include_once $_SERVER['DOCUMENT_ROOT'] . '/user.class.php';

session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $employee_id = $_POST['employeeId'];
    $password = $_POST['password'];

    // Fetch user details
    $result = Operations::getData('employeedetails', $employee_id);

    if (!empty($result) && $result[0]['Password'] == $password) {
        $_SESSION['logged_in'] = true;

        // Fetch bookings
        $bookings = Operations::getData('rides', $employee_id);

        $rideTypes = [];
        $dateTimes = [];
        $_SESSION['Bookings']=$bookings;
        while ($booking) {
            $rideTypes[] = $booking['RideType'];
            $dateTimes[] = $booking['Schedule'];
        }

        $_SESSION['RideType'] = $rideTypes;
        $_SESSION['DateTime'] = $dateTimes;

        // Store user information in session
        foreach ($result[0] as $key => $value) {
            $_SESSION[$key] = $value;
        }

        header('Location: index.php');
        exit();
    } else {
        $error = "Invalid Employee ID or Password.";
    }

    if (isset($error)) { ?>
        <script>
            window.alert("<?php echo addslashes($error); ?>");
            window.location.href = 'login.html';
        </script>
<?php
    }
}
?>