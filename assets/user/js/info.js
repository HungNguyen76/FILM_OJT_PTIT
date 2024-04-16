document.addEventListener("DOMContentLoaded", function () {
  // Hàm để hiển thị thông tin người dùng
  function showUserInfo() {
    // Lấy dữ liệu người dùng từ localStorage
    var userId = localStorage.getItem("checkLogin");
    var userInfo = JSON.parse(localStorage.getItem("listUsers"));
    console.log(userId);
    console.log(userInfo);
    let infor = userInfo.find((user) => user.idUser == userId);
    console.log(infor);
    // Kiểm tra nếu dữ liệu người dùng tồn tại
    if (infor) {
      // Điền các trường tên người dùng, email và mật khẩu
      document.getElementById("username").innerText = infor.username;
      document.getElementById("email").innerText = infor.email;
      document.getElementById("passwork").innerText = infor.password;
    } else {
      // Xử lý trường hợp không tìm thấy dữ liệu người dùng
      alert("Không tìm thấy thông tin người dùng!");
    }
  }

  // Gọi hàm showUserInfo để hiển thị thông tin người dùng khi DOM được tải
  showUserInfo();

  function changePassword() {
    // Tạo một phần tử mới để chứa form thay đổi mật khẩu
    var changePasswordContainer = document.createElement('div');
    changePasswordContainer.classList.add('change-password-container');
  
    // Tạo form thay đổi mật khẩu
    var changePasswordForm = document.createElement('form');
    changePasswordForm.innerHTML = `
        <input type="password" id="old-password" name="old-password" placeholder="Mật khẩu cũ" required>
        <input type="password" id="new-password" name="new-password" placeholder="Mật khẩu mới" required>
        <input type="password" id="confirm-new-password" name="confirm-new-password" placeholder="Nhập lại mật khẩu mới" required>
        <button style="color: #631a1a; border: none; border-radius: 8px; color: white; " type="submit" id="submit-password-btn">Đổi mật khẩu</button>
        <p id="password-change-error" style="color: red; display: none;">Vui lòng kiểm tra lại thông tin đã nhập.</p>
    `;
  
    // Thêm form vào phần tử mới
    changePasswordContainer.appendChild(changePasswordForm);
  
    // Chèn phần tử mới vào sau phần tử .form
    var formContainer = document.querySelector('.form');
    formContainer.parentNode.insertBefore(changePasswordContainer, formContainer.nextSibling);
  
    // Ẩn phần tử .form
    formContainer.style.display = 'none';

    document.getElementById("submit-password-btn").onclick = function(event) {
      event.preventDefault();
  
      var oldPassword = document.getElementById("old-password").value;
      var newPassword = document.getElementById("new-password").value;
      var confirmNewPassword = document.getElementById('confirm-new-password').value;
  
     
      var storedUserInfo = JSON.parse(localStorage.getItem('listUsers'));
      var userIndex = storedUserInfo.findIndex(user => user.idUser == localStorage.getItem("checkLogin"));
      if (oldPassword !== storedUserInfo[userIndex].password) {
         document.getElementById('password-change-error').innerText = "Mật khẩu cũ không chính xác.";
         document.getElementById('password-change-error').style.display = 'block';
         return;
     }
  
     if (newPassword !== confirmNewPassword) {
         document.getElementById('password-change-error').innerText = "Mật khẩu mới không khớp với xác nhận mật khẩu mới.";
         document.getElementById('password-change-error').style.display = 'block';
         return;
     }
  
     storedUserInfo[userIndex].password = newPassword;
     localStorage.setItem('listUsers', JSON.stringify(storedUserInfo));
    }
  }

 

});



function logout() {
  localStorage.removeItem("checkLogin");

  localStorage.removeItem("favoriteFilms");

  window.location.href = "/pages/pageLogin/trangchu.html";
}

