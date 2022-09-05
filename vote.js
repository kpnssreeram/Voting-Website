var Clicked = false;
document.body.addEventListener('click', party);
function party(clickedid) {
    document.getElementById(clickedid).style.cursor = 'default';
    if (Clicked === false) {
        var success = document.getElementById("success");
        success.innerHTML = "<h2>Your Vote to <b>" + clickedid + "</b> is successful</h2>";
        document.body.removeEventListener('click', party);
    }
    Clicked = true;
}