import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { SearchBar } from '../search/SearchBar';
import { useState } from 'react';
import { Logo } from '../logo/logo';

export function Header() {
    const [searchOpen] = useState(true);

   return  (
    <header className={`${style.header} ${searchOpen ? style.headerStandart : style.headerSearch}`} >
            <div className={searchOpen ? style.logoBox : style.logoBoxClose}>
                <Link className={style.headerLogo} to="/"><Logo/></Link>
            </div>
            <div className={searchOpen ? style.searchBox : style.searchBoxClose}> 
                <SearchBar />
            </div>
            
    </header>
    );
}