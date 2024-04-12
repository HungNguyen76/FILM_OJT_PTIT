var isLoggedIn = true;

function redirect(url) {
  window.location.href = url;
}
function showUserInfo() {
  if (isLoggedIn) {
    var userInfo = JSON.parse(localStorage.getItem("listUsers"));
    document.getElementById("username").innerText = userInfo.username;
    document.getElementById("email").innerText = userInfo.email;
    document.getElementById("passwork").innerText = userInfo.password;
  } else {
    redirect();
  }
}

function changePassword() {
  // Tạo một phần tử mới để chứa form thay đổi mật khẩu
  var changePasswordContainer = document.createElement("div");
  changePasswordContainer.classList.add("change-password-container");

  // Tạo form thay đổi mật khẩu
  var changePasswordForm = document.createElement("form");
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
  var formContainer = document.querySelector(".form");
  formContainer.parentNode.insertBefore(
    changePasswordContainer,
    formContainer.nextSibling
  );

  // Ẩn phần tử .form
  formContainer.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit-password-btn").onclick = function (event) {
    event.preventDefault();

    var oldPassword = document.getElementById("old-password").ariaValueMax;
    var newPassword = document.getElementById("new-password");
    var confirmNewPassword = document.getElementById(
      "confirm-new-password"
    ).value;

    var storedUserInfo = JSON.parse(localStorage.getItem("listUsers"));
    var storedPassword = storedUserInfo.password;

    if (oldPassword !== storedPassword) {
      document.getElementById("password-change-error").innerText =
        "Mật khẩu cũ không chính xác.";
      document.getElementById("password-change-error").style.display = "block";
      return;
    }

    if (newPassword !== confirmNewPassword) {
      document.getElementById("password-change-error").innerText =
        "Mật khẩu mới không khớp với xác nhận mật khẩu mới.";
      document.getElementById("password-change-error").style.display = "block";
      return;
    }

    listUsers.password = newPassword;

    localStorage.setItem("listUsers", JSON.stringify("listUsers"));

    // Xóa nội dung của các trường nhập mật khẩu để ngăn người dùng gửi lại form
    document.getElementById("old-password").value = "";
    document.getElementById("new-password").value = "";
    document.getElementById("confirm-new-password").value = "";

    location.reload();

    var closeChangePassWord = document.querySelector("form");
    var openOriginal = document.querySelector(".container-right");

    closeChangePassWord.style.display = "none";
    openOriginal.style.display = "block";
  };
});
