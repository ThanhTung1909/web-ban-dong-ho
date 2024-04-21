let account = JSON.parse(localStorage.getItem('account'));

// Function: Validate register form
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const address = document.getElementById('address'); 
const securityCode = document.getElementById('securityCode');

function validateUsername(){
    const usernameValue = username.value.trim();
    if(account !== null){
        account.map(element => {
            if(element.username === usernameValue){
                document.getElementById('usernameError').innerHTML = "Username already exists";
                return false;
            }
        });
    }
    if(usernameValue === ''){
        document.getElementById('usernameError').innerHTML = "Username cannot be blank";
        return false;
    }
    else{
        document.getElementById('usernameError').innerHTML = "";
        return true;
    }
}
function validateEmail(){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(email.value.trim())) {
        document.getElementById('emailError').innerHTML = "Email cannot be blank";
        return false;
    }
    else{
        document.getElementById('emailError').innerHTML = "";
        return true;
    }
}
function validatePassword(){
    // regex password từ 8-16 ký tự, ít nhất 1 chữ hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt
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
function validateConfirmPassword(){
    if(password.value !== confirmPassword.value){
        document.getElementById('confirmPasswordError').innerHTML = "Password does not match";
        return false;
    }
    else{
        document.getElementById('confirmPasswordError').innerHTML = "";
        return true;
    }

}
function validateName(){
    const nameValue = name.value.trim();
    if(nameValue === ''){
        document.getElementById('nameError').innerHTML = "Name cannot be blank";
        return false;
    }
    else{
        document.getElementById('nameError').innerHTML = "";
        return true;
    }

}
function validatePhone(){
    //regex phone number bắt đầu bằng 0, 10 số
    const regex = /^0\d{9}$/;
    if(!regex.test(phone.value.trim())) {
        document.getElementById('phoneError').innerHTML = "Phone number must start with 0, 10 digits";
        return false;
    }
    else{
        document.getElementById('phoneError').innerHTML = "";
        return true;
    }
}

username.addEventListener('blur', validateUsername);
email.addEventListener('blur', validateEmail);
password.addEventListener('blur', validatePassword);
confirmPassword.addEventListener('blur', validateConfirmPassword);
name.addEventListener('blur', validateName);
phone.addEventListener('blur', validatePhone);

const cancelBtn = document.getElementById('cancel');
cancelBtn.addEventListener('click', function(){
    location.reload();
});

const registerBtn = document.getElementById('register');
registerBtn.addEventListener('click', function(){
    if(validateUsername() && validateEmail() && validatePassword() && validateConfirmPassword() && validateName() && validatePhone()){
        if(account === null){
            account = [];
            let newAccount = {
                username: username.value,
                email: email.value,
                password: password.value,
                name: name.value,
            }
            account.push(newAccount);
            localStorage.setItem('account', JSON.stringify(account));
        }
        else{
            let newAccount = {
                username: username.value,
                email: email.value,
                password: password.value,
                name: name.value,
            }
            account.push(newAccount);
            localStorage.setItem('account', JSON.stringify(account));
        }
        alert("Register successfully");
        window.location.href = "dangnhap.html";
    }
    else{
        alert("Please fill in the required information");
    }
});

const pwdeye = document.getElementById('pwdeye');
pwdeye.addEventListener('click', function(){
    if(password.type === 'password'){
        password.type = 'text';
        pwdeye.innerHTML = '<i class="bi bi-eye"></i>';
    }
    else{
        password.type = 'password';
        pwdeye.innerHTML = '<i class="bi bi-eye-slash"></i>';
    }
});
const cfmeye = document.getElementById('cfmeye');
cfmeye.addEventListener('click', function(){
    if(confirmPassword.type === 'password'){
        confirmPassword.type = 'text';
        cfmeye.innerHTML = '<i class="bi bi-eye"></i>';
    }
    else{
        confirmPassword.type = 'password';
        cfmeye.innerHTML = '<i class="bi bi-eye-slash"></i>';
    }
});

