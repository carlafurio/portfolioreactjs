import React, { useState } from 'react';
import LogotipoHeader from '../images/logosimples.png'

const MenuMobile = () => {

    const [classOn, setClassOn] = useState(false);

    return (
        <header>
            <section className="container">
                <div className="logotipo">
                    <img src={LogotipoHeader} alt="Logotipo CARLA FURIO" title="Logotipo CARLA FURIO" className="imgLogotipo" />
                </div>

                <div className={classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
                    <div className="menu-toggle">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>

                    <nav>
                        <ul>
                            <li className="nav-item"><a href="">home</a></li>
                            <li className="nav-item"><a href="#about">quem sou</a></li>
                            <li className="nav-item"><a href="#portfolio">portfólio</a></li>
                            <li className="nav-item"><a href="#contatos">contato</a></li>
                            <li className="nav-item"><a href="#footer">redes sociais</a></li>
                        </ul>
                    </nav>
                </div>
            </section>
        </header>
    )
}

export default MenuMobile;