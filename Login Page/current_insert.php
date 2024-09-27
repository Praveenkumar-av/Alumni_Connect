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
$sql_truncate = "TRUNCATE TABLE current_al";
if ($conn->query($sql_truncate) === TRUE) {
    echo "Table truncated successfully. ";
} else {
    echo "Error truncating table: " . $conn->error;
}

// Get alumni_id from the AJAX request
$alumni_id = $_POST['alumni_id']; // Assuming you're sending alumni ID via POST

// Insert alumni_id into the current_al table
$sql_insert = "INSERT INTO current_al (alumni_id) VALUES ('$alumni_id')";
if ($conn->query($sql_insert) === TRUE) {
    echo "Alumni ID inserted successfully";
} else {
    echo "Error inserting alumni ID: " . $conn->error;
}

// Close connection
$conn->close();
?>
