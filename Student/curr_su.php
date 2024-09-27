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

// Query to retrieve alumni_id from current_al table
$sql_select = "SELECT student_id FROM curr_su";

// Execute the query
$result = $conn->query($sql_select);

if ($result->num_rows > 0) {
    // Fetch the result
    $row = $result->fetch_assoc();
    $student_id = $row['student_id'];
    echo $student_id;
} else {
    echo ""; // Return empty string if no alumni ID found
}

// Close connection
$conn->close();
?>
