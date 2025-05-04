import style from './Footer.module.css';

export function Footer() {
    return (
        <footer className={style.footer}>
            <p className={style.footerText}>
            Projektas apie lietuvių kalbos įvardžius</p>
            Copyright &copy; 2025
        </footer>
    );
}