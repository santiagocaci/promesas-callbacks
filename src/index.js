import { searchHero } from './js/callbacks';
import './styles.css';

const heroId1 = 'capi';
const heroId2 = 'spider';

searchHero(heroId1, (err, heroe1) => {

  if (err) { return console.error(err); };

  searchHero(heroId2, (err, heroe2) => {
    if (err) { return console.error(err); };
    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre}`);
  })
});
