import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { SearchBar } from '../search/SearchBar';
import { useState } from 'react';
import { LuMenuSquare } from "react-icons/lu";
import { IoClose, IoSearch } from "react-icons/io5";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(true);

    const searchBtn = (<span className={style.searchBtn}><IoSearch /></span>);
    const closeSearchBtn = (<span className={style.closeSearchBtn}><IoClose /></span>);

    const openMenuBtn = (<span className={style.menuBtn}><LuMenuSquare /></span>);
    const closeMenuBtn = (<span className={style.closeMenuBtn}><LuMenuSquare /></span>);



   return  (
    <header className={searchOpen ? style.headerStandart : style.headerSearch} >
            <div className={style.logoBox}>
                <Link to="/"><img src="/logo.png" alt="Logo" className={style.logo} /></Link>
            </div>
            <div className={searchOpen ? style.searchBox : style.searchBoxClose}> 
                <SearchBar />
            </div>
            <div className={style.menuBtnBox}>
                <span className={searchOpen ? style.searchBtn : style.searchBtnClose} 
                    onClick={() => {setSearchOpen(!searchOpen)}}>{searchOpen ? searchBtn : closeSearchBtn}
                </span>
                <span className={searchOpen ? style.menuBtn : style.menuBtnClose} 
                    onClick={() => {setMenuOpen(!menuOpen)}} >{menuOpen ? openMenuBtn : closeMenuBtn}
                </span>
            </div>
    </header>
    );
}