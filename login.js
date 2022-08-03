  
    // function validate() {  
    //     console.log("I am here");
    //     var eMail = document.getElementById("email");  
    //     var password = document.getElementById("Password");  
    //     if (eMail.value.length <= 0) {  
    //         alert("E-mail is required");  
    //         eMail.focus();  
    //         return false;  
    //     }  
    //     if (password.value.length <= 0) {  
    //         alert("Password is required");  
    //         password.focus();  
    //         return false;  
    //     }  
    // }
  function mycontrol(){
    var myElements = document.getElementById("form").elements; // don't use VAR ( leaky scope, )
    if(myElements != null ) {                                   // checking if elements is not null.
        
    for (var i = 0, element; element = myElements[i++];) {
       
        if (element.type === "text" && element.value === "")
            console.log("it's an empty textfield");
            alert ("Please Enter Username and Password");
    }
    }
  }
  // To control what will happen when button is pressed
    var btnsubmit = document.getElementById("login");

    btnsubmit.addEventListener("click",mycontrol);

//   function mycontrol() {
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     if (username == null || username == "") {
//         alert("Please enter the email.");
//         return false;
//     }
//     if (password == null || password == "") {
//         alert("Please enter the password.");
//         return false;
//     }
//     alert('Login successful');
    
// } 
  