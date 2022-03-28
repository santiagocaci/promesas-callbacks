const heroes = {
  capi: {
    nombre: 'Capitan America',
    poder: 'Aguantar inyecciones sin morir',
  },
  iron: {
    nombre: 'Ironman',
    poder: 'Absurda cantidad de dinero',
  },
  spider: {
    nombre: 'Spiderman',
    poder: 'La mejor reaccion alergica a las picaduras de arañas',
  },
};

export const buscarHeroes = (id) => {

  const heroe = heroes[id];

  return new Promise((resolve, reject) => {
    if (heroe) {
      resolve(heroe);
    } else {
      reject(`No existe un hero con el id ${id}`);
    }
  });
}

export const buscarHeroesAsync = async (id) => {
  const heroe = heroes[id];
  if (heroe) {
    return heroe;
  } else {
    throw `No existe un hero con el id ${id}`;
  };
}

const promesaLenta = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promesa Lenta');
  }, 2000);
});

const promesaMedia = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promesa Media');
  }, 1500);
});

const promesaRapida = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promesa Rapida');
  }, 1000);
});

export {
  promesaLenta,
  promesaMedia,
  promesaRapida,
}