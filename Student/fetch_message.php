<?php
// Database connection parameters
$servername = "localhost";
$username = 'root';
$password = '';
$database = "alumnus";

// Get receiver_id and sender_id from the request
$receiver_id = $_GET['receiver_id'];
$sender_id = $_GET['sender_id'];

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to fetch messages from the communication table based on receiver_id and sender_id
$sql = "SELECT message FROM communication WHERE receiver_id = ? 
        INTERSECT 
        SELECT message FROM communication WHERE sender_id = ?";

$stmt = $conn->prepare($sql);

// Bind parameters
$stmt->bind_param("ss", $receiver_id, $sender_id);

// Execute query
$stmt->execute();

// Bind result variables
$stmt->bind_result($message);

// Initialize array to store messages
$messages = [];

// Fetch messages and store in array
while ($stmt->fetch()) {
    // Append each message to the array
    $messages[] = $message;
}

// Close statement
$stmt->close();

// Close connection
$conn->close();

// Output JSON data
echo json_encode($messages);
?>
