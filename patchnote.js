document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner le bouton et la popup
  let showPopupButton = document.getElementById('showPopupButton');
  let popup = document.getElementById('popup');
  let closeButton = document.getElementById('closeButton');

  // Afficher la popup lorsque le bouton est cliqué
  showPopupButton.addEventListener('click', function() {
    popup.style.display = 'block';
  });

  // Fermer le popup lorsque le bouton de fermeture est cliqué
  closeButton.addEventListener('click', function() {
    let patchNote = document.getElementById('patchNote');
    let patchNoteSrc = patchNote.getAttribute('src');
    let home = document.getElementById('home');

    popup.style.display = 'none';
    if(patchNoteSrc === 'img/icons/patch-note-selected.png'){
      patchNote.setAttribute('src', 'img/icons/patch-note.png')
      home.setAttribute('src', 'img/icons/home-selected.png')
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner le bouton et la popup
  let showPopupButtonMobile = document.getElementById('showPopupButtonMobile');
  let popupMobile = document.getElementById('popup');
  let closeButtonMobile = document.getElementById('closeButton');

  // Afficher la popup lorsque le bouton est cliqué
  showPopupButtonMobile.addEventListener('click', function() {
    popupMobile.style.display = 'block';
  });

  // Fermer le popup lorsque le bouton de fermeture est cliqué
  closeButtonMobile.addEventListener('click', function() {
    popupMobile.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner le bouton et la popup
  let showSecondPopupButton = document.getElementById('showSecondPopupButton');
  let popup2 = document.getElementById('popup2');
  let closeButton2 = document.getElementById('closeButton2');

  // Afficher la popup lorsque le bouton est cliqué
  showSecondPopupButton.addEventListener('click', function() {
    popup2.style.display = 'block';
  });

  // Fermer le popup lorsque le bouton de fermeture est cliqué
  closeButton2.addEventListener('click', function() {
    let infos = document.getElementById('more');
    let infosSrc = infos.getAttribute('src');
    let home = document.getElementById('home');

    popup2.style.display = 'none';
    if(infosSrc === 'img/icons/infos-selected.png'){
      infos.setAttribute('src', 'img/icons/infos.png')
      home.setAttribute('src', 'img/icons/home-selected.png')
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner le bouton et la popup
  let showThirdPopupButton = document.getElementById('showThirdPopupButton');
  let popup3 = document.getElementById('popup3');
  let closeButton3 = document.getElementById('closeButton3');

  // Afficher la popup lorsque le bouton est cliqué
  showThirdPopupButton.addEventListener('click', function() {
    popup3.style.display = 'block';
  });

  // Fermer le popup lorsque le bouton de fermeture est cliqué
  closeButton3.addEventListener('click', function() {
    popup3.style.display = 'none';
  });
});