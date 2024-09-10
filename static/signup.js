//je récupère mes indication pour que je puisse les changer de couleur plus tard
var mdpInput = document.querySelector("#password");
var majChar = document.querySelector("#majChar");
var minusChar = document.querySelector("#minusChar");
var number = document.querySelector("#number");
var minChar = document.querySelector("#minChar");
var speChar = document.querySelector("#speChar");

//je récupère mes petites icones pour pouvoir les changer quand elles sont check
var checkmajChar = document.querySelector("#checkmajChar");
var checkminusChar = document.querySelector("#checkminusChar");
var checknumber = document.querySelector("#checknumber");
var checkminChar = document.querySelector("#checkminChar");
var checkspeChar = document.querySelector("#checkspeChar");

//je récupère ma barre de progression ainsi que son label pour pouvoir les modifier en fonction de la force du mot de passe entré
var progressBar = document.querySelector("#strength");
var labelProgress = document.querySelector("#fortOuPas");

// a chaque fois que je vais taper sur mon clavier, tout ce qu'il y a dans la fonction va se faire
mdpInput.onkeyup = () => {
  var mdp = mdpInput.value;
  //check s'il y a une lettre en maj
  var oneMajChar = /[A-Z]/.test(mdp);
  if (oneMajChar) {
    majChar.style = "color: green";
    checkmajChar.setAttribute("class", "fa fa-check-square");
  } else {
    majChar.style = "color: #264143";
    checkmajChar.setAttribute("class", "fa fa-square");
  }

  //check s'il y a un nombre
  var oneNumber = /[0-9]/.test(mdp);
  if (oneNumber) {
    number.style = "color: green";
    checknumber.setAttribute("class", "fa fa-check-square");
  } else {
    number.style = "color: #264143";
    checknumber.setAttribute("class", "fa fa-square");
  }

  //check s'il fait au mois 8 caractères
  if (mdp.length >= 8) {
    minChar.style = "color: green";
    checkminChar.setAttribute("class", "fa fa-check-square");
  } else {
    minChar.style = "color: #264143";
    checkminChar.setAttribute("class", "fa fa-square");
  }

  //check s'il y a une lettre en minuscule
  var oneMinusChar = /[a-z]/.test(mdp);
  if (oneMinusChar) {
    minusChar.style = "color: green";
    checkminusChar.setAttribute("class", "fa fa-check-square");
  } else {
    minusChar.style = "color: #264143";
    checkminusChar.setAttribute("class", "fa fa-square");
  }

  // check s'il y a un caractère spécial
  var oneSpeChar = /[!@#$%^&*(),.?":{}|<>_\-+=]/.test(mdp);
  if (oneSpeChar) {
    speChar.style = "color:green";
    checkspeChar.setAttribute("class", "fa fa-check-square");
  } else {
    speChar.style = "color:#264143";
    checkspeChar.setAttribute("class", "fa fa-square");
  }

  // alimente la barre de progression pour indiquer à quel point le mot de passe est fort
  var strength =
    (mdp.match(/[A-Z]/g) || "").length * 5 +
    (mdp.match(/[0-9]/g) || "").length * 5 +
    (mdp.match(/[a-z]/g) || "").length * 2 +
    (mdp.match(/[!@#$%^&*(),.?":{}|<>_\-+=]/g) || "").length * 15;
  if (strength <= 25) {
    labelProgress.textContent = "Faible";
  }
  if (strength > 25 && strength < 50) {
    labelProgress.textContent = "Moyen";
  }
  if (strength >= 50 && strength < 75) {
    labelProgress.textContent = "Fort";
  }
  if (strength >= 75) {
    labelProgress.textContent = "Très fort";
  }

  //je change la progression de ma barre de progression en fontion de la force de mon mot de passe
  progressBar.setAttribute("value", strength);
};

//////////////////////////////////////////////////////////////////////
var header = document.body.querySelector(".header");
var footer = document.body.querySelector("#footer");
var input = header.querySelector(".mode");
if (localStorage.getItem("mode") == "darkmode") {
  input.checked = true;
  header.classList = "dark header";
  footer.classList = "darkFooter";
} else {
  input.checked = false;
  header.classList = "radio-inputs header";
  footer.classList = "lightFooter";
}
/////////////////////////////////////////////////////////////////////
