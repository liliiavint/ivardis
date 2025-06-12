import style from './Jie.module.css';

export function Jie() {
    return (
        <main className={style.homeJie}>
            <div  className={`${style.circle} ${style.ju}`}>Jų</div>
            <div  className={`${style.circle} ${style.jiems}`}>Jiems</div>
            <div  className={`${style.circle} ${style.juos}`}>Juos</div>
            <div  className={`${style.circle} ${style.jais}`}>Jais</div>
            <div  className={`${style.circle} ${style.juose}`}>Juose</div>
        </main>
    )
}