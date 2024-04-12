const films = [
  {
    id: "film1",
    img1: "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/435060907_1840794256417687_8370453157257839946_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PGqj-ZdgPEYAb6g3i4A&_nc_ht=scontent.fhan14-2.fna&oh=00_AfAxuIkI_jT3h3sc9VMTeMdhM_mdqtORYQPg9RnCLAXORA&oe=661E6853",
    name: "Everyone Loves Me",
    type: "hiện-đại",
  },

  {
    id: "film2",
    img1: "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/428614020_751991567028012_4120608894771198293_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oXcmtf08p04Ab4vm57F&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCRGvuLiL7WyXswmXc7kayhmFvm4KBoUkTXLcgvHIWSYQ&oe=661E5461",
    name: "Ligher and Princess",
    type: "hiện-đại",
  },

  {
    id: "film3",
    img1: "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/428610800_751992663694569_2932013795946587864_n.jpg?stp=dst-jpg_p960x960&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mc7G5MirkusAb6NZJnH&_nc_ht=scontent.fhan14-3.fna&oh=00_AfAqlMC1hKrecd-55thPkzprTXbjMmDFRIUCgkz5TvsjWg&oe=661E544F",
    name: "The Blood of Youth",
    type: "tiên-hiệp",
  },

  {
    id: "film4",
    img1: "https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/428611957_751990247028144_2820066405430481948_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gk4oj5qaiQsAb6Na9fr&_nc_ht=scontent.fhan14-5.fna&oh=00_AfD6Bg_lg04hHr42ZJ71WRyXfi1xdUthHt2Wn7MQiNW-jg&oe=661E7225",
    name: "In Blossom",
    type: "tiên-hiệp",
  },
];
localStorage.setItem("listAll", JSON.stringify(films));

window.onload = function () {
  load();
  renderHienDai();
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
