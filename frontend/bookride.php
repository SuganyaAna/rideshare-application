<?php

// Include the necessary class for database operations
include_once $_SERVER['DOCUMENT_ROOT'] . '/frontend/user.class.php';

// Start the session to access session variables
session_start();

// Retrieve and decode the JSON data from the request
$requestBody = file_get_contents('php://input');
$data = json_decode($requestBody, true);

// Create an instance of the Operations class
$ops = new Operations();

// Call the bookRide method with necessary parameters
if ($ops->bookRide($_SESSION['EmployeeID'], $data['ridetype'], $data['time'])) {
    // Success response
    $response = [
        'status' => 'success',
        'message' => 'Ride booked successfully',
        'receivedData' => $data
    ];
} else {
    // Failure response
    $response = [
        'status' => 'fail',
        'message' => 'Can\'t book ride',
        'receivedData' => $data
    ];
}

// Send the JSON response back to the client
header('Content-Type: application/json');
echo json_encode($response);
