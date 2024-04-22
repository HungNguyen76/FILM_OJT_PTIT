window.onload = function () {
  var filmId = localStorage.getItem("selectedFilmId");
  video(filmId);
};
function video(filmId) {
  renderRelatedFilms(filmId);
  var allFilms = JSON.parse(localStorage.getItem("listAll"));
  var video = allFilms.find((film) => film.id === filmId);

  var modal = document.getElementById("video");

  modal.innerHTML = "";

  modal.innerHTML += `
        <div class="name"> 
         <h5>${video.name} </h5>
        </div>
        <div class="video">
            <iframe
            width="800"
             height="400"
            src="${video.video}"
            title="YouTube video player"
             frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
             allowfullscreen
                ></iframe>
       </div>
        <div class="sever">
          <h5>Chọn sever</h5>
          <hr />
          <br />
        
          <div class="vietsub-buttons"> 
          <button class="vietsub-btn"><a href="#">Sever #1</a></button>
          <button class="vietsub-btn"><a href="#">Sever #2</a></button>
        </div>
        <br />
        <hr />
        
        <div>
          <h5>Tóm tắt: </h5>
          <span>${video.noidung}</span>
        </div>
        <br />
          <hr />
          <div class="share">
          <h5>Chia sẻ: </h5>


          <a href="" class="fa fa-facebook"></a>
           <a href="" class="fa fa-twitter"></a>
            <a href="" class="fa fa-github"></a>
             <a href="" class="fa fa-instagram"></a>
       
         
          
          </div>
        </div>
    `;
}
function renderRelatedFilms(filmId) {
  var allFilms = JSON.parse(localStorage.getItem("listAll"));
  var selectedFilm = allFilms.find((film) => film.id === filmId);
  var relatedFilms = allFilms.filter(
    (film) => film.type === selectedFilm.type && film.id !== filmId
  );

  var relatedFilmsContainer = document.getElementById("relatedFilms");
  relatedFilmsContainer.innerHTML = "<h3>Phim Có Liên Quan</h3>";

  var filmContainer = document.createElement("div");
  filmContainer.classList.add("relatedFilmsContainer");

  relatedFilms.forEach((film) => {
    filmContainer.innerHTML += `
      <div class="film col-md-3 mb-4 d-flex justify-content-center">

        <div class="card rounded-lg" >

        
         <img src="${film.img1}" class="card-img-top" alt="Product Image"  >

          <div class="card-body">
            <h5 class="card-title">${film.name}</h5>
          </div>
       

         
          
          <div class="film-actions">
            <button class="btn btn-outline-info info-btn" onclick="viewDetails('${film.id}')">Xem film </button>
          </div>
        </div>
      </div>
    `;
  });

  relatedFilmsContainer.appendChild(filmContainer);
}

function viewDetails(filmId) {
  video(filmId);
  renderRelatedFilms(filmId);
}
