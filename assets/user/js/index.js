const films = [
  {
    id: "film1",
    img1: "https://m.ykimg.com/0584000065E0849D2027901CB107BD2F?x-oss-process=image/resize,w_385/interlace,1/quality,Q_80",
    name: "Everyone Loves Me",
    type: "hiện-đại",
  },

  {
    id: "film2",
    img1: "https://m.ykimg.com/05840000636109B813EBC6095DF70CE8?x-oss-process=image/resize,w_385/interlace,1/quality,Q_80",
    name: "Ligher and Princess",
    type: "hiện-đại",
  },

  {
    id: "film3",
    img1: "https://m.ykimg.com/0584000063A7FAF813EB6609A0ED1448?x-oss-process=image/resize,w_385/interlace,1/quality,Q_80",
    name: "The Blood of Youth",
    type: "tiên-hiệp",
  },

  {
    id: "film4",
    img1: "http://m.ykimg.com/0583000064AEA41F13EB660C1CEEDC4A?x-oss-process=image/resize,w_640/crop,x_0,y_0,w_640,h_360",
    name: "In Blossom",
    type: "tiên-hiệp",
  },
];
localStorage.setItem("listAll", JSON.stringify(films));

window.onload = function () {
  load();
  renderTienHiep();
};

function load() {
  var out = "";
  let filmALL = JSON.parse(localStorage.getItem("listAll")) || [];
  for (let i = 0; i < filmALL.length; i++) {
    out += `<div class="col-md-3 mb-4 d-flex justify-content-center">
      <div class="card rounded-lg" style="width: 18rem;">
        <img src="${filmALL[i].img1}" class="card-img-top" alt="Product Image" style="height: 300px;">
        <div class="card-body">
          <h5 class="card-title">${filmALL[i].name}</h5>
        </div>
      </div>
    </div>`;
  }
  document.getElementById("load").innerHTML = out;
}

function loadFilms(filmList, containerId) {
  var out = "";
  for (let i = 0; i < filmList.length; i++) {
    out += `<div class="col-md-3 mb-4 d-flex justify-content-center">
      <div class="card rounded-lg" style="width: 18rem;">
        <img src="${filmList[i].img1}" class="card-img-top" alt="Product Image" style="height: 300px;">
        <div class="card-body">
          <h5 class="card-title">${filmList[i].name}</h5>
        </div>
      </div>
    </div>`;
  }
  document.getElementById(containerId).innerHTML = out;
}
function locHienDai() {
  let hienDai = JSON.parse(localStorage.getItem("listAll"));
  const listHienDai = [];
  for (let i = 0; i < hienDai.length; i++) {
    if (hienDai[i].type == "hiện-đại") {
      listHienDai.push(hienDai[i]);
    }
  }
  localStorage.setItem("listHienDai", JSON.stringify(listHienDai));
}

function locTienHiep() {
  let tienHiep = JSON.parse(localStorage.getItem("listAll"));
  const listTienHiep = [];
  for (let i = 0; i < tienHiep.length; i++) {
    if (tienHiep[i].type == "tiên-hiệp") {
      listTienHiep.push(tienHiep[i]);
    }
  }
  localStorage.setItem("listTienHiep", JSON.stringify(listTienHiep));
}
function renderHienDai() {
  locHienDai();
  let listHienDai = JSON.parse(localStorage.getItem("listHienDai")) || []; // Lấy dữ liệu từ local storage
  loadFilms(listHienDai, "loadH");
}

function renderTienHiep() {
  locTienHiep();
  let listTienHiep = JSON.parse(localStorage.getItem("listTienHiep")) || []; // Lấy dữ liệu từ local storage
  loadFilms(listTienHiep, "loadT");
}
