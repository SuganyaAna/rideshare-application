<?php
// logout.php
session_start(); // Start the session

// Destroy the session.
session_unset(); // Unset all session variables
session_destroy(); // Destroy the session

// Redirect to the login page or homepage after logout
header("Location: login.html");
exit;
