const account = JSON.parse(localStorage.getItem('account'));
// Function: Validate login form
const username = document.getElementById('username');
const password = document.getElementById('password');
function validateUsername(){
    const usernameValue = username.value.trim();
    if(usernameValue === ''){
        document.getElementById('usernameError').innerHTML = "Username cannot be blank";
        return false;
    }
    else{
        document.getElementById('usernameError').innerHTML = "";
        return true;
    }
}
function validatePassword(){
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/;
    if(!regex.test(password.value.trim())) {
        document.getElementById('passwordError').innerHTML = "Password must be 8-16 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character";
        return false;
    }
    else{
        document.getElementById('passwordError').innerHTML = "";
        return true;
    }
}
username.addEventListener('blur', validateUsername);
password.addEventListener('blur', validatePassword);
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(validateUsername() && validatePassword()){
        const usernameValue = username.value.trim();
        const passwordValue = password.value.trim();
        if(account !== null){
            account.map(element => {
                if(element.username === usernameValue && element.password === passwordValue){
                    alert('Login success');
                    window.location.href = "Home.html";
                }
                else{
                    alert('username or password is incorrect');
                }
                
            });
        }
        else{
            alert('username or password is incorrect');
        }
        
        
    }
});