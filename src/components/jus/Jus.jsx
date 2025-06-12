import style from './Jus.module.css';

export function Jus() {
    return (
        <main className={style.homeJus}>
            <div className={`${style.circle} ${style.jusu}`}>Jūsų</div>
        <div className={`${style.circle} ${style.jums}`}>Jums</div>
        <div className={`${style.circle} ${style.jus}`}>Jus</div>
        <div className={`${style.circle} ${style.jumis}`}>Jumis</div>
        <div className={`${style.circle} ${style.jumyse}`}>Jumyse</div>
        </main>
    )
}