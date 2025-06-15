import style from './Jus.module.css';

export function Jus() {
    return (
        <main className={style.homeJus}>
                <div className={ style.jusu}>
                    <div className={style.head}>
                        <h2> Kilmininkas. Ko? Jūsų</h2>
                    </div>
                    <div className={style.groupblock}>
                        <div className={style.block}>
                            <h3 className={style.text}>Приналежність</h3>
                            <p className={style.text1}>Jūsų knyga – labai įdomi. - Ваша книга дуже цікава. </p>
                            <p className={style.text1}>Jūsų automobilis laukia lauke. — Ваш автомобіль чекає на вулиці.</p>
                        </div>
                        <div className={style.block}>  
                            <h3 className={style.text}>Об'єкт дії, напрямок</h3>
                            <p className={style.text1}>Aš ieškau jūsų.- Я шукаю вас.</p>
                            <p className={style.text1}>Jūsų bankas - arčiau jūsų. - Ваш банк - ближче до Вас</p>
                            <p className={style.text1}>Mes laukiame jūsų. — Ми чекаємо на вас.</p>
                            <p className={style.text1}>Arčiau jūsų — Ближче до вас.</p>
                        </div>
                        <div className={style.block}> 
                            <h3 className={style.text}>Причина, джерело</h3>
                            <p className={style.text1}>"Dėl jūsų" - Через вас / Завдяки вам.</p>
                        </div>
                        <div className={style.block}>
                            <h3 className={style.text}>Об'єкт бажання, потреби або думки</h3>
                            <p className={style.text1}>"Man reikia jūsų patarimo" - Мені потрібна ваша порада.</p>
                            <p className={style.text1}>Jūsų nuomonė mums svarbi. - Ваша думка важлива для нас.</p>
                        </div>
                    </div>
                </div>
                 <div className={ style.jums}>
                    <div className={style.head}>
                        <h2> Naudininkas. Kam? Jums</h2>
                    </div>
                    <div className={style.groupblock}>
                        <div className={`${style.block1} ${style.block}`}>
                            <h3 className={style.text}>Позначає адресата, особу, на яку спрямована дія або якій вона вигідна.</h3>
                            <p className={style.text1}>Tai yra jums. – Це вам. </p>
                            <p className={style.text1}>Padėka jums už pagalbą. – Подяка вам за допомогу.</p>
                            <p className={style.text1}>Aš jums daviau pavyzdį. Я навів тобі приклад</p>
                        </div>
                    </div>
                </div>
                <div className={`${style.circle} ${style.jus}`}>Jus</div>
                <div className={`${style.circle} ${style.jumis}`}>Jumis</div>
                <div className={`${style.circle} ${style.jumyse}`}>Jumyse</div>
        </main>
    )
}