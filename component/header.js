const header = document.createElement("header");
header.classList.add("header");

const locations = window.location.pathname.replace(".html", "");

header.innerHTML = `
<div id="toggle-header">
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
</div>
<nav class="header__menu" id="top">
  <ul class="header__menu-list">
    <li class=${locations === "/" || locations === "/index" ? "header__menu-item--active" : "header__menu-item"}>
      <a class="header__menu-link" href="/">Главная</a>
    </li>
    <li class=${validate(locations === "/page/verstka")}>
      <a class="header__menu-link" href="/page/verstka">Verstka</a>
    </li>
    <li class=${validate(locations === "/page/grid")}>
      <a class="header__meni-link" href="/page/grid">Grid</a>
    </li>
    <li class=${validate(locations === "/page/modal")}>
      <a class="header__menu-link" href="/page/modal">Modal</a>
    </li>
    <li class=${validate(locations === "/page/grid-layout")}>
      <a class="header__menu-link" href="/page/grid-layout"
        >Grid layout</a
      >
    </li>
    <li class=${validate(locations === "/page/iframe")}>
      <a class="header__menu-link" href="/page/iframe">Iframe</a>
    </li>
    <li class=${validate(locations === "/page/flow")}>
      <a class="header__menu-link" href="/page/flow">Flow</a>
    </li>
    <li class=${validate(locations === "/page/pseudo")}>
      <a class="header__menu-link" href="/page/pseudo">Pseudo</a>
    </li>
    <li class=${validate(locations === "/page/form")}>
      <a class="header__menu-link" href="/page/form">Form</a>
    </li>
    <li class=${validate(locations, "/page/variables")}>
      <a class="header__menu-link" href="/page/variables">Variables</a>
    </li>
  </ul>
</nav>
<div class="theme">
  <input id="theme-toggle" type="checkbox" />
  <label for="theme-toggle"></label>
</div>
`;

document.body.appendChild(header);

function validate(location, pageLocation) {
  if (location === pageLocation) return "header__menu-item--active";
  else return "header__menu-item";
}

document.getElementById("theme-toggle").addEventListener("change", (event) => {
  if (event.target.checked) {
    document.documentElement.style.setProperty("--background", "#ecf2f8f0");
    document.documentElement.style.setProperty("--black", "#89929b");
    document.documentElement.style.setProperty("--red", "#fa7970");
    document.documentElement.style.setProperty("--green", "#7ce38b");
    document.documentElement.style.setProperty("--yellow", "#faa356");
    document.documentElement.style.setProperty("--blue1", "#77bdfb");
    document.documentElement.style.setProperty("--purple", "#cea5fb");
    document.documentElement.style.setProperty("--blue2", "#a2d2fb");
    document.documentElement.style.setProperty("--white", "#161b22");
  } else {
    document.documentElement.style.setProperty("--background", "#272a34f0");
    document.documentElement.style.setProperty("--black", "#282c34");
    document.documentElement.style.setProperty("--red", "#e06c75");
    document.documentElement.style.setProperty("--green", "#98c379");
    document.documentElement.style.setProperty("--yellow", "#e5c07b");
    document.documentElement.style.setProperty("--blue1", "#61afef");
    document.documentElement.style.setProperty("--purple", "#c678dd");
    document.documentElement.style.setProperty("--blue2", "#56b6c2");
    document.documentElement.style.setProperty("--white", "#abb2bf");
  }
});

document.getElementById("toggle-header").addEventListener("click", () => {
  const header = document.querySelector(".header");
  const toggleHeader = document.querySelector("#toggle-header");
  const content = document.querySelector(".content");
  if (header.style.transform === "translateY(-100%)") {
    header.style.transform = "translateY(0)";
    content.style.transform = "translateY(0)";
    toggleHeader.style.top = "0";
    toggleHeader.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
`;
  } else {
    header.style.transform = "translateY(-100%)";
    content.style.transform = `translateY(-${document.querySelector(".header").offsetHeight - 50}px)`;
  }

  setTimeout(() => {
    if (header.style.transform === "translateY(-100%)") {
      toggleHeader.style.top = "100%";
      toggleHeader.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>`;
    }
  }, 500);
});
