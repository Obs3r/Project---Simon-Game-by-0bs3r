
const hautgauche = document.querySelector('.panneau-haut-gauche');
const hautdroit = document.querySelector('.panneau-haut-droit');
const basgauche = document.querySelector('.panneau-bas-gauche');
const basdroit = document.querySelector('.panneau-bas-droit');

/*const Compteur = document.querySelector('ScoreNbrTouche');

panelClicked.addEventListener('click', function(){
  Compteur = Compteur+1;

})
*/



const Start = document.querySelector('.button1');
Start.addEventListener('click', main);



function main()



{




  const getRandomPanneau = () => {
    const panels = [
      hautgauche,
      hautdroit,
      basgauche,
      basdroit
    ];
    return panels[parseInt(Math.random() * panels.length)];
  };
  
  
  const JoueCouleurs = [getRandomPanneau()];
  let JoueCouleursArep = [...JoueCouleurs];
  
  const flash = panel => {
    return new Promise(resolve => {
      panel.className += ' active';
      setTimeout(() => {
        panel.className = panel.className.replace(
          ' active',
          ''
        );
        setTimeout(() => {
          resolve();
        }, 250);
      }, 1000);
    });
  };
  
  let canClick = false;
  
  const panneauClicked = panelClicked => {
    if (!canClick) return;
    const expectedPanel = JoueCouleursArep.shift();
    if (expectedPanel === panelClicked) {
      if (JoueCouleursArep.length === 0) {
        // commencement nouveau round
        JoueCouleurs.push(getRandomPanneau());
        JoueCouleursArep = [...JoueCouleurs];
        startFlashing();
      }
    } else {
      // Fin de jeu
      alert('Perdu! Mauvaise couleur!');
    }
  };
  
  
  const startFlashing = async () => {
    canClick = false;
    for (const panel of JoueCouleurs) {
      await flash(panel);
    }
    canClick = true;
  };
  
  startFlashing();

  

}







const getRandomPanneau = () => {
  const panels = [
    hautgauche,
    hautdroit,
    basgauche,
    basdroit
  ];
  return panels[parseInt(Math.random() * panels.length)];
};


const JoueCouleurs = [getRandomPanneau()];
let JoueCouleursArep = [...JoueCouleurs];

const flash = panel => {
  return new Promise(resolve => {
    panel.className += ' active';
    setTimeout(() => {
      panel.className = panel.className.replace(
        ' active',
        ''
      );
      setTimeout(() => {
        resolve();
      }, 250);
    }, 1000);
  });
};

let canClick = false;

const panneauClicked = panelClicked => {
  if (!canClick) return;
  const expectedPanel = JoueCouleursArep.shift();
  if (expectedPanel === panelClicked) {
    if (JoueCouleursArep.length === 0) {
      // start new round
      JoueCouleurs.push(getRandomPanneau());
      JoueCouleursArep = [...JoueCouleurs];
      startFlashing();
    }
  } else {
    // end game
    alert('game over');
  }
};


const startFlashing = async () => {
  canClick = false;
  for (const panel of JoueCouleurs) {
    await flash(panel);
  }
  canClick = true;
};

startFlashing();
 