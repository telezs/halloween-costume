let login_form = document.getElementById('login-form');
if ( login_form ) {
    login_form.addEventListener('submit', function (e) {
        e.preventDefault()

        let flag = false

        let email = document.querySelector('.email-input').value;
        localStorage.setItem("owner", JSON.stringify(email))
        let password = document.querySelector('.password-input').value;
    
        let user_email_list = JSON.parse(localStorage.getItem("user_email_list")) || []
        let user_password_list = JSON.parse(localStorage.getItem("user_password_list")) || []
    
        for(let key in user_email_list ) {
            if ( email == user_email_list[key] && password == user_password_list[key] ) {
                flag = true
                login_form.reset()
                window.location.href = "../index.html"

            }
        }

        if(flag==false) {
            alert("Đăng nhập không thành công");
            login_form.reset()
        }
        
    })
}