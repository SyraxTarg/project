async function fetchFiles(limit, offset) {
  const response = await fetch(
    `http://127.0.0.1:5000/api/v1/files/${limit}/${offset}`
  );
  const data = await response.json();
  return data;
}

async function fileCount() {
  const response = await fetch(`http://127.0.0.1:5000/api/v1/fileCount`);
  const data = await response.json();
  return data;
}

async function displayFiles(limit, offset) {
  const div = document.body.querySelector(".myFiles");
  div.innerHTML = "";
  const files = await fetchFiles(limit, offset);
  files.forEach((file) => {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "imagesFile");
    var image = new Image();
    image.src = "data:image/jpg;base64," + file["image"];
    newDiv.innerHTML += `<p>Entry n°${file["id"]}</p>`;
    newDiv.appendChild(image);
    newDiv.innerHTML += `
    <p>${file["description"]}</p>
    `;
    div.appendChild(newDiv);
  });
}

async function filePage() {
  const pag = document.body.querySelector(".filePagination");
  const count = await fileCount();
  var nbButtons = Math.floor(count["count"] / 5);
  const reste = count["count"] % 5;
  console.log(reste);
  if (reste > 0) {
    nbButtons += 1;
  }
  const arrowRIght = document.createElement("p");
  arrowRIght.innerText = `<<`;
  arrowRIght.setAttribute("class", "paginationButton paginationArrow");
  pag.appendChild(arrowRIght);
  for (let i = 1; i < nbButtons + 1; i++) {
    const button = document.createElement("p");
    button.innerText = `${i}`;
    button.setAttribute("class", "paginationButton pagBtn");
    pag.appendChild(button);
  }
  const arrowLeft = document.createElement("p");
  arrowLeft.innerText = `>>`;
  arrowLeft.setAttribute("class", "paginationButton paginationArrow");
  pag.appendChild(arrowLeft);

  const pagesButton = document.querySelectorAll(".paginationButton");
  pagesButton.forEach((btn) => {
    if (btn.innerText.includes("<<") || btn.innerText.includes(">>")) {
      if (btn.innerText.includes("<<")) {
        btn.addEventListener("click", function (event) {
          const pageSelected =
            document.querySelector("#pageIndex").innerText[
              document.querySelector("#pageIndex").innerText.length - 1
            ];
          console.log(pageSelected);
          if (pageSelected > 1) {
            const newOffset = +pageSelected - 1;
            titre.innerText = `Page ${newOffset}`;
            const offset = (newOffset - 1) * 5;
            pagesButton.forEach((btn) => {
              if (btn.innerText.includes(newOffset)) {
                btn.classList.add("selectedBtn");
              } else {
                btn.classList.remove("selectedBtn");
              }
            });

            displayFiles(5, offset);
          }
        });
      } else {
        btn.addEventListener("click", function (event) {
          const pageSelected =
            document.querySelector("#pageIndex").innerText[
              document.querySelector("#pageIndex").innerText.length - 1
            ];
          console.log(pageSelected);
          if (pageSelected < nbButtons) {
            const newOffset = +pageSelected + 1;
            titre.innerText = `Page ${newOffset}`;
            const offset = (newOffset - 1) * 5;
            pagesButton.forEach((btn) => {
              if (btn.innerText.includes(newOffset)) {
                btn.classList.add("selectedBtn");
              } else {
                btn.classList.remove("selectedBtn");
              }
            });

            displayFiles(5, offset);
          }
        });
      }
    } else {
      btn.addEventListener("click", function (event) {
        const titre = document.querySelector("#pageIndex");
        titre.innerText = `Page ${btn.innerText}`;
        const offset = (+btn.innerText - 1) * 5;
        pagesButton.forEach((btn) => {
          btn.classList.remove("selectedBtn");
        });
        btn.classList.add("selectedBtn");
        displayFiles(5, offset);
      });
    }
  });
}
const titre = document.querySelector("#pageIndex");
titre.innerText = `Page 1`;
displayFiles(5, 0);
filePage();
