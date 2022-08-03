function myFunc(){


    let city = document.getElementById("dropup");
    let content=["Register","Sign in","Home", "Contact Us"];
    let href=["../HTML/register.html", "../HTML/login.html", "../HTML/home.html", "../HTML/contact.html"]
    for (i=0;i<content.length;i++){ 
    
let aTag = document.createElement('a');
aTag.setAttribute('href',href[i]);
aTag.textContent= content[i];
city.appendChild(aTag);
    }

  }
