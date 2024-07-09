document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector("#hamburger-menu");
  const closeBtn = document.querySelector("#close");
  const darkmodeButton = document.querySelector("#darkmodeButton");
  const mobileDarkmodeButton = document.querySelector("#mobileDarkmodeButton");
  const moon = document.querySelector("#darkmodeButton #moon");
  const sun = document.querySelector("#darkmodeButton #sun");
  const mobileNav = document.querySelector("#mobile-nav");
  const mobileMoon = document.querySelector("#mobileDarkmodeButton #moon");
  const mobileSun = document.querySelector("#mobileDarkmodeButton #sun");

  // navigation
  document.addEventListener("click", function (e) {
    if (hamburgerMenu.contains(e.target)) {
      mobileNav.classList.toggle("-right-full");
      mobileNav.classList.toggle("right-0");
    }
    if (closeBtn.contains(e.target)) {
      mobileNav.classList.remove("right-0");
      mobileNav.classList.add("-right-full");
    }
    if (
      !hamburgerMenu.contains(e.target) &&
      !closeBtn.contains(e.target) &&
      !mobileNav.contains(e.target)
    ) {
      mobileNav.classList.remove("right-0");
      mobileNav.classList.add("-right-full");
    }
  });

  document.addEventListener("click", function (e) {
    if (
      darkmodeButton.contains(e.target) ||
      mobileDarkmodeButton.contains(e.target)
    ) {
      darkmodeToggle();
      mobileDarkmodeToggle();
      homepageDarkMode();
      navigationDarkmode();
    }
  });

  // darkmode function
  const homepageDarkMode = () => {
    document.querySelector("body").classList.toggle("bg-secondary");
    document.querySelector("body").classList.toggle("bg-darkmode");

    document.querySelector("#logo").classList.toggle("img1");
    document.querySelector("#logo").classList.toggle("img2");
  };

  const navigationDarkmode = () => {
    document.querySelector("#pDark").classList.toggle("darkActive");
    document.querySelector("#h1Dark").classList.toggle("darkActive");

    document.querySelector("header ul li").classList.toggle("text-primary");
    document.querySelector("header ul li").classList.toggle("text-secondary");

    mobileNav.classList.toggle("bg-white");
    mobileNav.classList.toggle("bg-black");

    document
      .querySelector("#mobile-nav ul li")
      .classList.toggle("text-primary");
    document
      .querySelector("#mobile-nav ul li")
      .classList.toggle("text-secondary");

    hamburgerMenu.classList.toggle("stroke-primary");
    hamburgerMenu.classList.toggle("stroke-secondary");

    document.querySelector("#close svg").classList.toggle("activeToggle");
    document.querySelector("#close svg").classList.toggle("notActiveToggle");
  };

  const darkmodeToggle = () => {
    darkmodeButton.classList.toggle("darkToggleActive");

    moon.classList.toggle("activeToggle");
    moon.classList.toggle("notActiveToggle");

    sun.classList.toggle("activeToggle");
    sun.classList.toggle("notActiveToggle");
  };

  const mobileDarkmodeToggle = () => {
    mobileDarkmodeButton.classList.toggle("darkToggleActive");

    mobileMoon.classList.toggle("activeToggle");
    mobileMoon.classList.toggle("notActiveToggle");

    mobileSun.classList.toggle("activeToggle");
    mobileSun.classList.toggle("notActiveToggle");
  };
});
