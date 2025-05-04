import { CenterWords } from "../home-section/center/CenterWords";
import { HomeList} from "../home-section/list/HomeList";
import style from './HomeSection.module.css';

export function HomeSection() {
        return (
            <main className={style.home}>
              <div className={style.homeList}>
                <HomeList />
              </div>
              <div className={style.centerWords}>
                <CenterWords />
              </div>
            </main>
    )
}