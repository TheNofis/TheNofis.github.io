const header = document.createElement("header");
header.classList.add("header");

const locations = window.location.pathname.replace(".html", "");

header.innerHTML = `
<nav class="header__menu" id="top">
  <ul class="header__menu-list">
    <li class=${locations === "/" || locations === "/index" ? "header__menu-item--active" : "header__menu-item"}>
      <a class="header__menu-link" href="/">Главная</a>
    </li>
    <li class=${locations === "/page/verstka" ? "header__menu-item--active" : "header__menu-item"}>
      <a class="header__menu-link" href="/page/verstka">Verstka</a>
    </li>
    <li class=${locations === "/page/grid" ? "header__menu-item--active" : "header__menu-item"}>
      <a class="header__meni-link" href="/page/grid">Grid</a>
    </li>
    <li class=${locations === "/page/modal" ? "header__menu-item--active" : "header__menu-item"}>
      <a class="header__menu-link" href="/page/modal">Modal</a>
    </li>
    <li class=${locations === "/page/grid-layout" ? "header__menu-item--active" : "header__menu-item"}>
      <a class="header__menu-link" href="/page/grid-layout"
        >Grid layout</a
      >
    </li>
    <li class=${locations === "/page/iframe" ? "header__menu-item--active" : "header__menu-item"}>
      <a class="header__menu-link" href="/page/iframe">Iframe</a>
    </li>
    <li class=${locations === "/page/flow" ? "header__menu-item--active" : "header__menu-item"}>
      <a class="header__menu-link" href="/page/flow">Flow</a>
    </li>
    <li class=${locations === "/page/pseudo" ? "header__menu-item--active" : "header__menu-item"}>
      <a class="header__menu-link" href="/page/pseudo">Pseudo</a>
    </li>
    <li class=${locations === "/page/form" ? "header__menu-item--active" : "header__menu-item"}>
      <a class="header__menu-link" href="/page/form">Form</a>
    </li>
  </ul>
</nav>
`;
document.body.appendChild(header);
