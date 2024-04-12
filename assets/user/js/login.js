document.addEventListener('DOMContentLoaded', function () {
    Validator({
        form: 'form-login',
        formGroupSelector: '.box',
        errorSelector: '.form-message',
        rules: [
            Validator.isEmail('#email'),
            Validator.minLength('#password', 6),
        ],
        onSubmit: function (data) {
            // Kiểm tra localStorage có được hỗ trợ
            if (typeof localStorage === 'undefined') {
                alert('Trình duyệt của bạn không hỗ trợ tính năng này!');
                return;
            }

            // Lấy danh sách người dùng từ localStorage
            let listUsers = JSON.parse(localStorage.getItem("listUsers")) || [];
            
            // Kiểm tra đăng nhập
            let checkUser = listUsers.find((user) => {
                return user.email === data.email && user.password === data.password
            });
            
            // Nếu tìm thấy người dùng, đăng nhập thành công
            if (checkUser) {
                localStorage.setItem("checkLogin", checkUser.idUser);
                function goToHomePage() {
                    window.location.href = "";
                }
                setTimeout(goToHomePage, 2000);
            } else {
                // Nếu không, hiển thị thông báo lỗi
                alert("Tài khoản không hợp lệ");
            }
        }
    });
});
