import { Link } from 'react-router-dom';
import style from './HomeList.module.css';

export function HomeList() {
    return (
        <aside className={style.HomeList}>
            <nav>
                <Link to='/vardininkas' className={`${style.link} ${style.vard}`}>
                    <span className={style.vardininkasText}>Vardininkas</span>{' '} 
                    <span className={style.kasText}>Kas?</span>
                </Link>
                    <Link to='/kilmininkas' className={`${style.link} ${style.kilm}`}>
                    <span className={style.kilmininkasText}>Kilmininkas</span>{' '} 
                    <span className={style.koText}>Ko?</span>
                </Link>
                <Link to='/naudininkas' className={`${style.link} ${style.naud}`}>
                    <span className={style.naudininkasText}>Naudininkas</span>{' '} 
                    <span className={style.kamText}>Kam?</span></Link>
                <Link to='/galininkas' className={`${style.link} ${style.galin}`}>
                        <span className={style.galininkasText}>Galininkas</span>{' '} 
                        <span className={style.kaText}>Ką?</span>
                </Link>
                <Link to='/inagininkas' className={`${style.link} ${style.inag}`}>
                    <span className={style.inagininkasText}>Inagininkas</span>{' '} 
                    <span className={style.kuoText}>Kuo?</span>
                </Link>
                <Link to='/vietininkas' className={`${style.link} ${style.viet}`}>
                    <span className={style.vietininkasText}>Vietininkas</span>{' '} 
                    <span className={style.kurText}>Kur? Kame?</span>
                </Link>
            </nav>
        </aside>
    );
}