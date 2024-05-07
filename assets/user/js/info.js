document.addEventListener("DOMContentLoaded", function () {
  showUserInfo();
});

function showUserInfo() {
  var userId = localStorage.getItem("checkLogin");
  var userInfo = JSON.parse(localStorage.getItem("listUsers"));

  let infor = userInfo.find((user) => user.idUser == userId);
  console.log(infor);

  if (infor) {
    document.getElementById("username").innerText = infor.username;
    document.getElementById("username1").innerText = infor.username;
    document.getElementById("email").innerText = infor.email;
    // Hide the actual password and show masked password
    var passwordMask = document.getElementById("password-mask");
    passwordMask.textContent = "*".repeat(infor.password.length);

    // Display the profile image from Local Storage if it exists
    var profileImage = localStorage.getItem(userId + "_profile_image");
    if (profileImage) {
      document.getElementById('profile-image-preview').setAttribute('src', profileImage);
    } else {
      document.getElementById('profile-image-preview').setAttribute('src', '/assets/img/profile-none.png');
    }
  } else {
    alert("Không tìm thấy thông tin người dùng!");
    redirect("/pages/login.html", 500);
  }
}

function logout() {
  localStorage.removeItem("nameLogin");
  localStorage.removeItem("checkLogin");

  window.location.href = "/pages/pageLogin/trangchu.html";
}

function changePassword() {
  var containerRight = document.querySelector(".container-right"); // Ẩn phần tử container-right
  containerRight.style.display = "none";

  var changePasswordContainer = document.getElementById("form-submit");
  console.log(changePasswordContainer);
  changePasswordContainer.classList.add("change-password-container");

  var changePasswordForm = document.getElementById("form-1");
  changePasswordForm.innerHTML = `
      <input type="password" id="old-password" name="old-password" placeholder="Mật khẩu cũ" required>
      <input type="password" id="new-password" name="new-password" placeholder="Mật khẩu mới" required>
      <input type="password" id="confirm-new-password" name="confirm-new-password" placeholder="Nhập lại mật khẩu mới" required>
      <button style="color: #631a1a; border: none; border-radius: 8px; color: white; " type="submit" class="submit-password-btn">Đổi mật khẩu</button>
      <p id="password-change-error" style="color: red; display: none;">Vui lòng kiểm tra lại thông tin đã nhập.</p>
  `;

  // Chèn phần tử mới vào sau phần tử container-right
  containerRight.parentNode.insertBefore(
    changePasswordContainer,
    containerRight.nextSibling
  );

  // Hiển thị phần tử change-password-container
  changePasswordContainer.style.display = "block";

  changePasswordForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var oldPassword = document.getElementById("old-password").value;
    var newPassword = document.getElementById("new-password").value;
    var confirmNewPassword = document.getElementById(
      "confirm-new-password"
    ).value;

    var storedUserInfo = JSON.parse(localStorage.getItem("listUsers"));
    var userIndex = storedUserInfo.findIndex(
      (user) => user.idUser == localStorage.getItem("checkLogin")
    );
    if (oldPassword !== storedUserInfo[userIndex].password) {
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

    storedUserInfo[userIndex].password = newPassword;
    storedUserInfo[userIndex].password_confirmation = confirmNewPassword;
    localStorage.setItem("listUsers", JSON.stringify(storedUserInfo));

    redirect("/pages/info.html", 500);
  });
}

function redirect(url, delay) {
  setTimeout(function () {
    window.location.href = url;
  }, delay);
}
function previewImage(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var userId = localStorage.getItem("checkLogin");
      // Save the profile image in Local Storage with the user's ID
      localStorage.setItem(userId + "_profile_image", e.target.result);
      // Update the profile image preview
      document.getElementById('profile-image-preview').setAttribute('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

// Trigger the file input when the profile image container is clicked
document.getElementById('profile-image-container').addEventListener('click', function() {
  document.getElementById('profile-image-input').click();
});
