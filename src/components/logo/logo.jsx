import logo from '../../assets/logo.png';
import style from './logo.module.css'

export function Logo() {
    return (
        <img className={style.logo} src={logo} alt="" />
    )
}