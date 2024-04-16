document.addEventListener("DOMContentLoaded", function () {
  function showUserInfo() {
    var userId = localStorage.getItem("checkLogin");
    var userInfo = JSON.parse(localStorage.getItem("listUsers"));

    console.log(userId);
    console.log(userInfo);

    let infor = userInfo.find((user) => user.idUser == userId);
    console.log(infor);

    if (infor) {
      document.getElementById("username").innerText = infor.username;
      document.getElementById("username1").innerText = infor.username;
      document.getElementById("email").innerText = infor.email;
      document.getElementById("password").innerText = infor.password;
    } else {
      alert("Không tìm thấy thông tin người dùng!");
      redirect('/pages/login.html', 500);
    }
  }
  showUserInfo();
});

function logout() {
  localStorage.removeItem("checkLogin");

  localStorage.removeItem("favoriteFilms");

  window.location.href = "/pages/pageLogin/trangchu.html";
}

function changePassword() {
  var containerRight = document.querySelector('.container-right');  // Ẩn phần tử container-right
  containerRight.style.display = 'none';

  var changePasswordContainer = document.getElementById("form-submit");
  console.log(changePasswordContainer);
  changePasswordContainer.classList.add('change-password-container');

  var changePasswordForm = document.getElementById('form-1');
  changePasswordForm.innerHTML = `
      <input type="password" id="old-password" name="old-password" placeholder="Mật khẩu cũ" required>
      <input type="password" id="new-password" name="new-password" placeholder="Mật khẩu mới" required>
      <input type="password" id="confirm-new-password" name="confirm-new-password" placeholder="Nhập lại mật khẩu mới" required>
      <button style="color: #631a1a; border: none; border-radius: 8px; color: white; " type="submit" class="submit-password-btn">Đổi mật khẩu</button>
      <p id="password-change-error" style="color: red; display: none;">Vui lòng kiểm tra lại thông tin đã nhập.</p>
  `;

  // Chèn phần tử mới vào sau phần tử container-right
  containerRight.parentNode.insertBefore(changePasswordContainer, containerRight.nextSibling);

  // Hiển thị phần tử change-password-container
  changePasswordContainer.style.display = 'block';

  changePasswordForm.addEventListener('submit', function (event) {
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
    storedUserInfo[userIndex].password_confirmation = confirmNewPassword;
    localStorage.setItem('listUsers', JSON.stringify(storedUserInfo));

    redirect('/pages/info.html',500);
  });
}


// Gán sự kiện click cho nút "Đổi mật khẩu"
// document.querySelector(".submit-password-btn").onclick = function (event) {
//   event.preventDefault();

//   var oldPassword = document.getElementById("old-password").value;
//   var newPassword = document.getElementById("new-password").value;
//   var confirmNewPassword = document.getElementById('confirm-new-password').value;
//   console.log(oldPassword);
//   console.log(newPassword);

//   var storedUserInfo = JSON.parse(localStorage.getItem('listUsers'));
//   var userIndex = storedUserInfo.findIndex(user => user.idUser == localStorage.getItem("checkLogin"));
//   if (oldPassword !== storedUserInfo[userIndex].password) {
//     document.getElementById('password-change-error').innerText = "Mật khẩu cũ không chính xác.";
//     document.getElementById('password-change-error').style.display = 'block';
//     return;
//   }

//   if (newPassword !== confirmNewPassword) {
//     document.getElementById('password-change-error').innerText = "Mật khẩu mới không khớp với xác nhận mật khẩu mới.";
//     document.getElementById('password-change-error').style.display = 'block';
//     return;
//   }

//   storedUserInfo[userIndex].password = newPassword;
//   localStorage.setItem('listUsers', JSON.stringify(storedUserInfo));
// }



function redirect(url, delay) {
  setTimeout(function () {
    window.location.href = url
  }, delay);
}