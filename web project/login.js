document.getElementById("loginButton").addEventListener("click", function (event) {
    event.preventDefault(); 

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var requiredUsername = "Nerve"; 
    var requiredPassword = "12345"; 

    if (username === requiredUsername && password === requiredPassword) {
        alert("تم تسجيل الدخول بنجاح!");
       
        window.location.href = "home.html"; 
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة!");
    }
});