const header = document.createElement("header");
header.classList.add("header");

const locations = window.location.pathname.replace(".html", "");

header.innerHTML = `
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
