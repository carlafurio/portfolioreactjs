import React from "react";
import Linkedin from '../images/icons/iconIn.svg'
import Github from '../images/icons/iconGithub.svg'
import Behance from '../images/icons/iconBe.svg'
import Facebook from '../images/icons/iconFb.svg'
import Instagram from '../images/icons/iconIg.svg'
import LogoNome from '../images/logocomnome.png'

const Footer = () => (
    <footer className="endPage">
            <section className="infoFooter" id="footer">
                <div className="wrap">
                    <div className="iconsRS">
                        <h1 className="textFooter">Redes Sociais</h1>
                        <a href="https://www.linkedin.com/in/carlafurio/" className="linkRedes">
                            <img src={Linkedin} alt="LinkedIn" title="LinkedIn" className="iconsLink"/>
                        </a>
                        <a href="https://github.com/carlafurio" class="linkRedes">
                            <img src={Github} alt="GitHub" title="GitHub" className="iconsLink"/>
                        </a>
                        <a href="https://www.behance.net/carlafurio" className="linkRedes">
                            <img src={Behance} alt="Behance" title="Behance" className="iconsLink"/>
                        </a>
                        <a href="https://www.facebook.com/carla.furio.9" className="linkRedes">
                            <img src={Facebook} alt="Facebook" title="Facebook" className="iconsLink"/>
                        </a>
                        <a href="https://www.instagram.com/carlaafurio/" className="linkRedes">
                            <img src={Instagram} alt="Instagram" title="Instagram" className="iconsLink"/>
                        </a>
                    </div>
                </div>
            </section>
            <section>
                <div className="wrap">
                    <div className="infoCopy">
                        <p> © 2023 - Todos os direitos reservados</p>
                        <a href="#inicial"><img src={LogoNome} alt="logotipo" title="logotipo" className="logotipoFooter"/></a>
                    </div>
                </div>
            </section>
        
        </footer>
)
export default Footer;