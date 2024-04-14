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
});
function logout() {
  localStorage.removeItem("checkLogin");
  window.location.href = "/pages/pageLogin/trangchu.html";
}
