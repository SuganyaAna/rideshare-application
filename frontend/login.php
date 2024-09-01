<?php
// Start the session
include_once $_SERVER['DOCUMENT_ROOT'].'\frontend\database.class.php';

session_start();
 $conn=database::getconnection();
// Check if the login form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the employee ID and password from the form
    $employee_id = $_POST['employeeId'];
    $password = $_POST['password'];
   

    // Prepare and bind the SQL statement to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM employeedetails WHERE EmployeeID = ?");
    $stmt->bind_param("s", $employee_id);

    // Execute the query
    $stmt->execute();

    // Get the result of the query
    $result = $stmt->get_result();

    // Check if a user with the given employee ID exists
    if ($result->num_rows > 0) {
        // Fetch the user data
        $user = $result->fetch_assoc();

        // Verify the password
        if ($user["Password"]==$password) {
            // Password is correct, start a session and store user info
            $_SESSION['employee_id'] = $user['employee_id'];
            $_SESSION['logged_in'] = true;

            // Redirect to the dashboard or any other protected page
            header("Location: index.html");
            exit();
        } else {
            // Password is incorrect
            $error = "Invalid Employee ID or Password.";
          
        }
    } else {
        // No user found with the given employee ID
        $error = "Invalid Employee ID or Password.";
    }
if (isset($error)): ?>
        <script>
            window.alert("<?php echo addslashes($error); ?>");
            window.location.href='login.html'
        </script>
    <?php
    endif; 
    
    // Close the statement and connection
    $stmt->close();
}

$conn->close();
?>