import { buscarHeroesAsynck, buscarHeroes } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];

export const obtenerHeroesArr = async () => {

  return await Promise.all(heroesIds.map( buscarHeroes ));
  // const heroesArr = [];

  // for (const id of heroesIds) {
  //   heroesArr.push(buscarHeroes(id)); 

  // }

  // return Promise.all(heroesArr);
};