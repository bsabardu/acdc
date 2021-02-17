app = {
    init: function () {
        console.log('init!');
        app.burgerButton.addEventListener('click', app.onClickMenu);

    },


    burgerButton: document.querySelector('#burger-menu'),
    burgerIcon: document.querySelector('#burger-icon'),
    crossMenuIcon: document.querySelector('#cross-menu-icon'),
    divMenu: document.querySelector('#mobile-menu'),
    logoDiv: document.querySelector('#logo-div'),

    onClickMenu: function () {
        app.divMenu.classList.toggle("hidden");
        app.burgerIcon.classList.toggle("hidden");
        app.crossMenuIcon.classList.toggle("hidden");
        app.logoDiv.classList.toggle("hidden");
    }

}

// on accroche un écouteur d'évènement sur le document : quand le chargement est terminé, on lance app.init
document.addEventListener('DOMContentLoaded', app.init);