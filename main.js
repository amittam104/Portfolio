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

const linkProjects = document.querySelector(".nav-link--projects");
const linkAboutMe = document.querySelector(".nav-link--aboutMe");
const linkContact = document.querySelector(".nav-link--contact");

const inputFormName = document.getElementById("name");
const inputFormEmail = document.getElementById("email");
const inputFormMessage = document.getElementById("message");

const errorMsgFormName = document.querySelector(".form-error-name");
const errorMsgFormEmail = document.querySelector(".form-error-email");
const errorMsgFormMessage = document.querySelector(".form-error-message");

const btnProjects = document.querySelector(".btn-projects");
const btnContact = document.querySelector(".btn-connect");
// const btnDownloadCV = document.querySelector(".btn-download-CV");
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

// CV Download
// const storage = new Storage(client);
// const downloadCV = function () {
//   const result = storage.getFileDownload(
//     import.meta.env.VITE_APPWRITE_BUCKET_ID,
//     import.meta.env.VITE_APPWRITE_FILE_ID
//   );

//   const file = result.href;
//   btnDownloadCV.href = file;
// };

// --------------------- Form Validation --------------------------------
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function formValidationSubmission(e) {
  e.preventDefault();
  if (!inputFormName.value) {
    inputFormName.classList.add("input-error--name");
    errorMsgFormName.style.display = "block";
  } else {
    inputFormName.classList.remove("input-error--name");
    inputFormName.classList.add("input-sucess--name");
    errorMsgFormName.style.display = "none";
  }

  if (!validateEmail(inputFormEmail.value)) {
    inputFormEmail.classList.add("input-error--email");
    errorMsgFormEmail.style.display = "block";
  } else {
    inputFormEmail.classList.remove("input-error--email");
    inputFormEmail.classList.add("input-sucess--email");
    errorMsgFormEmail.style.display = "none";
  }

  if (!inputFormMessage.value) {
    inputFormMessage.classList.add("input-error--message");
    errorMsgFormMessage.style.display = "block";
  } else {
    inputFormMessage.classList.remove("input-error--message");
    inputFormMessage.classList.add("input-sucess--message");
    errorMsgFormMessage.style.display = "none";
  }

  if (!inputFormName.value || !inputFormEmail.value || !inputFormMessage.value)
    return;
}

btnContactForm.addEventListener("click", formValidationSubmission);
