// Mot de passe pour accéder au site
const correctPassword = "Gaufres"; // Le mot de passe est "Gaufres"
// Éléments HTML
const passwordScreen = document.getElementById("password-screen");
const content = document.getElementById("content");
const passwordInput = document.getElementById("password-input");
const submitButton = document.getElementById("submit-password");
const errorMessage = document.getElementById("error-message");
// Gestion des sections
const sections = document.querySelectorAll(".section");
const menuLinks = document.querySelectorAll(".menu-link");
// Vérification du mot de passe
submitButton.addEventListener("click", () => {
   const enteredPassword = passwordInput.value.trim();
   if (enteredPassword === correctPassword) {
       passwordScreen.style.display = "none"; // Cache l'écran de mot de passe
       content.style.display = "block"; // Affiche le contenu du site
   } else {
       errorMessage.style.display = "block";
       errorMessage.textContent = "Mot de passe incorrect.";
   }
});
// Navigation entre les sections
menuLinks.forEach((link) => {
   link.addEventListener("click", (e) => {
       e.preventDefault();
       const targetSection = e.target.dataset.section;
       // Masquer toutes les sections
       sections.forEach((section) => {
           section.style.display = "none";
       });
       // Afficher la section cible
       document.getElementById(targetSection).style.display = "block";
   });
});