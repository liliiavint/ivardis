import { Link } from 'react-router-dom';
import style from './CenterWord.module.css';

export function CenterWord() {
    return (
        <main className={style.header}>
            <nav>
                <Link to='/ji'>Ji</Link>
                <Link to='/Jis'>Jis</Link>
                <Link to='/as'>As</Link>
                <Link to='/mes'>Mes</Link>
                <Link to='/tu'>Tu</Link>
                <Link to='/jus'>Jus</Link>
                <Link to='/jie'>Jie</Link>
                <Link to='/jos'>Jos</Link>
                
            </nav>
        </main>
    );
}