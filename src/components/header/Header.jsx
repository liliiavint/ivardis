import { Link, useLocation} from 'react-router-dom';
import style from './Header.module.css';
import { SearchBar } from '../search/SearchBar';
import { useState } from 'react';
import { Logo } from '../logo/logo';

export function Header() {
    const [searchOpen] = useState(true);
    const location = useLocation();
    const routeTitles = {
      '/jus': 'Jūs - Ви',
      '/mes': 'Mes - Ми',
      '/jie': 'Jie - Вони',
      '/jos': 'Jos - Вони'
    };
    const title = routeTitles[location.pathname];

   return  (
    <header className={`${style.header} ${style.container} ${searchOpen ? style.headerStandart : style.headerSearch}`} >
            <div className={searchOpen ? style.logoBox : style.logoBoxClose}>
                <Link className={style.headerLogo} to="/"><Logo/></Link>
                {title && <h1 className={style.circle}>{title}</h1>}
            </div>
           
            <div className={searchOpen ? style.searchBox : style.searchBoxClose}> 
                <SearchBar />
            </div>
          
    </header>
    );
}