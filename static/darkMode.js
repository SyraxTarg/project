var header = document.body.querySelector(".header");
var footer = document.body.querySelector("#footer");
var input = header.querySelector(".mode");
var dbLogo = document.body.querySelector(".logo");
var temps = document.body.querySelector(".temps");
var bg = document.querySelector(".fileBody");
var bg2 = document.querySelector(".addFileBody");
var bg3 = document.querySelector(".projectsBody");
if (localStorage.getItem("mode") == "darkmode") {
  input.checked = true;
  if (header) {
    header.classList = "dark header";
  }

  if (footer) {
    footer.classList = "darkFooter";
  }

  if (dbLogo) {
    dbLogo.classList = "darkDbLogo logo";
  }

  if (temps) {
    temps.classList = "clockdate-wrapper-dark temps";
  }

  if (bg) {
    bg.classList = "fileBodyDark fileBody";
  }

  if (bg2) {
    bg2.classList = "addFileBodyDark addFileBody";
  }

  if (bg3) {
    bg3.classList = "projectsBodyDark projectsBody";
  }
} else {
  input.checked = false;
  if (header) {
    header.classList = "radio-inputs header";
  }

  if (footer) {
    footer.classList = "lightFooter";
  }

  if (dbLogo) {
    dbLogo.classList = "dbLogo logo";
  }

  if (temps) {
    temps.classList = "clockdate-wrapper-light temps";
  }

  if (bg) {
    bg.classList = "fileBodyLight fileBody";
  }
  if (bg2) {
    bg2.classList = "addFileBodyLight addFileBody";
  }
  if (bg3) {
    bg3.classList = "projectsBodyLight projectsBody";
  }
}
