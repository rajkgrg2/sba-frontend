
function validate() {  
        console.log("I am here");
        var eMail = document.getElementById("email");  // get field e-mail id.
        var password = document.getElementById("Password");  // get passwd field by id.
        if (eMail.value.length <= 0) {                   
            alert("E-mail is required");  
            eMail.focus();  
            return false;  
        }  
        if (password.value.length <= 0) {    
            alert("Password is required");  
            password.focus();  
            return false;  
        }  
    }
 