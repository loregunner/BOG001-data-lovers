import { filtroDato, filtroNombre }
  from '../src/data.js';

const dataPrueba = {
  Ashe: {
    version: "6.24.1",
    id: "Ashe",
    key: "22",
    name: "Ashe",
    title: "the Frost Archer",
    img:
      "https://www.masterypoints.com/assets/img/lol/champion_icons/Ashe.png",
    splash:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
    blurb:
      "With each arrow she fires from her ancient ice-enchanted bow, Ashe proves she is a master archer. She chooses each target carefully, waits for the right moment, and then strikes with power and precision. It is with this same vision and focus that she ...",
    info: {
      attack: 7,
      defense: 3,
      magic: 2,
      difficulty: 4
    },
    image: {
      full: "Ashe.png",
      sprite: "champion0.png",
      group: "champion",
      x: 336,
      y: 0,
      w: 48,
      h: 48
    },
    tags: ["Marksman", "Support"],
    partype: "MP",
    stats: {
      hp: 527.72,
      hpperlevel: 79,
      mp: 280,
      mpperlevel: 32,
      movespeed: 325,
      armor: 21.212,
      armorperlevel: 3.4,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 600,
      hpregen: 5.42,
      hpregenperlevel: 0.55,
      mpregen: 6.97,
      mpregenperlevel: 0.4,
      crit: 0,
      critperlevel: 0,
      attackdamage: 56.508,
      attackdamageperlevel: 2.26,
      attackspeedoffset: -0.05,
      attackspeedperlevel: 3.33
    }
  },
  AurelionSol: {
    version: "6.24.1",
    id: "AurelionSol",
    key: "136",
    name: "Aurelion Sol",
    title: "The Star Forger",
    img:
      "https://www.masterypoints.com/assets/img/lol/champion_icons/AurelionSol.png",
    splash:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg",
    blurb:
      "Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his ...",
    info: {
      attack: 2,
      defense: 3,
      magic: 8,
      difficulty: 7
    },
    image: {
      full: "AurelionSol.png",
      sprite: "champion0.png",
      group: "champion",
      x: 384,
      y: 0,
      w: 48,
      h: 48
    },
    tags: ["Mage", "Fighter"],
    partype: "MP",
    stats: {
      hp: 550,
      hpperlevel: 80,
      mp: 350,
      mpperlevel: 50,
      movespeed: 325,
      armor: 19,
      armorperlevel: 3.6,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 550,
      hpregen: 6.5,
      hpregenperlevel: 0.6,
      mpregen: 6,
      mpregenperlevel: 0.8,
      crit: 0,
      critperlevel: 0,
      attackdamage: 57,
      attackdamageperlevel: 3.2,
      attackspeedoffset: 0,
      attackspeedperlevel: 1.36
    }
  },
  Azir: {
    version: "6.24.1",
    id: "Azir",
    key: "268",
    name: "Azir",
    title: "the Emperor of the Sands",
    img:
      "https://www.masterypoints.com/assets/img/lol/champion_icons/Azir.png",
    splash:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg",
    blurb:
      "''Shurima was once the glory of Runeterra. I will make it so again.''<br><br>Azir was a mortal emperor of Shurima in a far distant age, a proud man who stood at the cusp of immortality. His hubris saw him betrayed and murdered at the moment of his ...",
    info: {
      attack: 6,
      defense: 3,
      magic: 8,
      difficulty: 9
    },
    image: {
      full: "Azir.png",
      sprite: "champion0.png",
      group: "champion",
      x: 432,
      y: 0,
      w: 48,
      h: 48
    },
    tags: ["Mage", "Marksman"],
    partype: "MP",
    stats: {
      hp: 524.4,
      hpperlevel: 80,
      mp: 350.56,
      mpperlevel: 42,
      movespeed: 325,
      armor: 19.04,
      armorperlevel: 3,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 525,
      hpregen: 6.92,
      hpregenperlevel: 0.55,
      mpregen: 6,
      mpregenperlevel: 0.8,
      crit: 0,
      critperlevel: 0,
      attackdamage: 52,
      attackdamageperlevel: 2.8,
      attackspeedoffset: -0.02,
      attackspeedperlevel: 1.5
    }
  }
}

const dataFiltrado = [{
  "blurb": "Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his ...", "id": "AurelionSol", "image": { "full": "AurelionSol.png", "group": "champion", "h": 48, "sprite": "champion0.png", "w": 48, "x": 384, "y": 0 }, "img": "https://www.masterypoints.com/assets/img/lol/champion_icons/AurelionSol.png", "info": { "attack": 2, "defense": 3, "difficulty": 7, "magic": 8 }, "key": "136", "name": "Aurelion Sol", "partype": "MP", "splash": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg", "stats": { "armor": 19, "armorperlevel": 3.6, "attackdamage": 57, "attackdamageperlevel": 3.2, "attackrange": 550, "attackspeedoffset": 0, "attackspeedperlevel": 1.36, "crit": 0, "critperlevel": 0, "hp": 550, "hpperlevel": 80, "hpregen": 6.5, "hpregenperlevel": 0.6, "movespeed": 325, "mp": 350, "mpperlevel": 50, "mpregen": 6, "mpregenperlevel": 0.8, "spellblock": 30, "spellblockperlevel": 0 }, "tags": ["Mage", "Fighter"], "title": "The Star Forger",
  "version": "6.24.1"
}]


describe('filtraDato', () => {
  it.only('is a function', () => {
    expect(typeof filtroDato).toBe('function');
  });

  it.only('deberia retornar `Fighter`', () => {
    expect(filtroDato(dataPrueba, "Fighter")).toStrictEqual(dataFiltrado);
  });
});


describe('filtroNombre', () => {
  it.only('is a function', () => {
    expect(typeof filtroNombre).toBe('function');
  });

  it.only('deberia retornar `Ashe`', () => {
    expect(filtroNombre(dataPrueba, "Ashe")).toHaveProperty("name");
  });
});

describe('filtroDato tiene un object Aatrox', () => {
  it.only('is a object', () => {
    expect(typeof filtroDato(dataPrueba, "Aatrox")).toBe('object');
  });
});

