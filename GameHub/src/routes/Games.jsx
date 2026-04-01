import "./Games.css";

import { useOutlet } from "react-router-dom";

import GameBanner from "../components/GameBanner";

export default function Games() {
    const outlet = useOutlet();

    return (
        <>
            {outlet ? outlet : (
                <div className="bannerContainer">
                    <GameBanner icon="🍪" title="Cookie Clicker" description="Click the cookie to earn cookies!" path="/games/cookie-clicker" />
                    <GameBanner icon="🐍" title="Snake" description="Eat the food to grow longer!" path="/games/snake" />
                    <GameBanner icon="🐦" title="Flappy Bird" description="Don't touch the pipes" path="/games/flappy-bird" />
                </div>
            )}
        </>
    )
}