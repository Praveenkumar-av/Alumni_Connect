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

// Truncate the current_al table
$sql_truncate = "TRUNCATE TABLE curr_su";
if ($conn->query($sql_truncate) === TRUE) {
    echo "Table truncated successfully. ";
} else {
    echo "Error truncating table: " . $conn->error;
}

// Get alumni_id from the AJAX request
$student_id = $_POST['student_id']; // Assuming you're sending alumni ID via POST

// Insert alumni_id into the current_al table
$sql_insert = "INSERT INTO curr_su(student_id) VALUES ('$student_id')";
if ($conn->query($sql_insert) === TRUE) {
    echo "Student ID inserted successfully";
} else {
    echo "Error inserting alumni ID: " . $conn->error;
}

// Close connection
$conn->close();
?>
