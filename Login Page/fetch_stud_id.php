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
$student_name = $_GET['student_name']; // Assuming the parameter name is 'alumni_name'
$student_password = $_GET['student_password']; // Assuming the parameter name is 'alumni_password'

// Query to fetch alumni's Alumini_id based on name and password
$sql = "SELECT Student_id FROM student WHERE names = '$student_name' AND password = '$student_password'";
$result = $conn->query($sql);

// Initialize variable to store alumni's ID
$student_id = null;

// Fetch and store data
if ($result->num_rows > 0) {
    // Assuming only one alumni matches the name and password
    $row = $result->fetch_assoc();
    $student_id = $row['Student_id']; // Store alumni's ID
}

// Close connection
$conn->close();

// Output JSON data (only alumni's ID)
echo json_encode($student_id);
?>
