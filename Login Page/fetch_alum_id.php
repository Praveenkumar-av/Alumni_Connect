<?php
// Database connection parameters
$servername = "localhost";
$username = 'root';
$password = '';
$database = "alumnus";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get alumni's name and password from the request
$alumni_name = $_GET['alumni_name']; // Assuming the parameter name is 'alumni_name'
$alumni_password = $_GET['alumni_password']; // Assuming the parameter name is 'alumni_password'

// Query to fetch alumni's Alumini_id based on name and password
$sql = "SELECT Alumini_id FROM aluminus WHERE Name = '$alumni_name' AND Password = '$alumni_password'";
$result = $conn->query($sql);

// Initialize variable to store alumni's ID
$alumni_id = null;

// Fetch and store data
if ($result->num_rows > 0) {
    // Assuming only one alumni matches the name and password
    $row = $result->fetch_assoc();
    $alumni_id = $row['Alumini_id']; // Store alumni's ID
}

// Close connection
$conn->close();

// Output JSON data (only alumni's ID)
echo json_encode($alumni_id);
?>
