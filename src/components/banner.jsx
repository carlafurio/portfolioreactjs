import React from "react";
import Github from '../images/icons/icons8-github-250.svg'
import Linkedin from '../images/icons/icons8-linkedin-250.svg'
import BannerImage from '../images/imgBanner3.png'

const Banner = () => (
    <section className="bannerPage" id="inicial">
            <div className="wrap column1">
                <div className="titleBanner">
                    <h1 className="textBanner">
                        <span className="nome">Carla Furio<span className="icone">!</span></span><br />
                        <span className="funcao">Desenvolvedora | <span className="prog">Full Stack</span></span>
                    </h1>
                    <div className="btnPortfolio">
                        <a href="https://github.com/carlafurio?tab=repositories" className="linkGithub">
                            <img src={Github} alt="Github" title="Github" className="github" />Github
                        </a>
                        <a href="https://www.linkedin.com/in/carlafurio/" className="linkLinkedin"><img
                            src={Linkedin} alt="LinkedIn" title="LinkedIn"
                            className="linkedin" />LinkedIn
                        </a>
                    </div>
                </div>
                <img src={BannerImage} alt="Imagem para apresentação" title="Imagem para apresentação" className="imgBanner" />
            </div>
        </section>
);
export default Banner;