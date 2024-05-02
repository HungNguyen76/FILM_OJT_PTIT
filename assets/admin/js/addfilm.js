// Hàm thêm phim vào danh sách
function addFilmToCollection(newFilm) {
  if (!newFilm || typeof newFilm !== "object") {
    console.error("Invalid film object.");
    return;
  }

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
  const Trailer = document.getElementById("Trailer").value;
  const Video = document.getElementById("Video").value;

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
    Trailer: Trailer,
    Video: Video,
  };

  addFilmToCollection(newFilm);

  addFilmForm.reset();

  alert("Phim đã được thêm!");
});
