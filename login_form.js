const validateEmail = () => {
    var email = document.getElementById('email').value;
    if(email.trim().length == 0){
        document.getElementById('eout').innerText = "Please Enter Email."
    }
    else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")==null){
            document.getElementById('eout').innerText = "Please Enter Valid Email."   
        }
        else{
            document.getElementById('eout').innerText = ""
        }
    }
}

const validatePwd = () =>{
    var pwd = document.getElementById('pwd').value;
    if(pwd.match ("^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:; <>,.?/_₹]).{8,}$")==null){
        document.getElementById('pwdout').innerText = "Please Enter Valid Password";
    }
    else{
        document.getElementById('pwdout').innerText = "";
    }

      
    
}

function showPassword () {
    var pwd = document.getElementById('pwd');
    if(pwd.type == 'password'){
        pwd.type = 'text'

    }
    else{
        pwd.type = 'password';
    }
    
}