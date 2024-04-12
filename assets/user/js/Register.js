
document.addEventListener('DOMContentLoaded', function () {
    // Hàm tạo UUID
    function generateUUID() {
        // Sử dụng thời gian hiện tại kết hợp với một chuỗi ngẫu nhiên để tạo ID duy nhất
        return Date.now().toString(36) + Math.random().toString(36).substr(2, 10);
    }

    Validator({
        form: '#form-logout',
        formGroupSelector: '.box',
        errorSelector: '.form-message',
        rules: [
            Validator.isEmail('#email'),
            Validator.minLength('#password', 6),
            Validator.userName('#username'),
            Validator.isRequired('#password'),
            // Thêm rule để xác nhận mật khẩu
            Validator.isConfirmed('#password_confirmation', function () {
                return document.querySelector('#password').value;
            }, 'Mật khẩu không khớp')
        ],
        onSubmit: function (data) {
            // Kiểm tra Local Storage
            if (typeof localStorage !== 'undefined') {
                // Lấy danh sách người dùng từ Local Storage
                let listUsers = JSON.parse(localStorage.getItem('listUsers')) || [];

                // Kiểm tra xem email đã tồn tại trong danh sách người dùng chưa
                let isExist = listUsers.some(user => user.email === data.email);
                if (isExist) {
                    alert("Email đã tồn tại. Vui lòng sử dụng email khác!");
                    return;
                }

                // Thêm dữ liệu mới vào danh sách người dùng
                data.idUser = generateUUID();
                data.User = [];
                data.purchaseHistory = [];
                listUsers.push(data);

                // Lưu danh sách người dùng mới vào Local Storage
                localStorage.setItem('listUsers', JSON.stringify(listUsers));

                // Hiển thị thông báo thành công và chuyển hướng đến trang đăng nhập
                alert("Đăng ký thành công");
                setTimeout(function () {
                    window.location.href = "/pages/login.html";
                }, 1000);
            } else {
              
                alert('Trình duyệt của bạn không hỗ trợ tính năng này!');
            }
        }
    });
});
