function validateName(name)
{
    if(name.length < 3)
    {
        alert("Username must be longer than 2 digits");  
        return false;
    }
    return true;
}

function validateEmail(email){
    if(email.endsWith("@gmail.com") || email.endsWith("@yahoo.com"))
    {
        return true;
    }
    alert("Email must be ended with @gmail.com or @yahoo.com");
    return false;
}

function validatePassword(password, confirm_pass)
{
    if(password !== confirm_pass)
    {
        alert("Password and password confirmation aren't same");
        return false;
    }
    return true;
}

function validateNationality(nationality)
{
    if(nationality == "")
    {
        alert("Nationality must be filled !");
        return false;
    }
    return true;
}

function validateGender(gender)
{
    if (gender == "")
    {
        alert("Gender must be filled !");
        return false;
    }
    return true;
}

document.getElementById("submit-button").addEventListener("click", function(e)
{
    e.preventDefault();

    let input_name = document.getElementById("name");
    let input_email = document.getElementById ("email");
    let error = document.getElementById("error");

    let input_password = document.getElementById("password");
    let confirm_password = document.getElementById("password-confirmation");

    
    let input_nationality = document.getElementById("nationality");
    let input_gender = document.getElementById("gender");
    let check = document.getElementById("agree");

    if(!validateName(input_name.value))
    {
        error.innerHTML = "Username must be more than 2 characters"
        return;
    }

    if(!validatePassword(input_password.value, confirm_password.value))
    {
        error.innerHTML = "password and password confirmation is different"
        return;
    }

    if(!validateEmail(input_email.value))
    {
        error.innerHTML = "email must ends with @gmail.com or @yahoo.com"
        return;
    }

    if (!validateNationality(input_nationality.value))
    {
        error.innerHTML = "Please select your nationality"
        return;
    }

    if (!validateGender(input_gender.value))
    {
        error.innerHTML = "Please select your gender"
        return;
    }

    if(!check.checked)
    {
        error.innerHTML = "Please tick the checkbox";
        return;
    }
    

    if(check.checked && validateNationality(input_nationality.value) && validateGender(input_gender.value) && 
    validateEmail(input_email.value) && validatePassword(input_password.value, confirm_password.value) && validateName(input_name.value))
    {
        document.formulir.submit();
    }

    let display_name = document.getElementById("name");
    let display_email = document.getElementById("email");
    let display_nationality = document.getElementById("nationality");
    let display_gender = document.getElementById("gender");

    display_name.innerHTML = "Nama: " + input_name.value;
    display_email.innerHTML = "Email: " + input_email.value;

});

