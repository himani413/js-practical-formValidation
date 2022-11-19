function setErrorMessage(message){
    document.getElementById('errorMessage').innerHTML = message; //putting a text to empty paragraph element.
}


function validateForm(){
    var username = document.forms['loginForm']['username'].value; //becuase .form give all the forms of the doc like an array. so we can put form[0] or form[name]
    if(username){
        if(username.length > 4){

        }else{
            //alert('Username should be at least 4 characters long.'); //nowadays we don't use alerts. instead we use error messages.
            setErrorMessage('Username should be at least 4 characters long.');
            return false;
        }
    }else{
        //alert('Please input username.')
        setErrorMessage('Please input username.');
        return false;
    }

    var password = document.forms['loginForm']['password'].value;
    
    if(password){
        if(password.length > 5){

        }else{
            setErrorMessage('Password should be at least 5 characters long.');
            return false;
        }

    }else{
        setErrorMessage('Please input password.');
        return false;
    }

    if(username.length >=4 && password.length >=5){

        submitForm();
    }
}


function submitForm(){
    //send username ans password toAPI
    alert('login success.');
}

function validateUsername(){
    var username = document.forms['loginForm']['username'].value;

    if(username && username.length > 4){
        document.getElementById('usernameLabel').style.color = 'blue';
        return true;
    }else{
        document.getElementById('usernameLabel').style.color = 'red';  
    }
}