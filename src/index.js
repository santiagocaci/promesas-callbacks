import { searchHero } from './js/callbacks';
import './styles.css';

const heroId = 'capi';

searchHero(heroId, (heroe)=>{
  console.log(heroe);
});
