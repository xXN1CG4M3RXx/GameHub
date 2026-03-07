import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/index.css'
import Games from '../pages/Games.jsx'

createRoot(document.getElementById('games')).render(
    <StrictMode>
        <Games />
    </StrictMode>,
)