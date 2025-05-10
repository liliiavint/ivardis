import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { SearchBar } from '../search/SearchBar';
import { useState } from 'react';
import { IoClose, IoSearch } from "react-icons/io5";
import { Logo } from '../logo/logo';

export function Header() {
    const [searchOpen, setSearchOpen] = useState(true);

    const searchBtn = (<span className={style.searchBtn}><IoSearch /></span>);
    const closeSearchBtn = (<span className={style.closeSearchBtn}><IoClose /></span>);




   return  (
    <header className={searchOpen ? style.headerStandart : style.headerSearch} >
            <div className={searchOpen ? style.logoBox : style.logoBoxClose}>
                <Link className={style.headerLogo} to="/"><Logo/></Link>
            </div>
            <div className={searchOpen ? style.searchBox : style.searchBoxClose}> 
                <SearchBar />
            </div>
            <div className={style.menuBtnBox}>
                <span className={searchOpen ? style.searchBtn : style.searchBtnClose} 
                    onClick={() => {setSearchOpen(!searchOpen)}}>{searchOpen ? searchBtn : closeSearchBtn}
                </span>

            </div>
    </header>
    );
}