var alumniName = alumni_name; // Replace "exampleName" with the actual alumni's name
var alumniPassword = alumni_password; // Replace "examplePassword" with the actual alumni's password

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the callback function to handle the response
xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
        if (this.status === 200) {
            // Parse the JSON response to get the alumni's ID
            var alumniId = JSON.parse(this.responseText);

            // Check if alumniId is not null (i.e., alumni exists)
            if (alumniId !== null) {
                console.log("Alumni ID:", alumniId);
            } else {
                console.log("Alumni not found or invalid credentials.");
            }
        } else {
            console.error("XHR request failed with status:", this.status);
        }
    }
};

// Define the request URL
var url = "fetch_alum_id.php?alumni_name=" + encodeURIComponent(alumniName) + "&alumni_password=" + encodeURIComponent(alumniPassword);

// Open a GET request with the specified URL
xhr.open("GET", url, true);

// Send the request
xhr.send();
alert(alumniId);