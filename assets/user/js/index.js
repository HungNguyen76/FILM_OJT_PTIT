window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var scrolled = window.scrollY > 550;
  if (scrolled) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});
var icon = document.querySelector(".icon");
var dropdownContent = document.querySelector(".dropdown-content");

icon.onclick = function () {
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
};

window.onclick = function (event) {
  if (!event.target.matches(".icon")) {
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    }
  }
};
const films = [
  {
    id: "film1",
    img1: "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/437876857_1007098554112821_2529601479420935111_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eR8xzzfrD3cAb7-7X50&_nc_ht=scontent.fsgn2-10.fna&oh=00_AfB-X703l_JV5Kof7eDb3fRANG4xISlh0u4YFCscOHWaCA&oe=6622F660",
    name: "Bùa Hình Nhân",
    nam: "2023",
    daodien: " Phontharis Chotkijsadarsopon",
    time: "101 phút",
    noidung:
      "Được lấy cảm hứng từ loại bùa hình nhân hộ mệnh nổi tiếng ở Thái Lan, phim theo chân Tham trong hành trình đến một hòn đảo hẻo lánh để tìm người anh trai của mình đang tu hành ở đó. Tham phát hiện ra anh trai đã bị sát hại sau khi bị buộc tội giết người và trộm cắp. Quyết tâm ở lại hòn đảo để điều tra cũng như minh oan cho anh trai nhưng Tham lại vô tình khám phá ra nhiều cái chết bí ẩn khác tại ngôi làng bên cạnh.",
    dienvien:
      "Phuwin Tangsakyuen | Up Poompat Iam-samang | Nick Kunatip Pinpradab,",
    type: "Kinh Dị",
    rate: "normal",
    nation: "Thái",
    trailerUrl: "https://www.youtube.com/embed/HXCB75dcxAE?si=UofY3eTXPDf29xR4",
    video: " https://www.youtube.com/embed/-fOpQGLxCTE?si=WI30iEBepaa3Rw4X",
  },
  {
    id: "film2",
    img1: "https://cdn.tuoitre.vn/thumb_w/480/471584752817336320/2023/6/30/ofelia2-1630x2048-1688082839824462511532.jpg",
    name: "Ma Sơ Trục Quỷ",
    type: "Kinh Dị",
    rate: "best",
    nation: "Tây Ban Nha",
    daodien: "  Adrian Garcia Bogliano",
    time: "  102 phút",
    noidung:
      "Ofelia - một nữ tu trẻ vừa đặt chân đến thị trấn San Ramon đã bị ép phải thực hiện buổi lễ trừ tà cho một phụ nữ đang mang thai. Tưởng chừng buổi trục quỷ đã hoàn tất, Ofelia bàng hoàng nhận ra hiện thân quỷ dữ chưa từng biến mất.",
    dienvien: "María Evoli | Ramón Medína | Pilar Santacruz",
    nam: "2023",
    trailerUrl: "https://www.youtube.com/embed/HXCB75dcxAE?si=UofY3eTXPDf29xR4",
    video: " https://www.youtube.com/embed/5PvzGDU8WjM?si=QQby4sL4i-LRRABD",
  },

  {
    id: "film3",
    img1: "https://cdn.moveek.com/storage/media/cache/tall/64911e47debc6625573774.jpeg",
    name: "Tà Chú Cấm",
    type: "Kinh Dị",
    rate: "best",
    nation: "Thái",
    daodien: "Sophon Sakdaphisit",
    time: "124 phút",
    noidung:
      "thêm Tà Chú Cấm – Home for Rent (2023) khám phá nỗi ám ảnh từ sự kiện thật tại Thái Lan, kể về gia đình Ning và Kwin khi họ chuyển đến căn hộ chung cư giá rẻ. Hành vi kỳ lạ của Kwin và hình xăm bí ẩn dẫn đến nguy hiểm đối với con gái Ing. Bí mật đen tối trong ngôi nhà thuê đang chờ đợi.",
    dienvien: "Nittha Jirayungyurn | Sukollawat Kanaros | Penpak Sirikul",
    nam: "2023",
    trailerUrl: "https://www.youtube.com/embed/HXCB75dcxAE?si=UofY3eTXPDf29xR4",
    video: " https://www.youtube.com/embed/ZW1YuceEQDE?si=1zpHpA2xNxbxQznv",
  },
  {
    id: "film4",
    img1: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg",
    name: "The Conjuring (2013)",
    type: "Kinh Dị",
    rate: "best",
    nation: "USA",
    daodien: "James Wan",
    time: "112 phút",
    noidung:
      "Ám Ảnh Kinh Hoàng (tên gốc tiếng Anh: The Conjuring) là một bộ phim kinh dị siêu nhiên năm 2013 của Mỹ, được đạo diễn bởi James Wan từ một kịch bản của Chad Hayes và Carey Hayes. Bộ phim dựa trên vụ án có thật của Ed và Lorraine Warren, hai nhà điều tra hiện tượng siêu nhiên nổi tiếng.Phim lấy bối cảnh năm 1971, kể về vụ việc gia đình Perron bị một thế lực siêu nhiên quấy rối tại trang trại của họ ở Harrisville, Rhode Island. Ed và Lorraine Warren được mời đến để điều tra và giúp đỡ gia đình Perron.",
    dienvien: "Patrick WilsonVera | FarmigaRon Livingston",
    nam: "2013",
    trailerUrl: "https://www.youtube.com/embed/HXCB75dcxAE?si=UofY3eTXPDf29xR4",
    video: " https://www.youtube.com/embed/d_oU87vizWg?si=X3J-E48Wottqrh-W",
  },
  {
    id: "film5",
    img1: "https://m.media-amazon.com/images/M/MV5BZjU5OWVlN2EtODNlYy00MjhhLWI0MDUtMTA3MmQ5MGMwYTZmXkEyXkFqcGdeQXVyNjE5MTM4MzY@._V1_.jpg",
    name: "The Conjuring 2 - Experience Enfield (2016)",
    type: "Kinh Dị",
    rate: "normal",
    nation: "USA",
    daodien: "James Wana",
    time: "134 phút",
    noidung:
      "Ám Ảnh Kinh Hoàng 2 (tên gốc tiếng Anh: The Conjuring 2) là một bộ phim kinh dị siêu nhiên năm 2016 của Mỹ, được đạo diễn bởi James Wan từ một kịch bản của Carey Hayes, Chad Hayes, Wan và David Leslie Johnson. Đây là phần tiếp theo của phim năm 2013, The Conjuring, với Patrick Wilson và Vera Farmiga tiếp tục thủ vai hai thám tử săn ma Ed và Lorraine Warren.",
    dienvien: " Patrick Wilson | Vera Farmiga | Ruairí O'Connor",
    nam: "2016",
    trailerUrl: "https://www.youtube.com/embed/HXCB75dcxAE?si=UofY3eTXPDf29xR4",
    video: " https://www.youtube.com/embed/rwIOCoDtHyI?si=5o1qOQfpPxYvgiGL",
  },
  {
    id: "film6",
    img1: "https://ss-images.saostar.vn/wp700/2019/10/18/6268864/the-conjuring-3.jpg",
    name: "The Conjuring 3: The Devil Made Me Do It (2021)",
    type: "Kinh Dị",
    rate: "normal",
    nation: "USA",
    daodien: "Michael Chaves",
    time: "134 phút",
    noidung:
      "The Conjuring: The Devil Made Me Do It (Ám Ảnh Kinh Hoàng: : Ma Xui Quỷ Khiến) giới thiệu một trong những vụ án kịch tính và giật gân nhất trên hành trình của cả Ed và Lorraine, đấu tranh cứu lấy linh hồn của một cậu bé nhưng sau đó mọi chuyện dường như đi quá xa và vượt ngoài tầm kiểm soát... Đây là cũng là vụ án đầu tiên trong lịch sử nước Mỹ có một nghi phạm giết người triệu hồi được ma quỷ để bảo vệ chính mình.",
    dienvien: "Patrick Wilson | Vera Farmiga | Ruairí O'Connor",
    nam: "2021",
    trailerUrl: "https://www.youtube.com/embed/HXCB75dcxAE?si=UofY3eTXPDf29xR4",
    video: " https://www.youtube.com/embed/V5GS5ANG96M?si=CyP63OU3yRq6ANQ1",
  },

  {
    id: "film7",
    img1: "https://upload.wikimedia.org/wikipedia/vi/thumb/b/b7/5_centimet_tr%C3%AAn_gi%C3%A2y.jpg/275px-5_centimet_tr%C3%AAn_gi%C3%A2y.jpg",
    name: "5 Centimet trên giây",
    type: "Anime",
    rate: "normal",
    nation: "Nhật Bản",
    daodien: "Shinkai Makoto",
    time: "62 phút",
    noidung:
      "Đây là một câu chuyện tình buồn diễn ra tại Nhật Bản, với xuất phát điểm là từ những năm 90 khi Takaki Tono mới 13 tuổi cho tới hiện tại khi anh đã đi làm. Film gồm 3 chương nhỏ gộp lại dài 62 phút: 1. Oukashou (The Chosen Cherry Blossoms), 2. Cosmonaut và 3. Byousoku 5 Centimeter (5 Centimeters per Second). Chương một mở đầu câu chuyện bằng một lời hứa trẻ con, đã dẫn dắt cả người xem lần lượt đi qua 3 quãng thời gian quan trọng trong cuộc đời Takaki Tono và đều liên quan tới tình yêu của anh dành cho một người con gái.",
    dienvien: " Mizuhashi Kenji | Kondō Yoshimi ",
    nam: "2007",
    trailerUrl: "https://www.youtube.com/embed/HXCB75dcxAE?si=UofY3eTXPDf29xR4",
    video: " https://www.youtube.com/embed/uVmP52g30Wc?si=Em29ekJMhzPG0fFG",
  },
  {
    id: "film8",
    img1: "https://kenh14cdn.com/thumb_w/650/2017/anh-9-1484260065293.jpg",
    name: "Your name",
    type: "Anime",
    rate: "normal",
    nation: "Nhật Bản",
    daodien: "Shinkai Makoto",
    time: "106 phút",
    noidung:
      "Mitsuha là một cô bé học sinh cấp 3 sống tại một vùng nông thôn nằm rúc sâu trong núi. Cha cô là thị trưởng và rất ít khi ở nhà, bản thân cô sống với đứa em gái đang học tiểu học và bà nội. Mitsuha là một cô bé trung thực, nhưng cô không hề thích truyền thống thờ đạo Shinto của gia đình mình, cũng như việc bố cô đang tham gia một chiến dịch tranh cử. Cô than rằng mình sống ở một thị trấn nông thôn chật hẹp, ao ước phong cách sống diệu kỳ của Tokyo. Taki là một cậu học sinh cấp 3 sống tại trung tâm Tokyo. Cậu dành thời gian với bạn bè, làm bán thời gian tại một nhà hàng Ý, và có hứng thú với kiến trúc với mỹ thuật. Vào một ngày, Mitsuha nằm mơ thấy một cậu trai trẻ. Taki cũng nằm mơ thấy một người con gái sống tại một thị trấn hẻo lánh giữa những dãy núi mà cậu chưa đặt chân tới. Bí mật về những trải nhiệm cá nhân trong giấc mơ của họ là gì?",
    dienvien: "	Kamiki Ryunosuke | Kamishiraishi Mone",
    nam: "2016",
    trailerUrl: "https://www.youtube.com/embed/HXCB75dcxAE?si=UofY3eTXPDf29xR4",
    video: " https://www.youtube.com/embed/JV0dEgbX5yk?si=nx-ScUCurq1cpU9H",
  },
  {
    id: "film9",
    img1: "https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
    name: "Naruto Shippuden",

    type: "Anime",
    rate: "normal",
    nation: "Nhật Bản",
    daodien: "Kishimoto Masashi",
    time: "500 tập",
    noidung:
      "Naruto: Shippuden là một bộ anime truyền hình dài tập được chuyển thể từ Phần II của loạt manga của Kishimoto Masashi với tổng cộng 500 tập phim. Nội dung phim lấy bối cảnh hai năm rưỡi sau Phần I trong vũ trụ Naruto, xoay quanh cậu nhẫn giả thiếu niên Uzumaki Naruto và những đồng đội của cậu.",
    dienvien: "Takeuchi Junko | Nakamura Chie | Inoue Kazuhiko",
    nam: "2007",
    trailerUrl: "https://www.youtube.com/embed/HXCB75dcxAE?si=UofY3eTXPDf29xR4",
    video: " https://www.youtube.com/embed/-fOpQGLxCTE?si=WI30iEBepaa3Rw4X",
  },
  {
    id: "film10",
    img1: "https://m.media-amazon.com/images/M/MV5BNGY4MTg3NzgtMmFkZi00NTg5LWExMmEtMWI3YzI1ODdmMWQ1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
    name: "Jujutsu Kaisen",
    type: "Anime",
    rate: "best",
    nation: "Nhật Bản",
    daodien: "Gege Akutami",
    time: "24/24 tập",
    noidung:
      "Bộ phim kể về cuộc sống của Yuji Itadori, một học sinh trung học bình thường, người vô tình bước vào một thế giới của các sát thủ ma quỷ và jujutsu - một hình thức của phép thuật Nhật Bản. Sau khi sự kiện không may xảy ra, Yuji kế thừa một phần của một ma quỷ cực mạnh và phải gia nhập một tổ chức tên là Jujutsu Kaisen để tìm kiếm và tiêu diệt ma quỷ.",
    dienvien: "Junya Enoki | Yuuma Uchida | Asami Seto | Yuichi Nakamura",
    nam: "2020",
    trailerUrl: "https://www.youtube.com/embed/HXCB75dcxAE?si=UofY3eTXPDf29xR4",
    video: " https://www.youtube.com/embed/-fOpQGLxCTE?si=WI30iEBepaa3Rw4X",
  },
  {
    id: "film11",
    img1: "https://resize.cdn.otakumode.com/full/u/30e154b109b744939ce2ac9b3c31d524.jpg",
    name: "Haikyuu: To the top",
    type: "Anime",
    rate: "best",
    nation: "Nhật Bản",
    daodien: "Taku Kishimoto",
    time: "25/25 tập",
    noidung:
      "Miêu tả: Trong vòng loại giải bóng chuyền trung học phổ thông mùa xuân quận Miyagi, câu lạc bộ bóng chuyền trung học Karasuno đã giành chiến thắng sau một trận chiến khốc liệt, thực hiện được ước mơ tham gia trận thi đấu cấp quốc gia. Với mục tiêu là thi đấu quốc gia, các đội tuyển trung học Hyuga, Kageyama và Karasuno đón nhận một thử thách còn khó khăn hơn!",
    dienvien: "Ayumu Murase | Kaito Ishikawa | Satoshi Hino",
    nam: "2020",
    trailerUrl: "https://www.youtube.com/embed/HXCB75dcxAE?si=UofY3eTXPDf29xR4",
    video: " https://www.youtube.com/embed/-fOpQGLxCTE?si=WI30iEBepaa3Rw4X",
  },
  {
    id: "film12",
    img1: "https://upload.wikimedia.org/wikipedia/vi/7/70/Ironmanposter.JPG",
    name: "IRON MAN (2018)",
    type: "Hành Động",
    rate: "best",
    nation: "USA",
    daodien: "Jon Favreau",
    time: "126 phút",
    noidung:
      "Iron Man kể về Tony Stark, một doanh nhân thiên tài biến mình thành siêu anh hùng sau khi thoát khỏi sự bắt cóc, sử dụng công nghệ để chống lại sự lạm dụng vũ khí.",
    dienvien:
      "Robert Downey Jr. | Terrence Howard | Jeff Bridges | Leslie Bibb | Shaun Toub | Gwyneth Paltrow",
    nam: "2008",
    trailerUrl: "https://www.youtube.com/embed/HXCB75dcxAE?si=UofY3eTXPDf29xR4",
    video: " https://www.youtube.com/embed/-fOpQGLxCTE?si=WI30iEBepaa3Rw4X",
  },
  {
    id: "film13",
    img1: "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_.jpg",
    name: "The Incredible Hulk (2008)",
    type: "Hành Động",
    rate: "normal",
    nation: "USA",
    daodien: "Louis Leterrier",
    time: "112 phút",
    noidung:
      "The Incredible Hulk tập trung vào nhân vật Bruce Banner, một nhà khoa học bị biến đổi gen và biến thành người khổng lồ xanh mỗi khi cảm thấy căng thẳng hoặc tức giận. Anh ta phải chiến đấu với chính bản thân mình cũng như với một kẻ thù mới, Emil Blonsky, người cũng muốn sở hữu sức mạnh của Hulk.",
    dienvien:
      "	Edward Norton | Liv Tyler | Tim Roth | Tim Blake Nelson | Ty Burrell | William Hurt ",
    nam: "2008",
    trailerUrl: "https://www.youtube.com/embed/HXCB75dcxAE?si=UofY3eTXPDf29xR4",
    video: " https://www.youtube.com/embed/-fOpQGLxCTE?si=WI30iEBepaa3Rw4X",
  },
  {
    id: "film14",
    img1: "https://m.media-amazon.com/images/M/MV5BZGVkNDAyM2EtYzYxYy00ZWUxLTgwMjgtY2VmODE5OTk3N2M5XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg",
    name: "Iron Man 2 (2010)",
    type: "Hành Động",
    rate: "normal",
    nation: "USA",
    daodien: "Jon Favreau",
    time: "	125 phút",
    noidung:
      "Iron Man 2 là bộ phim siêu anh hùng của Marvel năm 2010, tiếp nối câu chuyện của Tony Stark trong hành trình chiến đấu với kẻ thù mới và vấn đề sức khỏe cá nhân.",
    dienvien:
      "Robert Downey Jr. | Gwyneth Paltrow | Don Cheadle | Scarlett Johansson | Sam Rockwell",
    nam: "2010",
    trailerUrl: "https://www.youtube.com/embed/HXCB75dcxAE?si=UofY3eTXPDf29xR4",
    video: " https://www.youtube.com/embed/-fOpQGLxCTE?si=WI30iEBepaa3Rw4X",
  },
  {
    id: "film81",
    img1: "https://pics.filmaffinity.com/Thor-223512549-large.jpg",
    name: "Thor (2011)",
    type: "Hành Động",
    rate: "normal",
    nation: "USA",
    daodien: "Kenneth Branagh",
    time: "114 phút",
    noidung:
      "Thor là bộ phim siêu anh hùng của Marvel năm 2011, mở đầu cho hành trình của Thor, hoàng tử của Asgard, khi anh bị đày xuống Trái Đất sau khi xảy ra một cuộc đấu tranh quyền lực tại quê nhà. Tại đây, Thor phải học cách sống như một con người và chứng minh bản lĩnh của mình để trở thành vị anh hùng thực sự.",
    dienvien:
      " Chris Hemsworth | Natalie Portman | Tom Hiddleston | Anthony Hopkins | Stellan Skarsgård",
    nam: "2011",
    trailerUrl: "https://www.youtube.com/embed/HXCB75dcxAE?si=UofY3eTXPDf29xR4",
    video: " https://www.youtube.com/embed/-fOpQGLxCTE?si=WI30iEBepaa3Rw4X",
  },
  {
    id: "film83",
    img1: "https://m.media-amazon.com/images/M/MV5BNzAxMjg0NjYtNjNlOS00NTdlLThkMGEtMjAwYjk3NmNkOGFhXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg",
    name: "Captain America: The First Avenger (2011)",
    type: "Hành Động",
    rate: "best",
    nation: "USA",
    daodien: "Joe Johnston",
    time: "124 phút",
    noidung:
      "(Captain America: The First Avenger) là bộ phim siêu anh hùng của Marvel năm 2011, kể về câu chuyện của Steve Rogers, một người lính nhỏ bé nhưng có tinh thần đấu tranh mạnh mẽ. Anh tham gia vào chương trình siêu chiến binh và trở thành Captain America sau khi được tiêm phế phẩm Super Soldier Serum. Trong vai trò của Captain America, Steve Rogers dẫn đầu một đội quân chiến đấu chống lại tổ chức tội phạm Hydra và Adolf Hitler trong Thế chiến II.",
    dienvien:
      " Chris Evans | Tommy Lee Jones | Hugo Weaving | Hayley Atwell | Sebastian Stan | Dominic Cooper",
    nam: "2011",
    trailerUrl: "https://www.youtube.com/embed/HXCB75dcxAE?si=UofY3eTXPDf29xR4",
    video: " https://www.youtube.com/embed/-fOpQGLxCTE?si=WI30iEBepaa3Rw4X",
  },
];

// localStorage.setItem("listAll", JSON.stringify(films));
//em ctrl S lại xong qua trang
window.onload = function () {
  load();
};
function load() {
  var out = "";
  let filmALL = JSON.parse(localStorage.getItem("listAll")) || [];
  for (let i = 0; i < filmALL.length; i++) {
    out += `
      <div class="film col-md-3 mb-4 d-flex justify-content-center" data-id="${filmALL[i].id}">
    <div class="card rounded-lg" style="width: 18rem;">
      <img src="${filmALL[i].img1}" class="card-img-top" alt="Product Image" style="height: 400px;">
      <div class="card-body">
        <h5 class="card-title">${filmALL[i].name}</h5>
      </div>
      <!-- Container chứa nút yêu thích và xem thông tin -->
      <div class="film-actions">
       <button class="btn btn-outline-primary favorite-btn" onclick="favoriteMovie(this)">Yêu thích</button>
       <button class="btn btn-outline-info info-btn" onclick="viewDetails(this)">Xem thông tin</button>
      </div>
    </div>
  </div>`;
  }
  document.getElementById("load").innerHTML = `<div class="row">${out}</div>`;
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
          
          <div class="film-actions">
            <button class="btn btn-outline-primary favorite-btn" onclick="favoriteMovie(this)">Yêu thích</button>

       <button class="btn btn-outline-info info-btn" onclick="viewDetails(this)">Xem thông tin</button>
          </div>
        </div>
      </div>`;
  }
  document.getElementById(
    containerId
  ).innerHTML = `<div class="row">${out}</div>`;
}

function locKinhDi() {
  let kinhDi = JSON.parse(localStorage.getItem("listAll"));
  const listKinhdi = [];
  for (let i = 0; i < kinhDi.length; i++) {
    if (kinhDi[i].type == "Kinh Dị") {
      listKinhdi.push(kinhDi[i]);
    }
  }
  localStorage.setItem("listKinhDi", JSON.stringify(listKinhdi));
}

function locAnime() {
  let anime = JSON.parse(localStorage.getItem("listAll"));
  const listAnime = [];
  for (let i = 0; i < anime.length; i++) {
    if (anime[i].type == "Anime") {
      listAnime.push(anime[i]);
    }
  }
  localStorage.setItem("listAnime", JSON.stringify(listAnime));
}
function locHanhDong() {
  let hanhDong = JSON.parse(localStorage.getItem("listAll"));
  const listHanhDong = [];
  for (let i = 0; i < hanhDong.length; i++) {
    if (hanhDong[i].type == "Hành Động") {
      listHanhDong.push(hanhDong[i]);
    }
  }
  localStorage.setItem("listHanhDong", JSON.stringify(listHanhDong));
}
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
function locTBN() {
  let tbn = JSON.parse(localStorage.getItem("listAll"));
  const listTBN = [];
  for (let i = 0; i < tbn.length; i++) {
    if (tbn[i].nation == "Tây Ban Nha") {
      listTBN.push(tbn[i]);
    }
  }
  localStorage.setItem("listTBN", JSON.stringify(listTBN));
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
function locBestViewKinhDi() {
  let bestViewKinhDi = JSON.parse(localStorage.getItem("listAll"));
  const listBestViewKinhDi = [];
  for (let i = 0; i < bestViewKinhDi.length; i++) {
    if (
      bestViewKinhDi[i].rate == "best" &&
      bestViewKinhDi[i].type == "Kinh Dị"
    ) {
      listBestViewKinhDi.push(bestViewKinhDi[i]);
    }
  }
  localStorage.setItem(
    "listBestViewKinhDi",
    JSON.stringify(listBestViewKinhDi)
  );
}
function locBestViewAnime() {
  let bestViewAnime = JSON.parse(localStorage.getItem("listAll"));
  const listBestViewAnime = [];
  for (let i = 0; i < bestViewAnime.length; i++) {
    if (bestViewAnime[i].rate == "best" && bestViewAnime[i].type == "Anime") {
      listBestViewAnime.push(bestViewAnime[i]);
    }
  }
  localStorage.setItem("listBestViewAnime", JSON.stringify(listBestViewAnime));
}
function locBestViewHanhDong() {
  let bestViewHanhDong = JSON.parse(localStorage.getItem("listAll"));
  const listBestViewHanhDong = [];
  for (let i = 0; i < bestViewHanhDong.length; i++) {
    if (
      bestViewHanhDong[i].rate == "best" &&
      bestViewHanhDong[i].type == "Hành Động"
    ) {
      listBestViewHanhDong.push(bestViewHanhDong[i]);
    }
  }
  localStorage.setItem(
    "listBestViewHanhDong",
    JSON.stringify(listBestViewHanhDong)
  );
}

function renderKinhDi() {
  locKinhDi();
  let listKinhDi = JSON.parse(localStorage.getItem("listKinhDi")) || []; // Lấy dữ liệu từ local storage
  loadFilms(listKinhDi, "loadH");
}

function renderAnime() {
  locAnime();
  let listAnime = JSON.parse(localStorage.getItem("listAnime")) || []; // Lấy dữ liệu từ local storage
  loadFilms(listAnime, "loadA");
}

function renderHanhDong() {
  locHanhDong();
  let listHanhDong = JSON.parse(localStorage.getItem("listHanhDong")) || []; // Lấy dữ liệu từ local storage
  loadFilms(listHanhDong, "loadH");
}

function renderBestViewKinhDi() {
  locBestViewKinhDi();
  let listBestViewKinhDi =
    JSON.parse(localStorage.getItem("listBestViewKinhDi")) || [];
  loadFilms(listBestViewKinhDi, "loadBK");
}

function renderBestViewAnime() {
  locBestViewAnime();
  let listBestViewAnime =
    JSON.parse(localStorage.getItem("listBestViewAnime")) || [];
  loadFilms(listBestViewAnime, "loadBA");
}
function renderBestViewHanhDong() {
  locBestViewHanhDong();
  let listBestViewHanhDong =
    JSON.parse(localStorage.getItem("listBestViewHanhDong")) || [];
  loadFilms(listBestViewHanhDong, "loadBACTION");
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
function renderTBN() {
  locTBN();
  let listTBN = JSON.parse(localStorage.getItem("listTBN")) || []; // Lấy dữ liệu từ local storage
  loadFilms(listTBN, "loadTBN");
}
function renderUSA() {
  locUSA();
  let listUSA = JSON.parse(localStorage.getItem("listUSA")) || []; // Lấy dữ liệu từ local storage
  loadFilms(listUSA, "loadUSA");
}

// Hàm xử lý tìm kiếm
function searchMovies() {
  var searchQuery = document.querySelector(".form-control").value.toLowerCase();

  var allMovies = JSON.parse(localStorage.getItem("listAll")) || [];

  var filteredMovies = allMovies.filter(function (movie) {
    return movie.name.toLowerCase().includes(searchQuery);
  });

  loadFilms(filteredMovies, "load");

  if (filteredMovies.length === 0) {
    document.getElementById("load").innerHTML = "<p>Không tìm thấy phim</p>";
  }
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  searchMovies();
});

function showAllMovies() {
  var allMovies = JSON.parse(localStorage.getItem("listAll")) || [];
  loadFilms(allMovies, "load");
}

document.getElementById("clearSearch").addEventListener("click", function () {
  document.querySelector(".form-control").value = "";
  showAllMovies();
});

function logout() {
  localStorage.removeItem("nameLogin");
  localStorage.removeItem("checkLogin");
  localStorage.removeItem("favoriteFilms");
}
// Sau khi người dùng đăng nhập thành công
localStorage.setItem("checkLogin", "true");

function checkLoggedIn() {
  const userEmail = localStorage.getItem("checkLogin");
  if (userEmail) {
    return true;
  } else {
    return false;
  }
}

function favoriteMovie(btn) {
  var isLoggedIn = checkLoggedIn();
  if (!isLoggedIn) {
    alert("Vui lòng đăng nhập để thêm phim vào danh sách yêu thích.");
    return;
  }

  var filmId = btn.closest(".film").getAttribute("data-id");

  var selectedFilm = films.find((film) => film.id === filmId);
  var favoriteFilms = JSON.parse(localStorage.getItem("favoriteFilms")) || [];
  var isFilmInFavorites = favoriteFilms.some((film) => film.id === filmId);
  if (!isFilmInFavorites) {
    favoriteFilms.push(selectedFilm);
    localStorage.setItem("favoriteFilms", JSON.stringify(favoriteFilms));
    alert("Đã thêm phim vào danh sách yêu thích.");
  } else {
    alert("Phim đã có trong danh sách yêu thích.");
  }
}
function viewDetails(btn) {
  const isLoggedIn = localStorage.getItem("checkLogin");
  if (!isLoggedIn) {
    var filmId = btn.closest(".film").getAttribute("data-id");
    localStorage.setItem("selectedFilmId", filmId);
    window.location.href = "/pages/pageLogin/thongtin.html";
  } else {
    var filmId = btn.closest(".film").getAttribute("data-id");
    localStorage.setItem("selectedFilmId", filmId);
    window.location.href = "/pages/pageOut/thongtin.html";
  }
}
