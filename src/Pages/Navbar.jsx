import React from 'react'

function Navbar() {
    return (
        <>
                <header>
                        <nav>
                            <div class="logo">
                                <h1>Fintech</h1>
                            </div>
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Process</a></li>
                                <li><a href="">Testimony</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                            <box-icon name='menu' color="whitesmoke" size="lg" id="menu"></box-icon>
                        </nav>
                        <div class="header-content">
                            <h1>Fintech Provide Solutions To Your Business Needs Whatever They Maybe.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Culpa, autem.Dolores, voluptatibus. Maiores nobis sequi magnam.</p>
                            <form>
                                <input type="text" placeholder="Enter your Name"/>
                                <input type="email" placeholder="Enter your email"/>
                                <input type="submit" value="Subscribe"/>
                            </form>
                        </div>
                 </header>
        </>
    )
}

export default Navbar
