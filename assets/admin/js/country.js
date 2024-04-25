window.onload = function () {
  renderNhatBan();
  renderThai();
  renderKorea();
  renderUSA();
};
function locNhatBan() {
  let nhatBan = JSON.parse(localStorage.getItem("listAll"));
  const listNhatBan = [];
  for (let i = 0; i < nhatBan.length; i++) {
    if (nhatBan[i].nation == "Nhật Bản") {
      listNhatBan.push(nhatBan[i]);
    }
  }
  localStorage.setItem("listNhatBan", JSON.stringify(listNhatBan));
}
function locThai() {
  let thai = JSON.parse(localStorage.getItem("listAll"));
  const listThai = [];
  for (let i = 0; i < thai.length; i++) {
    if (thai[i].nation == "Thái") {
      listThai.push(thai[i]);
    }
  }
  localStorage.setItem("listThai", JSON.stringify(listThai));
}
function locKorea() {
  let korea = JSON.parse(localStorage.getItem("listAll"));
  const listKorea = [];
  for (let i = 0; i < korea.length; i++) {
    if (korea[i].nation == "Korea") {
      listKorea.push(korea[i]);
    }
  }
  localStorage.setItem("listKorea", JSON.stringify(listKorea));
}
function locUSA() {
  let USA = JSON.parse(localStorage.getItem("listAll"));
  const listUSA = [];
  for (let i = 0; i < USA.length; i++) {
    if (USA[i].nation == "USA") {
      listUSA.push(USA[i]);
    }
  }
  localStorage.setItem("listUSA", JSON.stringify(listUSA));
}
function renderNhatBan() {
  locNhatBan();
  let listNhatBan = JSON.parse(localStorage.getItem("listNhatBan")) || []; // Lấy dữ liệu từ local storage
  loadFilms(listNhatBan, "loadJ");
}
function renderThai() {
  locThai();
  let listThai = JSON.parse(localStorage.getItem("listThai")) || []; // Lấy dữ liệu từ local storage
  loadFilms(listThai, "loadThai");
}
function renderKorea() {
  locKorea();
  let listKorea = JSON.parse(localStorage.getItem("listKorea")) || []; // Lấy dữ liệu từ local storage
  loadFilms(listKorea, "loadKorea");
}
function renderUSA() {
  locUSA();
  let listUSA = JSON.parse(localStorage.getItem("listUSA")) || []; // Lấy dữ liệu từ local storage
  loadFilms(listUSA, "loadUSA");
}
function loadFilms(filmList, containerId) {
  var out = "";
  for (let i = 0; i < filmList.length; i++) {
    out += `
      <div class="film col-md-3 mb-4 d-flex justify-content-center" data-id="${filmList[i].id}">
        <div class="card rounded-lg" style="width: 18rem;">
          <img src="${filmList[i].img1}" class="card-img-top" alt="Product Image" style="height: 400px;">
          <div class="card-body">
            <h5 class="card-title">${filmList[i].name}</h5>
          </div>
        </div>
      </div>`;
  }
  document.getElementById(
    containerId
  ).innerHTML = `<div class="row">${out}</div>`;
}
