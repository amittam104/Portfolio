("use strict");
import "./style.css";
import { Client, Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_API_URL)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

// variables Declaration
const sectionProject = document.querySelector(".projects");
const sectionAboutMe = document.querySelector(".about-me");
const sectionContact = document.querySelector(".CTA");
const sectionHero = document.querySelector(".hero");
const sectionSkills = document.querySelector(".skills");
const sectionHeader = document.querySelector(".header");

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

// ----------- Smooth Scrolling -----------
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

// --------------------- Sections loading on scroll --------------------------------
const sections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

sections.forEach((section) => {
  // section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

const storage = new Storage(client);
// CV Download
const downloadCV = function () {
  const result = storage.getFileDownload(
    import.meta.env.VITE_APPWRITE_BUCKET_ID,
    import.meta.env.VITE_APPWRITE_FILE_ID
  );

  const file = result.href;
  btnDownloadCV.href = file;
};

btnDownloadCV.addEventListener("click", downloadCV);
