import React from "react";
import Github from '../images/icons/icons8-github-250.svg'
import ProjectsImage from '../images/imgProject.jpg'

const Projects = () => (
    <section className="projects" id="portfolio">
            <div className="wrap">
                <h1 className="titleAbout">Portfólio</h1>

                <h4>Estes são alguns dos meus projetos finalizados. Visite a minha página do GitHub para conhecer mais!</h4>
                {/* POR ENQUANTO SAO APENAS EXEMPLOS */}
                <div className="gridProjects">
                    <div className="cardProjects">
                        <img src={ProjectsImage} alt="" title="Projeto de site" className="imgCard" />
                        <h3>Projeto 1 - Front-end</h3>
                        <span className="textProjects">Projeto Corporativo - Site institucional</span>
                        <div className="btnProjects">
                            <a href="https://github.com/carlafurio?tab=repositories" className="linkRepGithub">
                                <img src={Github} alt="Github" title="Github" className="repGithub" />Repositório Github
                            </a>
                        </div>
                    </div>
                    <div className="cardProjects">
                        <img src={ProjectsImage} alt="" title="Projeto de site" className="imgCard" />
                        <h3>Projeto 1 - Front-end</h3>
                        <span className="textProjects">Projeto Corporativo - Site institucional</span>
                        <div className="btnProjects">
                            <a href="https://github.com/carlafurio?tab=repositories" className="linkRepGithub">
                                <img src={Github} alt="Github" title="Github" className="repGithub" />Repositório Github
                            </a>
                        </div>
                    </div>
                    <div className="cardProjects">
                        <img src={ProjectsImage} alt="" title="Projeto de site" className="imgCard" />
                        <h3>Projeto 1 - Front-end</h3>
                        <span className="textProjects">Projeto Corporativo - Site institucional</span>
                        <div className="btnProjects">
                            <a href="https://github.com/carlafurio?tab=repositories" className="linkRepGithub">
                                <img src={Github} alt="Github" title="Github" className="repGithub" />Repositório Github
                            </a>
                        </div>
                    </div>
                    <div className="cardProjects">
                        <img src={ProjectsImage} alt="" title="Projeto de site" className="imgCard" />
                        <h3>Projeto 1 - Front-end</h3>
                        <span className="textProjects">Projeto Corporativo - Site institucional</span>
                        <div className="btnProjects">
                            <a href="https://github.com/carlafurio?tab=repositories" className="linkRepGithub">
                                <img src={Github} alt="Github" title="Github" className="repGithub" />Repositório Github
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
);

export default Projects;