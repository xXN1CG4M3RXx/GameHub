import style from "./CookieLane.module.css";
import { useState, useEffect } from "react";

export default function CookieLane() {
    const [cookies, setCookies] = useState(0);

    useEffect(() => {
        const accountId = localStorage.getItem("accountId");
        if (accountId) {
            fetch(`http://localhost:3001/users/${accountId}`)
                .then(res => res.json())
                .then(data => {
                    if (data && data.cookies !== undefined) {
                        setCookies(data.cookies);
                    }
                })
                .catch(err => console.error(err));
        }
    }, []);

    async function cookieClick() {
        setCookies(cookies + 1);
        await fetch(`http://localhost:3001/users/${localStorage.getItem("accountId")}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                cookies: cookies + 1
            })
        });
    }

    return (
        <div>
            <h2>Cookies: {cookies}</h2>
            <p className={style.cookie} onClick={cookieClick}>🍪</p>
        </div>
    )
}