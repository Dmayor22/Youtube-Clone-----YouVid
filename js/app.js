// Variables
const menuBar = document.getElementById("menu");
const sidebar = document.querySelector(".menu_sidebar");
const sidebarMenu = document.querySelector(".menu_sidebar_display");
const videoSection = document.querySelector(".video_section");

menuBar.addEventListener("click", () => {
  sidebar.classList.toggle("menu_display");
  sidebarMenu.classList.toggle("menu_display");
  videoSection.classList.toggle("menu_display");
});

console.log(sidebar);
