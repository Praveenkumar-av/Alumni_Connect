var studentId; 
var flag=0;
function funcall(studentId){
    console.log("Student ID:",studentId);
    // Assume you have alumniId variable containing the alumni ID to be sent

// AJAX request to insert alumni ID into current_all table
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
        if (this.status === 200) {
            console.log("Student ID inserted successfully");
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
xhr.open("POST", "curr_student.php", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
console.log("atlast",studentId);
var data = "student_id=" + encodeURIComponent(studentId);
xhr.send(data);

    window.location.href = "loading2.html";
}
document.getElementById("a1").addEventListener("click",function(){
    var name=document.getElementById("id1").value;
    var pass=document.getElementById("id2").value;

    var studentName = name; // Replace "exampleName" with the actual alumni's name
var studentPassword = pass; // Replace "examplePassword" with the actual alumni's password
    
// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the callback function to handle the response
xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
        if (this.status === 200) {
            // Parse the JSON response to get the alumni's ID
            studentId = JSON.parse(this.responseText);

            // Check if alumniId is not null (i.e., alumni exists)
            if (studentId !== null) {
                console.log("Student ID:", studentId);
                funcall(studentId);
                flag=1;
            } else {

                console.log("Student ID:", studentId);
                alert("Student not found or invalid credentials.");
                flag=0;
            }
        } else {
            console.error("XHR request failed with status:", this.status);
        }
    }
};

// Define the request URL
var url = "fetch_stud_id.php?student_name=" + encodeURIComponent(studentName) + "&student_password=" + encodeURIComponent(studentPassword);

// Open a GET request with the specified URL
xhr.open("GET", url, true);

// Send the request
xhr.send();



    


    // window.location.href = "loading.html";
})