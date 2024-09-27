var alumniId; 
var flag=0;

function funcall(alumniId){
    console.log("Alumni ID:", alumniId);
    // Assume you have alumniId variable containing the alumni ID to be sent

// AJAX request to insert alumni ID into current_all table
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
        if (this.status === 200) {
            console.log("Alumni ID inserted successfully");
            // Handle success response here
        } else {
            console.error("XHR request failed with status:", this.status);
            // Handle error response here
        }
    }
};
xhr.onerror = function() {
    console.error("XHR request encountered an error.");
    // Handle error here
};
xhr.open("POST", "current_insert.php", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
var data = "alumni_id=" + encodeURIComponent(alumniId);
xhr.send(data);

    window.location.href = "loading.html";
}
document.getElementById("a1").addEventListener("click",function(){
    var name=document.getElementById("id1").value;
    var pass=document.getElementById("id2").value;

    var alumniName = name; // Replace "exampleName" with the actual alumni's name
var alumniPassword = pass; // Replace "examplePassword" with the actual alumni's password
    
// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the callback function to handle the response
xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
        if (this.status === 200) {
            // Parse the JSON response to get the alumni's ID
            alumniId = JSON.parse(this.responseText);

            // Check if alumniId is not null (i.e., alumni exists)
            if (alumniId !== null) {
                console.log("Alumni ID:", alumniId);
                funcall(alumniId);
                flag=1;
            } else {

                
                alert("Alumni not found or invalid credentials.");
                flag=0;
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



    


    // window.location.href = "loading.html";
})



