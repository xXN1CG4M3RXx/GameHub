import { useState } from "react";

import SignupForm from "../components/SignupForm";

export default function Signup() {
    const [username, setUsername] = useState("");

    return (
        <>
            <h1>Create Account</h1>

            <SignupForm />
        </>
    )
}