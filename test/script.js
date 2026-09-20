// ==================== NAVIGATION ENTRE LES PAGES ====================

// Liste des indices de projets (0, 1, 2)
const projects = [0, 1, 2];
// Stocke la page actuellement affichee
let currentView = 'home';

// Met a jour l'apparence du bouton actif dans le menu
// index : position du bouton a activer (0 = Accueil, 1-3 = Projets, 4 = A propos)
function setActiveNav(index) {
    // Parcourt tous les boutons du menu
    document.querySelectorAll('nav button').forEach((btn, i) => {
        // Ajoute la classe 'active' uniquement au bouton correspondant a l'index
        btn.classList.toggle('active', i === index);
    });
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
    setActiveNav(0); // Active le bouton "Accueil" dans le menu
    currentView = 'home';
}

// Affiche la page detail d'un projet
// index : numero du projet (0, 1 ou 2)
function showProject(index) {
    hideAll();
    // Ajoute 'active' a la div du projet pour l'afficher (display: block)
    document.getElementById('detail-' + index).classList.add('active');
    // Active le bouton correspondant dans le menu (+1 car le bouton 0 est Accueil)
    setActiveNav(index + 1);
    currentView = 'project-' + index;
}

// Affiche la page A propos
function showAbout() {
    hideAll();
    document.getElementById('about').classList.add('active');
    setActiveNav(4); // 5e bouton du menu (index 4)
    currentView = 'about';
}
