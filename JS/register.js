function validateForm() {
    // var x = document.forms["myForm"]["name"].value;
  var name = document.forms["myForm"]["name"].value;
    if (name == null || name == "") {
        alert("Name must be filled out");
        return false;
    } 
      var letters = /^[A-Za-z]+$/;  
    if(!name.match(letters))  
{
      alert('Name must have alphabet characters only');   
    return false;  
}
  
   var emailAddress = document.forms["myForm"]["email"].value;
    if (emailAddress == null || emailAddress == "") {
        alert("Email must be filled out");
        return false;
    }

    var userName=document.myForm.username.value;
    var username_len=userName.length;
    if (userName == null || userName == "") {
        alert("User Name must be filled out");
        return false;
    }
     if (username_len>12||username_len<5){
        alert("Username should be between 5 to 12 characters");
        return false;
    }

     

    
     var b = document.forms["myForm"]["Password"].value;
     var password_length=b.length.value;
    if (b == null || b == ""||password_length<7) {
        alert("Password must be atleast 7 characters");
        return false;
    }
     var c = document.forms["myForm"]["cPassword"].value;
    if (c == null || c == "") {
        alert("Retype Password");
        return false;
    }
    if(b!=c)
    {
    	alert("Passwords donot match");
    	return false;
    }
    var countryName=document.myForm.country.value;
    if(countryName == "Default")  
    {  
    alert('Select your country from the list');  
    return false;  
    }

    var gender=document.myForm.gender.value;
    if ( (document.myForm.gender[0].checked == false ) && ( document.myForm.gender[1].checked == false ) ) 
    { 
    alert( "Please choose your Gender: Male or Female" ); 
    return false;
    } 
    var language=document.myForm.language.value;
     if ( (document.myForm.language[0].checked == false ) && ( document.myForm.language[1].checked == false ) ) 
    { 
    alert( "Please choose your language" ); 
    return false;
    }
alert("Registration successfull");
}

function testJS()
{
var b = document.getElementById('name').value;

document.getElementById('here').innerHTML = b;

}
