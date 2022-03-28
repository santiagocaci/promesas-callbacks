import { searchHero as buscasrHeroesCallback } from './js/callbacks';
import { buscarHeroes } from './js/promesas';
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'spider';

// searchHero(heroId1, (err, heroe1) => {

//   if (err) { return console.error(err); };

//   searchHero(heroId2, (err, heroe2) => {
//     if (err) { return console.error(err); };
//     console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre}`);
//   })
// });

buscarHeroes( heroeId1 ).then( heroe => {
  console.log(`Enviando a ${heroe.nombre} a la mision`);
}); 