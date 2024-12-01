// Mot de passe pour accéder au site
const correctPassword = "Gaufres"; 
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
function createHearts() {
   // Crée le conteneur de cœurs s'il n'existe pas
   let heartsContainer = document.querySelector('.hearts-container');
   if (!heartsContainer) {
       heartsContainer = document.createElement('div');
       heartsContainer.classList.add('hearts-container');
       document.body.appendChild(heartsContainer); // Ajoute à <body> pour être global
   }
   // Crée des cœurs à intervalle régulier
   setInterval(() => {
       const heart = document.createElement('div');
       heart.classList.add('heart');
       heart.style.left = `${Math.random() * 100}vw`; // Position horizontale aléatoire
       heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Durée aléatoire
       heartsContainer.appendChild(heart);
       // Supprime le cœur une fois l'animation terminée
       setTimeout(() => {
           heart.remove();
       }, 5000);
   }, 300); // Ajoute un nouveau cœur toutes les 300ms
}
// Lancer la création des cœurs une fois que le DOM est chargé
document.addEventListener('DOMContentLoaded', createHearts);

function showSection(sectionId) {
   const sections = document.querySelectorAll('.section');
   sections.forEach(section => {
       section.classList.remove('active');
   });
   const targetSection = document.getElementById(sectionId);
   if (targetSection) {
       targetSection.classList.add('active');
   }
}
