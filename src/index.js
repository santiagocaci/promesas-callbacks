import { obtenerHeroesArr, obtenerHeroeAwait } from "./js/await";

console.time('await');

obtenerHeroeAwait('capi2')
  .then(heroe => {
    console.table(heroe);
    console.timeEnd('await');
  });
