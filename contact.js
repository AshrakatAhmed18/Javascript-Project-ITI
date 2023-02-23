var input1 = document.getElementById("input1"); 
input1.addEventListener("focus", function ()
 { input1.style.border = "2px solid green"; 
});
function submit(){
//name validation
    if(input1.value == null || input1.value.length < 8){
       errorname.style.display = "block";
    } else {
        errorname.style.display = "none";
    }

//email validation
var email=document.getElementById("input2")
    var emailPattern=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if((email.value).match(emailPattern))
    {
        var email=document.getElementById("erroremail")
        email.style.display="none"
    }
    else
    {
        var email=document.getElementById("erroremail")
        email.style.display="block"
    }

//password validation
    if(input3.value == null || input3.value.length < 8){
        errorpassword.style.display = "block";
    }else if(input3.value.length > 8){
        errorpassword.style.display = "none";
    }
}


