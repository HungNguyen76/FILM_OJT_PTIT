function renderFavoriteFilms() {
  var favoriteFilms = JSON.parse(localStorage.getItem("favoriteFilms")) || [];
  var out = "";
  console.log(favoriteFilms);
  for (let i = 0; i < favoriteFilms.length; i++) {
    out += `
      <div class="favorite-film col-md-3 mb-4 d-flex justify-content-center">

        <div class="card rounded-lg" style="width: 15rem;">
          <img src="${favoriteFilms[i].img1}" class="card-img-top" alt="Product Image" style="height: 270px;">
          <div class="card-body">
            <h5 class="card-title">${favoriteFilms[i].name}</h5>
          </div>
        </div>
      </div>`;
  }
  document.getElementById(
    "favoriteFilms"
  ).innerHTML = `<h1>Film yêu thích của bạn</h1> <div class="row">${out}</div>`;
}
