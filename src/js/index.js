const btnMostrarProjetos = document.querySelector(".btn-mostrar-projetos");

let quantidadeDeProjetos = 4;

const btnMostrarArtigos = document.querySelector(".btn-mostrar-artigos");

let quantidadeDeArtigos = 4;

document.addEventListener("DOMContentLoaded", function () {
  mostrarProjetos(quantidadeDeProjetos);
});

btnMostrarProjetos.addEventListener("click", mostrarMaisProjetos);

function mostrarProjetos(quantidadeProjetos) {
  const projetos = document.querySelectorAll(".projeto");

  for (let i = 0; i < quantidadeProjetos; i++) {
    if (projetos[i]) {
      projetos[i].classList.add("ativo");
    }
  }
}

function mostrarMaisProjetos() {
  const quantidadeTotalProjetos = document.querySelectorAll(".projeto").length;
  quantidadeDeProjetos += 4; // Incrementa mais 4 projetos a serem mostrados
  mostrarProjetos(quantidadeDeProjetos);

  if (quantidadeDeProjetos >= quantidadeTotalProjetos) {
    btnMostrarProjetos.classList.add("remover"); // Esconde o botão se todos os projetos estiverem sendo mostrados
  }
}

document.addEventListener("DOMContentLoaded", function () {
  mostrarArtigos(quantidadeDeArtigos);
});

btnMostrarArtigos.addEventListener("click", mostrarMaisArtigos);

function mostrarArtigos(quantidadeArtigos) {
  const artigos = document.querySelectorAll(".artigo");
  for (let i = 0; i < quantidadeArtigos; i++) {
    if (artigos[i]) {
      artigos[i].classList.add("ativo");
    }
  }
}

function mostrarMaisArtigos() {
  const quantidadeTotalArtigos = document.querySelectorAll(".artigo").length;
  quantidadeDeArtigos += 4; // Incrementa mais 4 projetos a serem mostrados
  mostrarArtigos(quantidadeDeArtigos);
  if (quantidadeDeArtigos >= quantidadeTotalArtigos) {
    btnMostrarArtigos.classList.add("remover"); // Esconde o botão se todos os projetos estiverem sendo mostrados
  }
}

// Scrollrevealjs.org animations
window.sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 500,
  reset: true,
});

sr.reveal(".titulo1", {
  duration: 2000,
  origin: "left",
  distance: "30px",
  reset: true,
});

sr.reveal(document.getElementsByTagName("article"), {
  duration: 2000,
  origin: "bottom",
  distance: "30px",
  reset: true,
});

sr.reveal(".container-foto-mobile", {
  duration: 2000,
  origin: "bottom",
  distance: "30px",
  reset: true,
});

sr.reveal(".container-foto-desktop", {
  duration: 2000,
  origin: "top",
  distance: "30px",
  reset: true,
});

sr.reveal(".redes-sociais", {
  duration: 2000,
  origin: "top",
  distance: "30px",
  reset: true,
});

sr.reveal(".titulo", {
  duration: 2000,
  origin: "top",
  distance: "30px",
  reset: false,
});

sr.reveal(".curriculo", {
  duration: 2000,
  origin: "left",
  distance: "30px",
  reset: false,
});

sr.reveal(".container-projetos", {
  duration: 2000,
  origin: "right",
  distance: "30px",
  reset: false,
});

sr.reveal(".container-blog", {
  duration: 2000,
  origin: "right",
  distance: "30px",
  reset: false,
});

const toTop = document.querySelector(".top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

function clickMenu() {
  const menuMobile = document.querySelector("#menu-mobile");
  if (menuMobile.style.display == "block") {
    menuMobile.style.display = "none";
  } else {
    menuMobile.style.display = "block";
  }
}
