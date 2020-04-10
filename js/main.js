/*! project-name v0.0.1 | (c) 2020 Francuski Miroslav | MIT License | http://link-to-your-git-repo.com */
window.onload = function () {
  //// sticky top-nav
  const navTop = document.getElementById("top-nav");

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 0) {
      navTop.classList.add("top-nav--sticky");
    } else {
      navTop.classList.remove("top-nav--sticky");
    }
  });

  //// toggle navbar button
  const menuBtn = document.getElementById("menu-btn");
  const navList = document.getElementById("nav-list");
  const nav = document.getElementById("nav");

  menuBtn.addEventListener("click", () => {
    navList.classList.toggle("showing");
    menuBtn.classList.toggle("open");
    nav.classList.toggle("overlay");
  });
};
