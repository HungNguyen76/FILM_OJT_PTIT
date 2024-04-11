const films = [
  {
    id: "film1",
    img1: "https://m.ykimg.com/0584000065E0849D2027901CB107BD2F?x-oss-process=image/resize,w_385/interlace,1/quality,Q_80",
    name: "Everyone Loves Me",
  },

  {
    id: "film2",
    img1: "https://m.ykimg.com/05840000636109B813EBC6095DF70CE8?x-oss-process=image/resize,w_385/interlace,1/quality,Q_80",
    name: "Ligher and Princess",
  },

  {
    id: "film3",
    img1: "https://m.ykimg.com/0584000063A7FAF813EB6609A0ED1448?x-oss-process=image/resize,w_385/interlace,1/quality,Q_80",
    name: "The Blood of Youth",
  },

  {
    id: "film4",
    img1: "https://m.ykimg.com/0584000065E6CFFA7B50C0200AA56F6D?x-oss-process=image/resize,w_385/interlace,1/quality,Q_80",
    name: "In Blossom",
  },
];

window.onload = function () {
  load();
};

function load() {
  var out = "";
  for (let i = 0; i < films.length; i++) {
    out += `<div class="col-md-3 mb-4 d-flex justify-content-center">
  <div class="card rounded-lg" style="width: 18rem;">
    <img src="${films[i].img1}" class="card-img-top" alt="Product Image" style="height: 300px;">
    <div class="card-body">
      <h5 class="card-title">${films[i].name}</h5>
      <hr>
    </div>
  </div>
</div>
`;
  }
  document.getElementById("load").innerHTML = out;
}
