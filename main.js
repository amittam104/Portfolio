("use strict");
import "./style.css";

// variables Declaration
const sectionProject = document.querySelector(".projects");
const sectionAboutMe = document.querySelector(".about-me");
const sectionContact = document.querySelector(".CTA");

const linkProjects = document.querySelector(".nav-link--projects");
const linkAboutMe = document.querySelector(".nav-link--aboutMe");
const linkContact = document.querySelector(".nav-link--contact");
const linkHomeFooter = document.querySelector(".footer-nav-link--home");
const linkProjectsFooter = document.querySelector(".footer-nav-link--projects");
const linkAboutMeFooter = document.querySelector(".footer-nav-link--aboutMe");

const btnProjects = document.querySelector(".btn-projects");
const btnContact = document.querySelector(".btn-connect");
const btnDownloadCV = document.querySelector(".btn-download-CV");
const btnContactForm = document.querySelector(".btn-CTA");
const btnMenuOpen = document.querySelector(".menu-open");
const btnMenuClose = document.querySelector(".menu-close");

// Smooth Scrolling
function scrollToProjects() {
  sectionProject.scrollIntoView({ behavior: "smooth" });
}
function scrollToContact() {
  sectionContact.scrollIntoView({ behavior: "smooth" });
}

linkProjects.addEventListener("click", scrollToProjects);
btnProjects.addEventListener("click", scrollToProjects);

linkAboutMe.addEventListener("click", function () {
  sectionAboutMe.scrollIntoView({ behavior: "smooth" });
});

linkContact.addEventListener("click", scrollToContact);
btnContact.addEventListener("click", scrollToContact);
