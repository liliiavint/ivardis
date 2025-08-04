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
                <div className={ style.jus}>
                    <div className={style.head}>
                        <h2> Galininkas. Ką? Jus</h2>
                    </div>
                    <div className={style.groupblock}>
                        <div className={`${style.block1} ${style.block}`}>
                            <h3 className={style.text}>Напрямок руху до когось</h3>
                            <p className={style.text1}>Einu pas jus. Я йду до вас. </p>
                            <p className={style.text1}>Aš važiuoju pas jus. Я їду до вас.</p>
                            <p className={style.text1}></p>
                        </div>
                        <div className={`${style.block1} ${style.block}`}>
                            <h3 className={style.text}>Ви є об’єктом дії</h3>
                            <p className={style.text1}>Mes girdime jus. – Ми чуємо вас. </p>
                            <p className={style.text1}>Kas kviečia jus? – Хто вас кличе?</p>
                        </div>
                        
                    </div>
                </div>
                <div className={ style.jus}>
                    <div className={style.head}>
                        <h2> Inagininkas. Kuo? Jumis</h2>
                    </div>
                    <div className={style.groupblock}>
                        <div className={`${style.block1} ${style.block}`}>
                            <h3 className={style.text}>Вживається без прийменника su, з дієсловами які керують орудним відмінком.</h3>
                            <p className={style.text1}>Aš didžiuosi jumis. Я пишаюся вами. </p>
                            <p className={style.text1}>Aš domiuosi jumis. Я цікавлюсь вами.</p>
                            <p className={style.text1}>Aš naudojuosi jumis. Я користуюсь вами.</p>
                            <p className={style.text1}></p>
                        </div>
                        <div className={`${style.block1} ${style.block}`}>
                            <h3 className={style.text}>Вживається з прийменником su, з дієсловами які керують орудним відмінком.</h3>
                            <p className={style.text1}>Aš kovosiu kartu su jumis. – Я боротимусь разом із вами. </p>
                            <p className={style.text1}>Ačiū, kad buvote su mumis. Mes džiaugiamės jumis. – Дякуємо, що були з нами. Ми раді вам.</p>
                            <p className={style.text1}>Jis nesutinka su jumis. – Він не погоджується з вами.</p>
                        </div>
                    </div>
                </div>
                <div className={ style.jus}>
                    <div className={style.head}>
                        <h2> Vietininkas. Kur? Kame?</h2>
                    </div>
                    <div className={style.groupblock}>
                        <div className={`${style.block1} ${style.block}`}>
                            <h3 className={style.text}>Jymyse - У вас.</h3>
                                <p className={style.text1}>Aš matau daug gėrio jumyse.– Я бачу багато добра у вас. </p>
                                <p className={style.text1}>Yra kažkas ypatingo jumyse.– У вас є щось особливе.</p>
                                <p className={style.text1}>Viltis dar gyva jumyse.– Надія ще жива у вас.</p>
                                <p className={style.text1}>Ar tikrai nėra baimės jumyse?– Невже у вас справді немає страху?</p>
                                <p className={style.text1}>Aš tikiu jumyse slypinčiu potencialu.– Я вірю у потенціал, що є у вас.</p>
                                <p className={style.text1}>Tamsa jumyse gali būti įveikta.– Темряву в собі можна подолати.</p>
                        </div>
                    <div className={style.groupblock}>
                        <div className={`${style.block1} ${style.block}`}>
                            <h3 className={style.text}>„Kur?“ – Де? (Мова про фізичне або абстрактне місцезнаходження)</h3>
                            <p className={style.text1}>Q: Kur yra ta stiprybė? A: Jumyse.– Де та сила? – У вас. </p>
                            <p className={style.text1}>Q: Kur slypi atsakymas? A: Atsakymas slypi jumyse.– Де криється відповідь? – Вона криється у вас.</p>
                            <h3 className={style.text}>„Kame?“ – У чому?
                            (Мова про внутрішній стан, емоції, властивості)</h3>
                            <p className={style.text1}>Q: Kame problema? A: Problema jumyse.– У чому проблема? – Проблема у вас.</p>
                            <p className={style.text1}>Q: Kame yra jūsų stiprybė?A: Stiprybė yra jumyse.– У чому ваша сила? – Сила у вас.</p>
                            <p className={style.text1}>Q: Kame paslaptis? A: Paslaptis jumyse.– У чому таємниця? – Таємниця у вас.</p>                            
                        </div>
                    </div>
                </div>
            </div>
    </main>
  )
}