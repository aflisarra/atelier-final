// main1.js

// Attendez que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionnez le bouton par son ID
    var changeColorButton = document.getElementById('changeColorButton');

    // Sélectionnez l'élément de contenu par sa classe
    var aboutContent = document.querySelector('.about__content');

    // Ajoutez un gestionnaire d'événements au bouton
    changeColorButton.addEventListener('click', function() {
        // Changez la couleur du texte de l'élément de contenu
        aboutContent.style.color = getRandomColor();
    });

    // Fonction pour générer une couleur aléatoire
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
