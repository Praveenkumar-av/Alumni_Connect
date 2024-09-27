
var ul2 = document.getElementById("ul2");
var new1 = document.getElementById("new1");
var d105 = document.getElementById("d105");
var n = document.getElementById("name1");
var clicked="A001"
var inboxSentMessages = [];
var inboxReceivedMessages = [];
let stud_id="S002";


document.addEventListener("DOMContentLoaded", function() {
    // Define the student ID
    stud_id = "S002"; // Initial value
    
    // AJAX request to retrieve alumni_id from current_al table
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                stud_id = this.responseText;
                console.log("Student ID:", stud_id);

                // Further processing of the alumni ID can be done here
                processAluminiId(stud_id);
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
    xhr.open("GET", "curr_su.php", true);
    xhr.send();
});

function processAluminiId(stud_id) {
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
                console.log("Student Name:", name);
                // Do something with the fetched name
            } else {
                console.error("XHR request failed with status:", this.status);
            }
        }
    };
    xhr.onerror = function() {
        console.error("XHR request encountered an error.");
    };
    xhr.open("GET", "fetch_name.php?student_id=" + stud_id, true);
    xhr.send();
}


  

    
document.addEventListener("DOMContentLoaded", function() {
    var ul = document.getElementById("ul1");

    // AJAX request to fetch aluminis' data
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                var aluminis = JSON.parse(this.responseText);
                // Populate the <ul> list with fetched aluminis' names and ids
                aluminis.forEach(function(alumini) {
                    var li = document.createElement("li");
                    li.textContent = alumini.Name;
                    li.id =alumini.Alumini_id; // Set id using Alumini_id
                    ul.appendChild(li);
                });
                console.log(aluminis);
            } else {
                console.error("XHR request failed with status:", this.status);
            }
        }
    };
    xhr.onerror = function() {
        console.error("XHR request encountered an error.");
    };
    xhr.open("GET", "fetch_aluminis.php", true);
    xhr.send();
});


console.log("reached");
console.log("clicked",clicked,"stud_id",stud_id);


document.querySelector("ul").addEventListener("click",function(e){
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
    const receiver = stud_id; // Replace "receiver_id" with the actual receiver_id
 // Replace "sender_id" with the actual sender_id
 console.log("stud_id",stud_id);
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
            console.log(" recived : message fetched from ",sender," to ",receiver);
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



 let sid=stud_id;
 let rid=clicked;
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
            console.log(" sent : message fetched from ",sid," to ",rid);
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

console.log("atlst",stud_id);

rest_code(clicked,stud_id);
function rest_code(alu,stu){
    document.querySelector("button").addEventListener("click",()=>{
        var inp=document.getElementById("sent").value;
        if (inp !=null) {
            // Assuming you have senderId, receiverId, and message variables
const senderId = stud_id;
const receiverId = clicked;
const message = inp;

// AJAX request to send data to PHP
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
        if (this.status === 200) {
            console.log("Data sent successfully");
            console.log("from ",senderId," To",receiverId);
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
