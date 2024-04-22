// Hàm thêm phim vào danh sách
function addFilmToCollection(newFilm) {
  if (!newFilm || typeof newFilm !== "object") {
    console.error("Invalid film object.");
    return;
  }

  // Lấy danh sách phim hiện tại từ localStorage hoặc tạo một mảng mới nếu không tồn tại
  const listAll = JSON.parse(localStorage.getItem("listAll")) || [];

  // Thêm bộ phim mới vào mảng
  listAll.push(newFilm);

  // Lưu lại mảng đã cập nhật vào localStorage
  localStorage.setItem("listAll", JSON.stringify(listAll));
}

// Xử lý sự kiện submit form thêm phim
addFilmForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Lấy giá trị từ các trường input
  const id = document.getElementById("id").value;
  const name = document.getElementById("Name").value;
  const Poster = document.getElementById("Poster").value;
  const nation = document.getElementById("nation").value;
  const nam = document.getElementById("nam").value;
  const time = document.getElementById("time").value;
  const daodien = document.getElementById("daodien").value;
  const dienvien = document.getElementById("dienvien").value;
  const type = document.getElementById("type").value;
  const rate = document.getElementById("rate").value;
  const noidung = document.getElementById("noidung").value;

  // Lấy thêm các trường thông tin khác của phim từ form

  // Tạo một đối tượng mới chứa thông tin của bộ phim mới
  const newFilm = {
    id: id,
    name: name,
    img1: Poster,
    nation: nation,
    nam: nam,
    daodien: daodien,
    time: time,
    dienvien: dienvien,
    type: type,
    rate: rate,
    noidung: noidung,
  };

  // Gọi hàm để thêm phim vào danh sách và lưu vào localStorage
  addFilmToCollection(newFilm);

  // Reset form sau khi thêm phim thành công
  addFilmForm.reset();

  // Thông báo cho người dùng biết rằng phim đã được thêm thành công
  alert("Phim đã được thêm!");

  // Cập nhật lại trang web để hiển thị phim mới
  // (Bạn có thể thực hiện cập nhật giao diện ở đây nếu cần)
});
