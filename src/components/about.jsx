import React from "react";

const About = () => (
    <section className="about" id="about" >
            <div className="wrap">
                <h1 className="titleAbout">Quem sou?</h1>
                <div>
                    <p>Olá Mundo! Eu sou a Carla e estou começando a me aventurar no mundo da tecnologia! Aqui você pode saber mais sobre mim, entrar em contato e conhecer minhas redes.</p>
                    <p>Possuo uma graduação em Ciências Contábeis e pós em Auditoria, Controladoria e Finanças, porém, o meu amor por criar coisas novas fez eu me aproximar de programação e desenvolvimento e agora busco estudar cada dia mais.</p>
                    <p>Eu aprendi a linguagem de programação PHP, foi meu primeiro contato com a área de desenvolvimento web. Como queria aprimorar ainda mais meus conhecimentos, busquei o curso de front-end, onde aprendi a desenvolver este site.</p>
                    <p>Espero que aqui consigam me conhecer melhor e acompanhar meu trabalho!</p>

                </div>
                <div className="conhecimentos">
                    <div className="wrap">
                        <h2 className="titleAbout">Conhecimentos e Soft Skills!</h2>
                        <div className="boxHabil">
                            <span className="habil">HTML5</span>
                            <span className="habil">CSS3</span>
                            <span className="habil">JavaScript</span>
                            <span className="habil">PHP</span>
                            <span className="habil">MySql</span>
                            <span className="habil">POO</span>
                            <span className="habil">Vmix</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
);

export default About;
