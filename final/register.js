let register_form = document.getElementById('register-form');

register_form.addEventListener('submit', function (e) {
    e.preventDefault()

    // Thiết lập các giá trị đặt biệt
    let lowerCaseLetter = /[a-z]/g
    let upperCaseLetter = /[A-Z]/g
    let numbers = /[0-9]/g

    // lấy input
    let email = document.querySelector('.email-input').value;
    let password = document.querySelector('.password-input').value;
    let repassword = document.querySelector('.repassword-input').value;

    // Lấy data từ local storage
    let user_email_list = JSON.parse(localStorage.getItem("user_email_list")) || []
    let user_password_list = JSON.parse(localStorage.getItem("user_password_list")) || []

    if (password.trim().length < 8) {
        alert("Password must be at least 8 characters.")
    }  
    else if (!password.trim().match(lowerCaseLetter)) {
        alert("Password must contain a lowercase letter")
    }
    else if (!password.trim().match(upperCaseLetter)) {
        alert("Password must contain a uppercase letter")
    }
    else if (!password.trim().match(numbers)) {
        alert("Password must contain a number or special character")
    }
    else if ( password !== repassword ) {
        alert('Mật khẩu không trùng khớp')
    } 
    else {
        let exist_email = false;
        for(let key in user_email_list ) {
            if ( email == user_email_list[key] ) {
                alert('Email đã tồn tại');
                exist_email = true;
            }
        }
        console.log(exist_email)
        if ( exist_email == false ) {
            user_email_list.push(email);
            user_password_list.push(password);
            localStorage.setItem( "user_email_list", JSON.stringify(user_email_list) );
            localStorage.setItem( "user_password_list", JSON.stringify(user_password_list) );
            window.location.href = "login.html"
        }
    }
    register_form.reset()
})