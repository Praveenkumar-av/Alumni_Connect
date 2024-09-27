
var ul2 = document.getElementById("ul2");
var new1 = document.getElementById("new1");
var d105 = document.getElementById("d105");
var clicked="S001"
var inboxSentMessages = [];
var inboxReceivedMessages = [];
let alumini_id="A001";
document.addEventListener("DOMContentLoaded", function() {
    // Define the student ID
    alumini_id = "A002"; // Initial value
    
    // AJAX request to retrieve alumni_id from current_al table
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                alumini_id = this.responseText;
                console.log("Alumni ID:", alumini_id);

                // Further processing of the alumni ID can be done here
                processAluminiId(alumini_id);
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
    xhr.open("GET", "curr_al.php", true);
    xhr.send();
});

function processAluminiId(alumini_id) {
    // Select the div element where you want to display the name
    var mainDiv = document.getElementById("main1");

    // Create an <h3> element to display the name
    var nameHeader = document.createElement("h3");
    mainDiv.appendChild(nameHeader);

    // AJAX request to fetch the name of the student from PHP
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                var name = JSON.parse(this.responseText);
                nameHeader.innerText = name;
                console.log("Alumini Name:", name);
                // Do something with the fetched name
            } else {
                console.error("XHR request failed with status:", this.status);
            }
        }
    };
    xhr.onerror = function() {
        console.error("XHR request encountered an error.");
    };
    xhr.open("GET", "fetch_name2.php?alumini_id=" + alumini_id, true);
    xhr.send();
}


document.addEventListener("DOMContentLoaded", function() {
    var ul = document.getElementById("ul1");

    // AJAX request to fetch aluminis' data
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                var students = JSON.parse(this.responseText);
                // Populate the <ul> list with fetched aluminis' names and ids
                students.forEach(function(student) {
                    var li = document.createElement("li");
                    li.textContent = student.names;
                    li.id =student.student_id; // Set id using Alumini_id
                    ul.appendChild(li);
                });
                console.log(students);
            } else {
                console.error("XHR request failed with status:", this.status);
            }
        }
    };
    xhr.onerror = function() {
        console.error("XHR request encountered an error.");
    };
    xhr.open("GET", "fetch_students.php", true);
    xhr.send();
});
document.querySelector("ul").addEventListener("click",function(e){
    


// Set the CSS styles dynamically



    document.getElementById("d102").style.display="none";
    document.getElementById("d104").style.display="block";
    document.getElementById("d104").style.marginLeft = "20px";
    document.getElementById("d104").style.height="650px";
    
    document.getElementById("d105").style.display="block";
    document.getElementById("ul2").style.display="none";
    clicked=e.target.id;
    
    inboxSentMessages = [];
    inboxReceivedMessages = [];
    // Assuming you have receiver and sender variables
    const sender = clicked;
    const receiver = alumini_id; // Replace "receiver_id" with the actual receiver_id
 // Replace "sender_id" with the actual sender_id
console.log(sender,receiver);
// AJAX request to fetch messages
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
        if (this.status === 200) {
            var messages = JSON.parse(this.responseText);
            // Now you have the messages array
            inboxReceivedMessages=messages;
            console.log("Messages:", messages);
        } else {
            console.error("XHR request failed with status:", this.status);
        }
    }
};
xhr.onerror = function() {
    console.error("XHR request encountered an error.");
};
xhr.open("GET", "fetch_message.php?receiver_id=" + receiver + "&sender_id=" + sender, true);
xhr.send();



 const sid=alumini_id;
 const rid=clicked;
console.log(sid,rid);
// AJAX request to fetch messages
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
        if (this.status === 200) {
            var messages = JSON.parse(this.responseText);
            // Now you have the messages array
            inboxSentMessages=messages;
            console.log("Messages:", messages);
        } else {
            console.error("XHR request failed with status:", this.status);
        }
    }
};
xhr.onerror = function() {
    console.error("XHR request encountered an error.");
};
xhr.open("GET", "fetch_message.php?receiver_id=" + rid + "&sender_id=" + sid, true);
xhr.send();



        //input

    

});

    
document.getElementById("ol1").addEventListener("click", function(e) {
    document.getElementById("ul2").style.display="block";
    if (e.target && e.target.id === "in") {
        // Remove all list elements in <ul id="ul2">
        var ul2 = document.getElementById("ul2");
        while (ul2.firstChild) {
            ul2.removeChild(ul2.firstChild);
        }

        // Add elements from inboxReceivedMessages array into <ul id="in">
       
        //var inList = document.getElementById("in");
        inboxReceivedMessages.forEach(function(message) {
            var li = document.createElement("li");
            li.textContent = message;
            li.style.marginTop="10px";
            ul2.appendChild(li);
        });
    }
    
    if (e.target && e.target.id === "se") {
        // Remove all list elements in <ul id="ul2">
        var ul2 = document.getElementById("ul2");
        while (ul2.firstChild) {
            ul2.removeChild(ul2.firstChild);
        }

        // Add elements from inboxSentMessages array into <ul id="se">
        
        
        inboxSentMessages.forEach(function(message) {
            var li = document.createElement("li");
            li.textContent = message;
            li.style.marginTop="10px";
            ul2.appendChild(li);
        });
    }
});
rest_code(clicked,alumini_id);
function rest_code(alu,stu){
    document.querySelector("button").addEventListener("click",()=>{
        var inp=document.getElementById("sent").value;
        if (inp !=null) {
            // Assuming you have senderId, receiverId, and message variables
const senderId = alumini_id;
const receiverId = clicked;
const message = inp;

// AJAX request to send data to PHP
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
        if (this.status === 200) {
            console.log("Data sent successfully");
            console.log("from",senderId,"to",receiverId);
        } else {
            console.error("XHR request failed with status:", this.status);
        }
    }
};
xhr.onerror = function() {
    console.error("XHR request encountered an error.");
};

// Concatenate the parameters to the URL
xhr.open("GET", "message_send.php?sender_id=" + senderId + "&receiver_id=" + receiverId + "&message=" + message, true);
xhr.send();



// re update 
var ul2 = document.getElementById("ul2");
var li = document.createElement("li");
li.style.marginTop="10px";
li.textContent = inp;
ul2.appendChild(li);

        // Add elements from inboxSentMessages array into <ul id="se">
        
        
        
        } else {
            // Code to execute when inp is null
            console.log("inp is null");
        }
        
    })
}
