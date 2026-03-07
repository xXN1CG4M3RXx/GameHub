import '../css/index.css'

function Games() {
    return (
        <div className='main-container'>
            <header>
                <ul className='navBar'>
                    <li className='navItem'><a href="/">Home</a></li>
                    <li className='navItem'><a href="#">Games</a></li>
                    <li className='navItem'><a href="#">Legal</a></li>
                </ul>

                <h1>Games</h1>
            </header>

            <div>
                <div className='gameCard'>
                    <h2 className='gameTitle'>Cookie Clicker</h2>
                    <p className='gameIcon'>🍪</p>
                    <p className='gameDesc'>Your standart clicking game</p>
                </div>
            </div>
        </div>
    )
}

export default Games