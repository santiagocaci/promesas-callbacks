import { buscarHeroes, buscarHeroesAsync } from "./js/promesas";

buscarHeroes('capi1')
  .then(console.log)
  .catch(console.warn);

buscarHeroesAsync('iron1')
  .then(console.log)
  .catch(console.warn);