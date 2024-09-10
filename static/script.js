//cette fonction alimente mon horloge sur la page home de base il display l'heure et la date en anglais mais j'ai fait les modifs pour l'avoir en français

function startTime() {
  //je récupère la date d'aujourd'hui, l'heure actuelle, les minutes actuelles et les secondes actuelles

  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();

  //ici, on va déterminer s'il s'agit d'une heure de matin ou d'après-midi pour rappel cette fonction display tout en anglais de base

  ap = hr < 12 ? "<span>AM</span>" : "<span>PM</span>";
  hr = hr == 0 ? 12 : hr;
  hr = hr > 12 ? hr - 12 : hr;
  hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);

  //maintenant que je sais s'il s'ajit d'une heure de matin ou d'après midi, je peux modifier l'heure en fonction pour la mettre en heure française

  if (ap == "<span>PM</span>") {
    hr = +hr;
    hr += 12;
  }

  //ici c'est comment je vais montrer lheure sur lhorloge donc hh:mm:ss

  time = hr + ":" + min + ":" + sec;

  //ici je récupèr ele container de mon horloge

  document.getElementById("clock").innerHTML = time;

  //c'est ici que je vais définir mes mois et jours en effet on attrape le mois et le jour actuels mais ça nous renvoie un chiffre donc pour avoir une date complète il faut aller chercher nous même le jour et le fois

  var months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  var days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  var curWeekDay = days[today.getDay()];
  var curDay = today.getDate();
  var curMonth = months[today.getMonth()];
  var curYear = today.getFullYear();

  // après avoir eu le jour, date, mois et année, je peux choisir la façon dont je vais les afficher

  var date = curWeekDay + " " + curDay + " " + curMonth + " " + curYear;
  document.getElementById("date").innerHTML = date;

  var time = setTimeout(function () {
    startTime();
  }, 500);
}
// c'est ce qui va faire que l'horloge s'actualise tout le temps

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// je veux attraper l'utilisateur connecté, s'il y en a un alors on retourne ses attributs mais s'il n'y a personne de connecté alors on renvoie tout autre chose

async function fetchUser() {
  try {
    console.log(document.body.querySelector("#scriptHome"));
    const currentUser = document.body
      .querySelector("#scriptHome")
      .getAttribute("user")
      .replace(/'/g, '"');
    console.log(currentUser);
    const user = JSON.parse(currentUser);

    if (user && user.no === "no") {
      return False;
    }
    return user;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

//je vais attraper mes things. s'il y a un utilisateur connecté alors on va attraper seulement les things liées à l'id de l'utilisateur connecté mais s'il n'y a personne de connecté alors on va tout attraper

async function fetchThings() {
  try {
    const response = await fetch(`http://127.0.0.1:5000/api/v1/things`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

//c'est la qu'on va créer notre tableau en fonction du nombre de things on va pouvoir éditer et supprimer les différents things si ce sont les notres

async function displayThings() {
  const data = await fetchThings();
  const users = await fetchUser();
  var list = document.body.querySelector("#things-list1");
  var div = document.createElement("table");
  if (users && users.droits == 1) {
    div.innerHTML =
      "<table><tr><th colspan = '3'>Things</th></tr><tr><th scope='col'>Id</th><th scope='col'>Things</th><th scope='col'>Action</th></tr>";

    data.forEach((thing) => {
      div.innerHTML += `
                      <tr><th scope='row'>${thing.id}</th>
                      <th scope='row'><input type='text' value=${thing.name} class="inputThingName${thing.id}"></th>
                      <th scope='row'><button class="delete-button" onclick="deleteThing(${thing.id})">
    <svg class="delete-svgIcon" viewBox="0 0 448 512">
                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                    </svg>
  </button><button class="edit-button" onclick="editThing(${thing.id})">
    <svg class="edit-svgIcon" viewBox="0 0 512 512">
                      <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                    </svg>
  </button></th></tr></table>
                  `;
    });
  } else {
    div.innerHTML =
      "<table><tr><th colspan = '2'>Things</th></tr><tr><th scope='col'>Id</th><th scope='col'>Things</th></tr>";
    data.forEach((thing) => {
      div.innerHTML += `
                      <tr><th scope='row'>${thing.id}</th>
                      <th scope='row'>${thing.name}</th>
                      </tr></table>
                  `;
    });
  }
  list.appendChild(div);
}

//c'est cette fonction que le bouton delete du tableau va aller chercher on va tout simplemet utiliser la route delete thing prévue à cet effet

async function deleteThing(thingId) {
  try {
    await fetch(`/api/v1/things/${thingId}`, {
      method: "DELETE",
    });

    window.location.reload();
  } catch (error) {
    console.error(error);
    alert("failed to delete");
  }
}

//c'est cette fontion que le bouton edit du tableau va aller chercher on va utiliser la route patch pathch thing prévue à cet effet

async function editThing(thingId) {
  try {
    const inputValue = document.body.querySelector(
      `.inputThingName${thingId}`
    ).value;
    const response = await fetch(`/api/v1/things/${thingId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputValue,
      }),
    });
    const responseData = await response.json();
    console.log("Response Data:", responseData);
    if (!response.ok) {
      throw new Error(`Failed to edit thing: ${responseData.error}`);
    }
    window.location.reload();
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to edit");
  }
}

// c'est cette fonction que le bouton edit du tableau user va aller chercher on utilise la route patch user prévue à cet effet
async function editUser(userId) {
  try {
    const inputValue = document.body.querySelector(
      `.inputUserName${userId}`
    ).value;
    const inputValue2 = document.body.querySelector(
      `.inputUserEmail${userId}`
    ).value;
    const response = await fetch(`/api/v1/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputValue,
        email: inputValue2,
      }),
    });
    const responseData = await response.json();
    console.log("Response Data:", responseData);
    if (!response.ok) {
      throw new Error(`Failed to edit user: ${responseData.error}`);
    }
    window.location.reload();
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to edit");
  }
}

//c'est cette fonction que va aller chercher le bouton delete du tableau user va aller chercher on va utiliser la route delete user prévue à cet effet

async function deleteUser(userId) {
  try {
    await fetch(`/api/v1/users/${userId}`, {
      method: "DELETE",
    });
    window.location.reload();
  } catch (error) {
    console.error(error);
    alert("failed to delete");
  }
}

//c'est ici que l'on va fetch nos users on utilise la route get users prévue pour ça

async function fetchUsers() {
  try {
    const response = await fetch(`http://127.0.0.1:5000/api/v1/users`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// c'est ici que l'on va afficher le tableau de users en fonction de leur nombre si l'utilisateur est un admin alors il pourra utiliseer les action d'éditage et de suppression d'utilisateurs

async function displayUsers() {
  const data = await fetchUsers();
  const user = await fetchUser();
  // console.log(user);
  if (data) {
    var list = document.body.querySelector("#things-list2");
    var div = document.createElement("table");
    if (user && user.droits == 1) {
      div.innerHTML +=
        "<table><tr><th colspan = '4'>Users</th></tr><tr><th scope='col'>Id</th><th scope='col'>Users</th><th scope='col'>Emails</th><th scope='col'>Action</th></tr>";
      data.forEach((element) => {
        name = JSON.stringify(element["name"]).replace(/['"]+/g, "");
        email = JSON.stringify(element["username"]).replace(/['"]+/g, "");
        div.innerHTML += `
                              <tr><th scope='row'>${element.id}</th>
                              <th scope='row'><input type="text" value=${name} class="inputUserName${element.id}"/></th>
                              <th scope='row'><input type="email" value=${email} class="inputUserEmail${element.id}"/></th>
                              <th scope='row'><button class="delete-button" onclick="deleteUser(${element.id})">
            <svg class="delete-svgIcon" viewBox="0 0 448 512">
                              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                            </svg>
          </button><button class="edit-button" onclick="editUser(${element.id})">
            <svg class="edit-svgIcon" viewBox="0 0 512 512">
                              <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                            </svg>
          </button></th></tr></table>
                          `;
      });
    } else {
      div.innerHTML +=
        "<table><tr><th colspan = '3'>Users</th></tr><tr><th scope='col'>Id</th><th scope='col'>Users</th><th scope='col'>Emails</th></tr>";
      data.forEach((element) => {
        name = JSON.stringify(element["name"]).replace(/['"]+/g, "");
        email = JSON.stringify(element["username"]).replace(/['"]+/g, "");
        div.innerHTML += `
                        <tr><th scope='row'>${element.id}</th>
                        <th scope='row'>${name}</th>
                        <th scope='row'>${email}</th>
                        </tr></table>
                    `;
      });
    }

    list.appendChild(div);
  }
}



//ici j'appelle mes fonctions pour pouvoir afficher mes tableaux
displayThings();
displayUsers();
