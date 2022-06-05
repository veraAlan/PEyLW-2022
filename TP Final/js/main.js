/* Toggle responsive on class nav-bar */
function myFunction() {
    var page = document.getElementById("top-bar");
    if (page.className === "nav-bar") {
        page.className += " responsive";
    } else {
        page.className = "nav-bar";
    }
}