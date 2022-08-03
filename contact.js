function validateForm()                                    
{                              // Retrieving the values of form elements 
    var name = document.forms["myForm"]["name"];               
    var email = document.forms["myForm"]["email"];    
    var message = document.forms["myForm"]["message"];   
   //validate name
    if (name.value == "")     // name field cannot be empty
    //.innerHTML method to change inner contents(with id=errorname)                             
    {                                    
        document.getElementById('errorname').innerHTML="Please enter a valid name";  
        name.focus();   //current text field which is name.
        return false; 
        // delete content of element with id =errorname
    }else{
        document.getElementById('errorname').innerHTML="";  
    }
       //validate e-mail
    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').innerHTML="";  
    }
          // checking validation of index position  of @ in email.
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 
                   // index of . in email
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 
     //validate message
    if (message.value == "")       // cannot be empty.                    
    {
        document.getElementById('errormsg').innerHTML="Please enter a valid message"; 
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errormsg').innerHTML="";  
    }
   
    return true; 
}

