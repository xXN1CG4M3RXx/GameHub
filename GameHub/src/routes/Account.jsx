import { useState, useEffect } from "react";
import { Link, useOutlet, useLocation } from "react-router-dom";
import "./Account.css";

export default function Account() {
    const [accountId, setAccountId] = useState(localStorage.getItem("accountId"));
    const [cookies, setCookies] = useState(0);

    const outlet = useOutlet();
    const location = useLocation();

    useEffect(() => {
        const id = localStorage.getItem("accountId");
        setAccountId(id);
        if (id) {
            fetch(`http://localhost:3001/users/${id}`)
                .then(response => response.json())
                .then(data => {
                    if (data && data.cookies !== undefined) {
                        setCookies(data.cookies);
                    }
                })
                .catch(err => console.error(err));
        }
    }, [location.pathname]);

    function copyId(text) {
        navigator.clipboard.writeText(text);
    }

    return (
        <>
            {outlet ? outlet : (
                <>
                    <h1>Account</h1>
                    {accountId ? (
                        <>
                            <p>Account ID: {accountId} <button className="copy-button" onClick={() => copyId(accountId)}><img src="/src/assets/copy_icon.svg" alt="Copy" /></button></p>
                            <p>Cookies: {cookies}</p>
                        </>
                    ) : (
                        <>
                            <p>Not logged in</p>
                            <hr />
                            <h2><Link to="signup">Signup</Link></h2>
                            <h2>or</h2>
                            <h2><Link to="login">Login</Link></h2>
                        </>
                    )}
                </>
            )}
        </>
    )
}