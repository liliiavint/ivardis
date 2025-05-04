import { Link } from 'react-router-dom';
import style from './HomeList.module.css';

export function HomeList() {
    return (
        <aside className={style.HomeList}>
            <nav>
                <Link to='/vardininkas' className={`${style.link} ${style.vard}`}>Vardininkas</Link>
                <Link to='/kilmininkas' className={`${style.link} ${style.kilm}`}>Kilmininkas</Link>
                <Link to='/naudininkas' className={`${style.link} ${style.naud}`}>Naudininkas</Link>
                <Link to='/galininkas' className={`${style.link} ${style.galin}`}>Galininkas</Link>
                <Link to='/inagininkas' className={`${style.link} ${style.inag}`}>Inagininkas</Link>
                <Link to='/vietininkas' className={`${style.link} ${style.kilm}`}>Vietininkas</Link>
            </nav>
        </aside>
    );
}