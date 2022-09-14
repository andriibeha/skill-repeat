import s from "./Header.module.scss"

const Header = () => {


    return (
        <header className={s.header}>
            <ul className={s.header__nav}>
                <li className={s.nav__item}><a className={s.nav__link} href="">Home</a></li>
                <li className={s.nav__item}><a className={s.nav__link} href="">Hero</a></li>
                <li className={s.nav__item}><a className={s.nav__link} href="">Main</a></li>
            </ul>
        </header>
    );
};

export default Header;