import '../css/index.css'

function Home() {
    return (
        <div className='main-container'>
            <header>
                <ul className='navBar'>
                    <li className='navItem'><a href="/">Home</a></li>
                    <li className='navItem'><a href="/games">Games</a></li>
                    <li className='navItem'><a href="#">Legal</a></li>
                </ul>
            </header>
        </div>
    )
}

export default Home