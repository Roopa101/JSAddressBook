// importing another class file to this class file
const ContactDetails = require("./ContactDetails.js");
const prompt = require('prompt-sync')();

// ability to add details to ContactDetails class
var contactInfo = new ContactDetails("Roopa","Jamadar","Kalaburagi","Bengalore","Karnataka","585304","9901123984","roopa6789@gmail.com");

console.log(contactInfo.toString());


contactInfo.firstName = "Ganesh";
contactInfo.lastName = "Jamadar";
contactInfo.address = "kantekur";
contactInfo.city = "pune";
contactInfo.state = "maharashtra";
contactInfo.zip = "456895";
contactInfo.phoneNumber = "9876542889";
contactInfo.email = "ganesh34@gmail.com";
console.log(contactInfo.toString());

//Ability to add user-defined values to the PersonInfoData
contactInfo.firstName = prompt("Enter First Name : "); 
contactInfo.lastName = prompt("Enter Last Name : "); 
contactInfo.address = prompt("Enter Address : "); 
contactInfo.city = prompt("Enter City : "); 
contactInfo.state = prompt("Enter State : "); 
contactInfo.zip = prompt("Enter Zip : "); 
contactInfo.phoneNumber = prompt("Enter Phone Number : "); 
contactInfo.email = prompt("Enter Email : "); 
console.log(contactInfo.toString());