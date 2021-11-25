
const hautgauche = document.querySelector('.panneau-haut-gauche');
const hautdroit = document.querySelector('.panneau-haut-droit');
const basgauche = document.querySelector('.panneau-bas-gauche');
const basdroit = document.querySelector('.panneau-bas-droit');

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