import { Link } from 'react-router-dom';
import style from './HomeList.module.css';

export function HomeList() {
    return (
        <aside className={style.header}>
            <nav>
                <Link to='/vardininkas'>Basketball</Link>
                <Link to='/kilmininkas'>Vegetables</Link>
                <Link to='/naudininkas'>Students</Link>
                <Link to='/galininkas'>Register</Link>
                <Link to='/inagininkas'>Spice</Link>
                <Link to='/vietininkas'>Spice</Link>
            </nav>
        </aside>
    );
}