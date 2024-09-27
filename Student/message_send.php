<?php
// Database connection parameters
$servername = "localhost";
$username = 'root';
$password = '';
$database = "alumnus";

// Get the parameters from the GET request
$senderId = $_GET['sender_id'];
$receiverId = $_GET['receiver_id'];
$message = $_GET['message'];
$status=0;

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Generate a random number for msg_id
$msgId = mt_rand(10, 999); // You can adjust the range as needed

// Prepare the SQL query to insert data into the communication table
$sql = "INSERT INTO communication (msg_id, sender_id, receiver_id, message,status_bit) VALUES (?, ?, ?, ?, ?)";

// Prepare the statement
$stmt = $conn->prepare($sql);

// Bind parameters
$stmt->bind_param("isssi", $msgId, $senderId, $receiverId, $message,$status);

// Execute the statement
$stmt->execute();

// Close statement
$stmt->close();

// Close connection
$conn->close();

// Return a success response
http_response_code(200);
echo "Data inserted successfully";
?>
