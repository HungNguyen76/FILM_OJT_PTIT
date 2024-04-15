function renderFavoriteFilms() {
  var favoriteFilms = JSON.parse(localStorage.getItem("favoriteFilms")) || [];
  var out = "";
  console.log(favoriteFilms);
  for (let i = 0; i < favoriteFilms.length; i++) {
    out += `
<<<<<<< HEAD
      <div class="favorite-film col-md-3 mb-4 d-flex justify-content-center ">
=======
    <h1>Film yêu thích của bạn</h1>
      <div class="favorite-film col-md-3 mb-4 d-flex justify-content-center">
>>>>>>> 46c688e357b7003c0ebcacbb1b002f8ca95c235f
        <div class="card rounded-lg" style="width: 18rem;">
          <img src="${favoriteFilms[i].img1}" class="card-img-top" alt="Product Image" style="height: 400px;">
          <div class="card-body">
            <h5 class="card-title">${favoriteFilms[i].name}</h5>
          </div>
        </div>
      </div>`;
  }
  document.getElementById(
    "favoriteFilms"
  ).innerHTML = `<div class="row">${out}</div>`;
}
