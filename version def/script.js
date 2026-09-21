const projects = [0, 1, 2];
let currentView = 'home';

const pageNames = ['Projet 1', 'Projet 2', 'Projet 3', 'A propos de moi'];

function setActiveNav(index) {
    document.querySelectorAll('nav button').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
}

function setPageTitle(title) {
    document.getElementById('page-title').textContent = title;
}

function hideAll() {
    document.getElementById('home').style.display = 'none';
    projects.forEach(i => {
        document.getElementById('detail-' + i).classList.remove('active');
    });
    document.getElementById('about').classList.remove('active');
}

function showHome() {
    hideAll();
    document.getElementById('home').style.display = 'flex';
    document.querySelectorAll('nav button').forEach(btn => {
        btn.classList.remove('active');
    });
    setPageTitle('Accueil');
    currentView = 'home';
}

function showProject(index) {
    hideAll();
    document.getElementById('detail-' + index).classList.add('active');
    setActiveNav(index);
    setPageTitle(pageNames[index]);
    currentView = 'project-' + index;
}

function showAbout() {
    hideAll();
    document.getElementById('about').classList.add('active');
    setActiveNav(3);
    setPageTitle(pageNames[3]);
    currentView = 'about';
}
