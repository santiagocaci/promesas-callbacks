import { searchHero } from './js/callbacks';
import './styles.css';

const heroId = 'capi';

searchHero(heroId, (err, heroe)=>{

  if (err) {
    console.error(err);
  }else{
    console.log( heroe );
  }
});
