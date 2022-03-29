import { buscarHeroesAsync, buscarHeroes } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];

export const obtenerHeroesArr = async () => {

  return await Promise.all(heroesIds.map( buscarHeroes ));
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

    return{
      nombre: 'siname',
      poder: 'sinpoder'
    }
  }
};
