import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/index.css'
import About from '../pages/About.jsx'

createRoot(document.getElementById('about')).render(
    <StrictMode>
        <About />
    </StrictMode>,
)