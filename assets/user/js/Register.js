function uuid() {
  return new Date().getMilliseconds() + Math.floor(Math.random() * 999999999);
}

document.addEventListener("DOMContentLoaded", function () {
  Validator({
    form: "#form-1",
    formGroupSelector: ".form-group",
    errorSelector: ".form-message",
    rules: [
      Validator.isEmail("#email"),
      Validator.minLength("#password", 6),
      Validator.isRequired("#password_confirmation"),
      Validator.isConfirmed(
        "#password_confirmation",
        function () {
          return document.querySelector("#form-1 #password").value;
        },
        "Mật khẩu nhập lại không chính xác"
      ),
    ],
    onSubmit: function (data) {
      data.username = document.querySelector("#form-1 #username").value;
      
      let listUsers = JSON.parse(localStorage.getItem("listUsers")) || [];
      let flag = true;
      for (let i = 0; i < listUsers.length; i++) {
        if (listUsers[i].email == data.email) {
          flag = false;
          break;
        }
      }
      if (flag) {
        data.idUser = uuid();
        data.cartUser = [];
        data.purchaseHistory = [];
        data.username = document.querySelector("#username").value;

        listUsers.push(data);
        localStorage.setItem("listUsers", JSON.stringify(listUsers));
        alert("Đăng kí thành công");
        function changeToLoginPage() {
          window.location.href = "/pages/login.html";
        }
        setTimeout(changeToLoginPage, 1000);
      } else {
        alert("Email đã tồn tại");
        redirect("/pages/login.html");
      }
    },
  });
});

function redirect(url) {
  window.location.href = url;
}
