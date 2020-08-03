function validation(){

    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var pwd = document.getElementById('pwd').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    if(user==""){
        document.getElementById('username').innerHTML="please fill the username";
        return false;
    }
    if((user.length<=2)||(user.length>10)){
        document.getElementById('username').innerHTML="kindly put a valid name";
        return false;
    }
    if(!isNaN(user)){
        document.getElementById('username').innerHTML = "only charecter are allowed";
        return false;
    }

    //condition for password
    if(pass==""){
        document.getElementById('passwd').innerHTML = "please fill password";
        return false;
    }
    if((pass.length<=5)||(pass.length>10)){
        document.getElementById('pwd').innerHTML = "password is not strong";
        return false;
    }
    if(pwd==""){
        document.getElementById('confrmpass').innerHTML = "please ender conformpassword";
        return false;
    }
    if( pass != pwd){
        document.getElementById('confrmpass').innerHTML = "password is not matching";
        return false;
    }

   
       //email validation

    if(email ==""){
        document.getElementById('emails').innerHTML = "please fill email id";
        return false;
    }
    if(email.indexOf('@')<=0){
        document.getElementById('emails').innerHTML = "invalid email id";
        return false;
    }
    if((email.charAt(email.length-4)!='.')&&(email.charAt(email.length-3)!='.')){
        document.getElementById('emails').innerHTML = "invalide email id";
        return false;
    }

     //phone number validation

     if(phone=="") {
        document.getElementById('phoneno').innerHTML = "please enter phone number";
        return false;
    }
    if(isNaN(phone)){
        document.getElementById('phoneno').innerHTML = "only numeric number allowed";
        return false;
    }
    if(phone.length<10){
        document.getElementById('phoneno').innerHTML = "number must contain 10 digit";
        return false;
    }
    if(phone.length>10){
        document.getElementById('phoneno').innerHTML= "number must be 10 digit";
        return false;
    }

    }

    

