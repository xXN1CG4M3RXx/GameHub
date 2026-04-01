import style from "./SignupForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    function createAccount(event) {
        event.preventDefault();
        fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
            }),
        })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("accountId", data.id);
                navigate("/account");
            })
            .catch(err => console.error(err));
    }

    return (
        <form onSubmit={createAccount}>
            <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
            <button type="submit">Create Account</button>
        </form>
    )
}