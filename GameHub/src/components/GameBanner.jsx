import style from './GameBanner.module.css'
import { useNavigate } from 'react-router-dom'

export default function GameBanner({ icon = "❔", title = "Undefined", description = "Game details undefined...", path = "/games" }) {
    const navigate = useNavigate();
    const accountId = localStorage.getItem("accountId");

    function handleClick() {
        if (accountId) {
            navigate(path);
        } else {
            navigate("/account/signup");
        }
    }

    return (
        <div className={style.gameBanner} onClick={handleClick}>
            <h2 className={style.gameTitle}>{title}</h2>
            <p className={style.gameIcon}>{icon}</p>
            <p className={style.gameDescription}>{description}</p>
        </div>
    )
}