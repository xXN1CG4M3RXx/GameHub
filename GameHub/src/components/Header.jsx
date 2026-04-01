import { Link } from 'react-router-dom';

import style from './Header.module.css'

export default function Header() {
    return (
        <nav className={style.navBar}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/games">Games</Link>
                </li>
                <li>
                    <Link to="/account">Account</Link>
                </li>
            </ul>
        </nav>
    )
}