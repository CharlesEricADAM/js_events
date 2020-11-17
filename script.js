// Fonctionnalité 1

function onClickFooter() {
  const foo = document.querySelector("footer");
  let count = 0;
  foo.addEventListener("click", () => {
    count++
    console.log(`clic numéro ${count}`);
  })
}

onClickFooter();

// Fonctionnalité 2

function toggleCollapse() {
  const nav = document.querySelector("#navbarHeader");
  const btn = document.querySelector("button.navbar-toggler");
  btn.addEventListener("click", () => {
    nav.classList.toggle("collapse");
  });
}

toggleCollapse();

// Fonctionnalité 3

function onClickEdit() {
  const card = document.querySelector(".album").querySelector(".row").children[0];
  const editBtn = card.querySelector(".btn-outline-secondary");
  const cardText = card.querySelector("p.card-text");
  editBtn.addEventListener("click", () => {
    cardText.style.color = "red";
  });
}

onClickEdit();

// Fonctionnalité 4

function toggleTextEdit() {
  const card = document.querySelector(".album").querySelector(".row").children[1];
  const editBtn = card.querySelector(".btn-outline-secondary");
  const cardText = card.querySelector("p.card-text");
  let status = false;
  editBtn.addEventListener("click", () => {
    if (status == false) {
      cardText.style.color = "green";
      status = true;
    } else if (status == true) {
      cardText.style.color = "black";
      status = false;
    }
  });
}

toggleTextEdit();

// Fonctionnalité 5

function nuclear() {
  const nav = document.querySelector("header");
  const cdnLink = document.querySelector("head").querySelector("link");
  const url = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
  let status = false;
  nav.addEventListener("dblclick", () => {
    if (status == false) {
      cdnLink.setAttribute("href", "");
      status = true;
    } else if (status == true) {
      cdnLink.setAttribute("href", url);
      status = false;
    }
    
  });
}

nuclear();

// Fonctionnalité 6

function hoverButton() {
  // nodelist of cards
  const cards = document.querySelector(".album").querySelector(".row").querySelectorAll(".card");
  cards.forEach(card => {
    let status = false;
    const btn = card.querySelector(".btn-success");
    const img = card.querySelector(".card-img-top");
    btn.addEventListener("mouseenter", () => {
      card.querySelector("p.card-text").toggleAttribute("hidden");
      if (status == false) {
        img.setAttribute("style", "width:20%");
        status = true;
      } else if (status == true) {
        img.setAttribute("style", "width:100%");
        status = false;
      }
    })
  });
}

hoverButton();

// Fonctionnalité 7

function wtf() {
  const grayBtn = document.querySelector("section.jumbotron").querySelector(".btn-secondary");
  const row = document.querySelector("div.album").querySelector(".row");

  grayBtn.addEventListener("click", () => {
    let lastChild = row.lastElementChild;
    row.prepend(lastChild);
  });
}

wtf();

// Fonctionnalité 8

function wtf2() {
  const blueBtn = document.querySelector("section.jumbotron").querySelector(".btn-primary");
  const row = document.querySelector("div.album").querySelector(".row");
  blueBtn.addEventListener("click", () => {
    let first = row.firstElementChild;
    row.append(first);
  });
}

wtf2();

// Fonctionnalité 9

// Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
// Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
// Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
// Si l'utilisateur presse la touche "b", tout redevient normal.

function challenge() {
  const body = document.querySelector("body");

  const logo = document.querySelector(".navbar").querySelector(".navbar-brand");
  logo.addEventListener("keydown", (event) => {
    body.classList.remove("col-4");
    body.classList.remove("offset-4");
    body.classList.remove("offset-8");
    if (event.key == "a") {
      body.classList.add("col-4");
    } else if (event.key == "y") {
      body.classList.add("col-4");
      body.classList.add("offset-4");
    } else if (event.key == "p") {
      body.classList.add("offset-8");
    } else if (event.key == "b") {
      body.classList.remove("col-4");
      body.classList.remove("offset-4");
      body.classList.remove("offset-8");
    }
  });
}

challenge();


