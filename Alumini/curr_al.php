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
$sql_select = "SELECT alumni_id FROM current_al";

// Execute the query
$result = $conn->query($sql_select);

if ($result->num_rows > 0) {
    // Fetch the result
    $row = $result->fetch_assoc();
    $alumni_id = $row['alumni_id'];
    echo $alumni_id;
} else {
    echo ""; // Return empty string if no alumni ID found
}

// Close connection
$conn->close();
?>
