import { buscarHeroesAsync, buscarHeroes } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];
const heroesPromesas = heroesIds.map(buscarHeroes);

export const obtenerHeroesArr = async () => {

  return await Promise.all(heroesIds.map(buscarHeroes));
  // const heroesArr = [];

  // for (const id of heroesIds) {
  //   heroesArr.push(buscarHeroes(id)); 

  // }

  // return Promise.all(heroesArr);
};

export const obtenerHeroeAwait = async (id) => {
  try {
    const heroe = await buscarHeroesAsync(id);
    return heroe;
  } catch (error) {
    console.log('catch');

    return {
      nombre: 'siname',
      poder: 'sinpoder'
    }
  }
};

export const heroesCiclo = async () => {
  console.time('H');

  for await (const heroe of heroesPromesas) {
    console.log(heroe);
  }
  // const heroes = await Promise.all(heroesPromesas);
  // heroes.forEach(e => console.log(e));

  console.timeEnd('H');
}

export const heroeIfAwait = async (id) => {
  if ((await buscarHeroesAsync(id)).nombre === 'Ironman') {
    console.log('Ironman');
  } else {
    console.log('No lo es');
  }
}