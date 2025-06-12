import style from './Jos.module.css';

export function Jos() {
    return (
        <main className={style.homeJos}>
        <div className={`${style.circle} ${style.ju}`}>Jų</div>
        <div className={`${style.circle} ${style.joms}`}>Joms</div>
        <div className={`${style.circle} ${style.jas}`}>Jas</div>
        <div className={`${style.circle} ${style.jomis}`}>Jomis</div>
        <div className={`${style.circle} ${style.jose}`}>Jose</div>
        </main>
    )
}