import React from "react";
import LogotipoHeader from '../images/logosimples.png';


const HeaderPage = () => (
        <header className="top" id="top">
            <section className="logotipo">
                <img src={LogotipoHeader} alt="Aqui esta o Logotipo!" title="Aqui esta o Logotipo!"
                    className="imgLogotipo"/>
            </section>
            <section className="menuWeb">
                <div className="wrap">
                    <nav className="menuMobile">
                        <ul className="menuOne">
                            <li className="nav-item"><a href="#inicial" className="linkMenuMobile">home</a></li>
                            <li className="nav-item"><a href="#about" className="linkMenuMobile">quem sou</a></li>
                            <li className="nav-item"><a href="#portfolio" className="linkMenuMobile">portfolio</a></li>
                            <li className="nav-item"><a href="#contatos" className="linkMenuMobile">contato</a></li>
                            <li className="nav-item"><a href="#footer" className="linkMenuMobile">redes sociais</a></li>
                        </ul>
                        <div className="hamburguer">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </nav>
                    <nav className="menuDesktop">
                        <ul className="menuTwo">
                            <li><a href="#inicial" className="linkMenuDesktop">home</a></li>
                            <li><a href="#about" className="linkMenuDesktop">quem sou</a></li>
                            <li><a href="#portfolio" className="linkMenuDesktop">portfolio</a></li>
                            <li><a href="#contatos" className="linkMenuDesktop">contato</a></li>
                            <li><a href="#footer" className="linkMenuDesktop">redes sociais</a></li>
                        </ul>
                    </nav>
                </div>
            </section>
            <script src="../menu.js"/>
        </header>
);

export default HeaderPage;

