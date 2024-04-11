var isLoggedIn = true;

function redirect(url) {
    window.location.href = url;
}
function showUserInfo() {
    if(isLoggedIn) {
        var userInfo = JSON.parse(localStorage.getItem(''));
        document.getElementById("username").innerText = userInfo.;
        document.getElementById("email").innerText = userInfo.;
        document.getElementById("passwork").innerText = userInfo.;
    }
    else {
        redirect();
    }
}