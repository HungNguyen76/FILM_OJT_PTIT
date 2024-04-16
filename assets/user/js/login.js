document.addEventListener("DOMContentLoaded", function () {
  Validator({
    form: "#form-2",
    formGroupSelector: ".form-group",
    errorSelector: ".form-message",
    rules: [
      Validator.isEmail("#login-email"),
      Validator.minLength("#login-password", 6),
    ],
    onSubmit: function (data) {
      let listUsers = JSON.parse(localStorage.getItem("listUsers")) || [];
      let userFound = listUsers.find((user) => {
        return user.email === data.email && user.password === data.password;
      });

      if (userFound) {
        localStorage.setItem("checkLogin", userFound.idUser);

        let adminData = JSON.parse(localStorage.getItem("admin"));
        if (
          adminData &&
          data.email === adminData.username &&
          data.password === adminData.pass
        ) {
          alert("Đăng nhập thành công với quyền admin");
          window.location.href = "/pages/admin/admin.html";
        } else {
          if (userFound.isLocked) {
            alert("Tài khoản của bạn đã bị khóa và không thể đăng nhập.");
          } else {
            alert("Đăng nhập thành công");
            window.location.href = userFound.isAdmin
              ? "/pages/admin/admin.html"
              : "/pages/pageOut/trangchulogout.html";
          }
        }
      } else {
        alert("Email hoặc mật khẩu không chính xác");
      }
    },
  });
});

const admin = {
  username: "admin@vn.com",
  pass: "999999",
};
localStorage.setItem("admin", JSON.stringify(admin));
