import style from './Footer.module.css';

export function Footer() {
    return (
        <footer className={`${style.footer} ${style.container} `}>
            <p className={style.footerText}>
            Projektas apie lietuvių kalbos įvardžius</p>
            Copyright &copy; 2025
        </footer>
    );
}