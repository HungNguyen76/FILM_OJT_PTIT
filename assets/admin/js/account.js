function logout() {
  localStorage.removeItem("checkLogin");
  localStorage.removeItem("favoriteFilms");
  window.location.href = "/pages/pageLogin/trangchu.html";
}

function renderUsersAccounts() {
  var accounts = JSON.parse(localStorage.getItem("listUsers")) || [];
  var out = "";

  for (let i = 0; i < accounts.length; i++) {
    var adminClass = accounts[i].isAdmin ? "admin" : "";
    var blockedStatus = accounts[i].isBlocked ? "Đã chặn" : "Chưa chặn";
    var blockButtonText = accounts[i].isBlocked ? "Mở chặn" : "Chặn";

    out += `
      <div class="admin-film col-md-3 mb-4 d-flex justify-content-center ${adminClass}">
        <div class="card-body">
            <p >Tài khoản: ${accounts[i].email}</p>
            <p>Password: ${accounts[i].password}</p>
            <p>Trạng thái: ${blockedStatus}</p>
        </div>
        <div class="nut">
          <button class="block-account-btn" data-index="${i}">${blockButtonText}</button>
          <button class="delete-account-btn" data-index="${i}">Xóa</button>
          <button class="edit-account-btn" data-index="${i}">Sửa</button>
        </div>
      </div>
      <hr />`;
  }
  document.getElementById("users").innerHTML = out;

  var blockButtons = document.querySelectorAll(".block-account-btn");
  var deleteButtons = document.querySelectorAll(".delete-account-btn");
  var editButtons = document.querySelectorAll(".edit-account-btn");

  deleteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var index = parseInt(button.dataset.index);
      deleteAccount(index);
    });
  });

  editButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var index = parseInt(button.dataset.index);
      editAccount(index);
    });
  });

  blockButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var index = parseInt(button.dataset.index);
      toggleBlockAccount(index);
    });
  });
}

function toggleBlockAccount(index) {
  var accounts = JSON.parse(localStorage.getItem("listUsers")) || [];
  var account = accounts[index];
  account.isBlocked = !account.isBlocked; // Chuyển đổi trạng thái chặn tài khoản
  localStorage.setItem("listUsers", JSON.stringify(accounts));
  renderUsersAccounts(); // Cập nhật danh sách tài khoản sau khi chặn/mở chặn
}

// Hàm xóa tài khoản
function deleteAccount(index) {
  var accounts = JSON.parse(localStorage.getItem("listUsers")) || [];
  accounts.splice(index, 1);
  localStorage.setItem("listUsers", JSON.stringify(accounts));
  renderUsersAccounts(); // Hiển thị lại danh sách sau khi xóa
}

// Hàm chỉnh sửa tài khoản
// Hàm chỉnh sửa tài khoản
function editAccount(index) {
  var accounts = JSON.parse(localStorage.getItem("listUsers")) || [];
  var account = accounts[index];

  // Hiển thị form chỉnh sửa tài khoản
  var editForm = `
    <div class="edit-form">
      <label for="edit-email">Email:</label>
      <input type="email" id="edit-email" value="${account.email}" required>
      <label for="edit-password">Password:</label>
      <input type="password" id="edit-password" value="${account.password}" required>
      <label for="edit-role">Quyền:</label>
      <input type="text" id="edit-role" value="${account.role}" required>
      <button id="save-changes-btn">Lưu thay đổi</button>
    </div>`;

  // Thêm form chỉnh sửa vào phần tử cha của tài khoản được chọn
  var parentElement = document.querySelectorAll(".admin-film")[index];
  parentElement.insertAdjacentHTML("beforeend", editForm);

  // Lắng nghe sự kiện khi nút "Lưu thay đổi" được nhấp
  document
    .getElementById("save-changes-btn")
    .addEventListener("click", function () {
      var editedEmail = document.getElementById("edit-email").value;
      var editedPassword = document.getElementById("edit-password").value;
      var editedRole = document.getElementById("edit-role").value;
      // Cập nhật thông tin tài khoản
      account.email = editedEmail;
      account.password = editedPassword;
      // account.role = editedRole; // Thêm thông tin quyền mới

      // Lưu lại danh sách tài khoản đã được chỉnh sửa vào localStorage
      localStorage.setItem("listUsers", JSON.stringify(accounts));

      // Hiển thị lại danh sách tài khoản sau khi chỉnh sửa
      renderUsersAccounts();

      // Xóa form chỉnh sửa sau khi đã lưu thay đổi
      var editFormElement = document.querySelector(".edit-form");
      editFormElement.parentNode.removeChild(editFormElement);
    });
}



