import style from "./LoginForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const [accountId, setAccountId] = useState("");
    const navigate = useNavigate();

    function login(event) {
        event.preventDefault();
        fetch(`http://localhost:3001/users/${accountId}`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    localStorage.setItem("accountId", data.id);
                    navigate("/account");
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <form onSubmit={login}>
            <input type="text" placeholder="Account ID" value={accountId} onChange={(event) => setAccountId(event.target.value)} />
            <button type="submit">Login</button>
        </form>
    )
}