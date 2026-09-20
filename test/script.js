// ==================== NAVIGATION ENTRE LES PAGES ====================

// Liste des indices de projets (0, 1, 2)
const projects = [0, 1, 2];
// Stocke la page actuellement affichee
let currentView = 'home';

// Noms des pages correspondant a chaque bouton du menu
// Les boutons sont maintenant : Projet 1 (0), Projet 2 (1), Projet 3 (2), A propos (3)
const pageNames = ['Projet 1', 'Projet 2', 'Projet 3', 'A propos de moi'];

// Met a jour l'apparence du bouton actif dans le menu et le nom de la page
// index : position du bouton a activer (0-2 = Projets, 3 = A propos)
function setActiveNav(index) {
    // Parcourt tous les boutons du menu
    document.querySelectorAll('nav button').forEach((btn, i) => {
        // Ajoute la classe 'active' uniquement au bouton correspondant a l'index
        btn.classList.toggle('active', i === index);
    });
}

// Met a jour le texte du titre de la page (a gauche de la nav)
function setPageTitle(title) {
    document.getElementById('page-title').textContent = title;
}

// Cache toutes les sections avant d'en afficher une nouvelle
function hideAll() {
    // Cache la grille d'accueil
    document.getElementById('home').style.display = 'none';
    // Retire la classe 'active' de toutes les pages detail (les cache)
    projects.forEach(i => {
        document.getElementById('detail-' + i).classList.remove('active');
    });
    // Cache la page A propos
    document.getElementById('about').classList.remove('active');
}

// Affiche la page d'accueil (grille de projets)
function showHome() {
    hideAll(); // Cache tout d'abord
    document.getElementById('home').style.display = 'flex'; // Affiche la liste
    // Aucun bouton actif car on est sur l'accueil
    document.querySelectorAll('nav button').forEach(btn => {
        btn.classList.remove('active');
    });
    setPageTitle('Accueil'); // Met a jour le titre
    currentView = 'home';
}

// Affiche la page detail d'un projet
// index : numero du projet (0, 1 ou 2)
function showProject(index) {
    hideAll();
    // Ajoute 'active' a la div du projet pour l'afficher (display: block)
    document.getElementById('detail-' + index).classList.add('active');
    setActiveNav(index); // Active le bouton correspondant
    setPageTitle(pageNames[index]); // Met a jour le titre
    currentView = 'project-' + index;
}

// Affiche la page A propos
function showAbout() {
    hideAll();
    document.getElementById('about').classList.add('active');
    setActiveNav(3); // 4e bouton du menu (index 3)
    setPageTitle(pageNames[3]); // Met a jour le titre
    currentView = 'about';
}
