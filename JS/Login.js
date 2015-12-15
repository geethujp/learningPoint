function validateLoginForm() {
  
     var a = document.forms["myLoginForm"]["username"].value;
      var b = document.forms["myLoginForm"]["password"].value;
     
    if (a == null || a == "") {
        alert("User name must be filled out");
        return false;
    }
    
    if (b == null || b == "") {
        alert("Password must be filled out");
        return false;
    }
<<<<<<< HEAD
   if(a!="geethu"&&b!="123")
   {
    alert("Access Denied");
    return false;
=======
   if(a==geethu&&b==123)
   {
    alert("Access Granted");
    return true;
>>>>>>> 8573a4afa7cb8248504f29ccb9eee3cdc93f707e
   }
  
}