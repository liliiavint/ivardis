import { Link } from 'react-router-dom';
import style from './CenterWords.module.css';

export function CenterWords() {
  return (
    <main className={style.centerWords}>
      <nav className={style.grid}>
      <Link to='/as' className={`${style.circle} ${style.as}`}>Aš</Link>
        <Link to='/tu' className={`${style.circle} ${style.tu}`}>Tu</Link>
        <Link to='/ji' className={`${style.circle} ${style.ji}`}>Ji</Link>
        <Link to='/jis' className={`${style.circle} ${style.jis}`}>Jis</Link>

        <Link to='/mes' className={`${style.circle} ${style.mes}`}>Mes</Link>
        <Link to='/jus' className={`${style.circle} ${style.jus}`}>Jūs</Link>
        <Link to='/jie' className={`${style.circle} ${style.jie}`}>Jie</Link>
        <Link to='/jos' className={`${style.circle} ${style.jos}`}>Jos</Link>


      </nav>
    </main>
  );
}