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

// Query to fetch aluminis' names and Alumini_id
$sql = "SELECT Name, Alumini_id FROM aluminus";
$result = $conn->query($sql);

// Initialize array to store aluminis' data
$aluminis = [];

// Fetch and store data
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $aluminis[] = $row; // Store entire row (name and id)
    }
}

// Close connection
$conn->close();

// Output JSON data
echo json_encode($aluminis);
?>
