
 
 let usernameErr=false,emailErr=false,passErr=false,confirmPassErr=false;



let handleUsername=()=>{
    
    let val=document.getElementById('username').value;
   
    if(3<=(val.length) && val.length<=25){
        document.getElementById('username').style.border = '2px solid green';
        document.getElementById('usernameErr').style.display='none';
        usernameErr=true;
    }
    else{
        document.getElementById('usernameErr').style.display='block';
        document.getElementById('username').style.border = '2px solid red';
        usernameErr=false;
    }
}


let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let handleEmail=()=>{
   let val=document.getElementById('email').value;
   if(val.match(mailformat)){
    document.getElementById('email').style.border = '2px solid green';
        document.getElementById('emailErr').style.display='none';
        emailErr=true;
   }
   else{
    document.getElementById('emailErr').style.display='block';
    document.getElementById('email').style.border = '2px solid red';
    emailErr=false;
   }
}

let passRegex ="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)" + "(?=.*[-+_!@#$%^&*., ?]).+$";
let password;
let handlePassword=()=>{
     password=document.getElementById('password').value;

    if(password.length>=8 && password.match(passRegex)){
        document.getElementById('password').style.border = '2px solid green';
        document.getElementById('passwordErr').style.display='none';
        passErr=true;
    }
    else{
        document.getElementById('passwordErr').style.display='block';
        document.getElementById('password').style.border = '2px solid red';
        passErr=false;
    }
}


let handleConfirmPassword=()=>{
    console.log("confirm pass")
    let pass2=document.getElementById('confirmPass').value;
    if(pass2==password){
        document.getElementById('confirmPass').style.border = '2px solid green';
        document.getElementById('confirmPassErr').style.display='none';
        confirmPassErr=true;
    }
    else{
        document.getElementById('confirmPassErr').style.display='block';
        document.getElementById('confirmPass').style.border = '2px solid red';
        confirmPassErr=false
    }
}


let handleShowPassword1=()=>{
    document.getElementById('showPass1').style.visibility='hidden';
    document.getElementById('hidePass1').style.visibility='visible';
    document.getElementById('password').type='text';
}
let handleHidePassword1=()=>{
    document.getElementById('showPass1').style.visibility='visible';
    document.getElementById('hidePass1').style.visibility='hidden';
    document.getElementById('password').type='password';
}
let handleShowPassword2=()=>{
    document.getElementById('showPass2').style.visibility='hidden';
    document.getElementById('hidePass2').style.visibility='visible';
    document.getElementById('confirmPass').type='text';
}
let handleHidePassword2=()=>{
    document.getElementById('showPass2').style.visibility='visible';
    document.getElementById('hidePass2').style.visibility='hidden';
    document.getElementById('confirmPass').type='password';
}


setInterval(()=>{
    if(usernameErr && emailErr && passErr && confirmPassErr){
        document.getElementById('signupbtn').style.backgroundColor=' #09439b';
        document.getElementById('signupbtn').classList.remove('disabled');
        document.getElementById('signupbtn').style.cursor='pointer';
    }
    else{
        document.getElementById('signupbtn').style.backgroundColor='grey';
        document.getElementById('signupbtn').classList.add('disabled');
        document.getElementById('signupbtn').style.cursor='auto';
    }
    
},100);




