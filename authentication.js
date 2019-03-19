var sigInButton = document.getElementById("submitLogin");

var emailLogin = document.getElementById("signInEmail");

var passwordLogin = document.getElementById("signInPassword");

sigInButton.addEventListener("click", function()
                            {
    var email = emailLogin.value;
    var password = passwordLogin.value;
    
    if(email === "yaswanth2011@gmail.com" && password === "madhu")
        {
            window.location.href = "file:///A:\UPGradWebPractise\UserProfile.html";
        }
    else
        {
            alert("Email or Password is not Correct");
        }
});

