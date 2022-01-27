import React, { useRef, useState } from 'react'
import Modal from 'react-modal'
import ScrollToTop from './components/ScrollToTop'
import './App.css'
import './components/Header.css'
import './components/HeroSection.css'
import './components/SobreMim.css'
import './components/Tecnologias.css'
import './components/Projetos.css'
import './components/Contatos.css'
import './components/Footer.css'
import 'aos/dist/aos.css';
import AOS from 'aos';

Modal.setAppElement('#root')




export default () => {

        const [modalIsOpen1, setModalIsOpen1] = useState(false)
        const [modalIsOpen2, setModalIsOpen2] = useState(false)
        const [modalIsOpen3, setModalIsOpen3] = useState(false)

        const [show, setShow] = useState(false)

        const scrollSobremim = useRef(null)
        const scrollTecnologias = useRef(null)
        const scrollProjetos = useRef(null)
        const scrollContatos = useRef(null)

        
        const gotoHomeSection = () => window.scrollTo({ top: 0, behavior: "smooth"})
        const gotoSobremimSection = () => window.scrollTo({ top: scrollSobremim.current.offsetTop, behavior: "smooth"})
        const gotoTecnologiasSection = () => window.scrollTo({ top: scrollTecnologias.current.offsetTop, behavior: "smooth"})
        const gotoProjetosSection = () => window.scrollTo({ top: scrollProjetos.current.offsetTop, behavior: "smooth"})
        const gotoContatosSection = () => window.scrollTo({ top: scrollContatos.current.offsetTop, behavior: "smooth"})


    return (
        <section>
            {/*--------------------------------------*/}
            {/*               HEADER                 */}
            {/*--------------------------------------*/}


            <nav className="header">
                <a className="logo-header" href="https://victorluismf.github.io/portfolio"><img className="logo" src='https://victorluismf.github.io/portfolio/images/logo.png' width="auto" height="50"/></a>
                    <div className="menu">
                        <a className="home" onClick={gotoHomeSection} >HOME</a>
                        <a className="sobre-mim" onClick={gotoSobremimSection} >SOBRE MIM</a>
                        <a className="tecnologias" onClick={gotoTecnologiasSection} >TECNOLOGIAS</a>
                        <a className="projetos" onClick={gotoProjetosSection} >PROJETOS</a>
                        <a className="contatos" onClick={gotoContatosSection} >CONTATOS</a>
                        <a className="curriculo" href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:774012e1-7efc-443e-93b8-1cdc4940b314" target="_blank">CURRÍCULO</a>
                    </div>
                    <div className="menu-toggle" onClick={()=>setShow(true)}>
                        <div className="toggle1"></div>
                        <div className="toggle2"></div>
                        <div className="toggle3"></div>
                    </div>
            </nav>
            {
                show?
                    <nav className="header on">
                        <a className="logo-header" href="https://victorluismf.github.io/portfolio"><img className="logo" src='https://victorluismf.github.io/portfolio/images/logo.png' width="auto" height="50"/></a>
                            <div className="menu" onClick={()=>setShow(false)}>
                                <a className="home" onClick={gotoHomeSection}>HOME</a>
                                <a className="sobre-mim" onClick={gotoSobremimSection}>SOBRE MIM</a>
                                <a className="tecnologias" onClick={gotoTecnologiasSection}>TECNOLOGIAS</a>
                                <a className="projetos" onClick={gotoProjetosSection}>PROJETOS</a>
                                <a className="contatos" onClick={gotoContatosSection}>CONTATOS</a>
                                <a className="curriculo" href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:774012e1-7efc-443e-93b8-1cdc4940b314" target="_blank">CURRÍCULO</a>
                            </div>
                            <div className="menu-toggle" onClick={()=>setShow(false)}>
                                <div className="toggle1"></div>
                                <div className="toggle2"></div>
                                <div className="toggle3"></div>
                            </div>
                    </nav>
                :null
            } 

            {/*--------------------------------------*/}
            {/*            HERO SECTION              */}
            {/*--------------------------------------*/}


            <div className="hero-section">
                <div className="hero-text">
                    <h1 className="hero-text-title">Victor Luis</h1>
                    <h2 className="hero-text-subtitle">Desenvolvedor front-end | QA</h2>
                    <a className="btn-hero" href="https://whats.link/victorluismf" target="_blank">ENTRAR EM CONTATO</a>
                </div>
                <img className="hero-image" src='https://victorluismf.github.io/portfolio/images/heroimage.png' width="auto" height="50"/>
            </div>

            {/*--------------------------------------*/}
            {/*             SOBRE MIM                */}
            {/*--------------------------------------*/}


            <div className="sobremim-section">
                <div className="sobremim-card">
                    <div data-aos="fade-up" data-aos-delay="390" ref={scrollSobremim} className="imagem-sobremim">
                        <img className="sobremim-art" src="https://victorluismf.github.io/portfolio/images/sobremim.png" width="410" height="auto"/>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="190" className="text-sobremim">
                        <h1 className="h1-sobremim" >Sobre mim</h1>
                        <p className="p1-sobremim">▪ Atualmente sou Desenvolvedor front-end e QA.</p>
                        <p className="p2-sobremim">▪ HTML | JavaScript | CSS | React JS | Ruby | Cucumber</p>
                        <p className="p3-sobremim">▪ Estudante de Análise e Desenvolvimento de Sistemas.</p>
                        <p className="p4-sobremim">▪ Cursando Desenvolvimento Web pela Udemy.</p>
                        <p className="p5-sobremim">▪ Bootcamp na Digital Innovation One e Rocketseat.</p>
                    </div>
                </div>
            </div>

            {/*--------------------------------------*/}
            {/*            TECNOLOGIAS               */}
            {/*--------------------------------------*/}


            <div ref={scrollTecnologias}>  </div>
                <div className="tecnologias-section">
                    <div>
                        <h1 data-aos="zoom-in-up" className="tecnologias-title">Tecnologias</h1>
                    </div>
                <div className="tecnologias-card">
                    <div data-aos="zoom-in-up">
                        <div className="html-card">
                            <img className="html-icon" src='https://victorluismf.github.io/portfolio/images/html-icon.png' width="60" height="auto"/>
                            <h1 className="html-title">HTML</h1>
                            <p className="html-p">Linguagem de marcação utilizada na construção de páginas na Web.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up">
                        <div className="css-card">
                            <img className="css-icon" src='https://victorluismf.github.io/portfolio/images/css-icon.png' width="60" height="auto"/>
                            <h1 className="css-title">CSS</h1>
                            <p className="css-p">Mecânismo para adicionar estilo aos elementos da página web.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up">
                        <div className="javascript-card">
                            <img className="javascript-icon" src='https://victorluismf.github.io/portfolio/images/javascript-icon.png' width="60" height="auto"/>
                            <h1 className="javascript-title">JavaScript</h1>
                            <p className="javascript-p">Linguagem de programação interpretada, a mais utilizada atualmente.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up">
                        <div className="react-card">
                            <img className="react-icon" src='https://victorluismf.github.io/portfolio/images/react-icon.png' width="60" height="auto"/>
                            <h1 className="react-title">ReactJS</h1>
                            <p className="react-p">Biblioteca JavaScript de código aberto para criar features e interfaces de usuário.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up">
                        <div className="bootstrap-card">
                            <img className="bootstrap-icon" src='https://victorluismf.github.io/portfolio/images/bootstrap-icon.png' width="60" height="auto"/>
                            <h1 className="bootstrap-title">Bootstrap</h1>
                            <p className="bootstrap-p">Framework com código-fonte aberto para desenvolvimento de interface.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up">
                        <div className="node-card">
                            <img className="node-icon" src='https://victorluismf.github.io/portfolio/images/node-icon.png' width="60" height="auto"/>
                            <h1 className="node-title">NodeJS</h1>
                            <p className="node-p">Software de código aberto que permite a execução de códigos JavaScript.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up">
                        <div className="photoshop-card">
                            <img className="photoshop-icon" src='https://victorluismf.github.io/portfolio/images/photoshop-icon.png' width="60" height="auto"/>
                            <h1 className="photoshop-title">Photoshop</h1>
                            <p className="photoshop-p">Software focado em manipulação e edição de imagens bidimensionais.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up">
                        <div className="git-card">
                            <img className="git-icon" src='https://victorluismf.github.io/portfolio/images/git-icon.png' width="60" height="auto"/>
                            <h1 className="git-title">GIT</h1>
                            <p className="git-p">Sistema de controle de versões distribuído, usado no desenvolvimento de software.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/*--------------------------------------*/}
            {/*               PROJETOS               */}
            {/*--------------------------------------*/}


            <div ref={scrollProjetos} className="projetos-section">
                <h1 data-aos="fade-up" data-aos-delay="590" className="projetos-title">Projetos</h1>
                <div className="projetos1">
                    <div data-aos="fade-up" data-aos-delay="590" className="black-and-white-card">
                        <h2 className="black-and-white-title">Black & White</h2>
                        <img className="black-and-white" src='https://victorluismf.github.io/portfolio/images/projeto1-small.png' width="auto" height="300" onClick={() => setModalIsOpen1(true)}/>
                        <div className="black-modal">
                            <Modal 
                                isOpen={modalIsOpen1}
                                shouldCloseOnEsc={true}
                                shouldCloseOnOverlayClick={true}
                                onRequestClose={() => setModalIsOpen1(false)}
                                style={
                                    {
                                        overlay: {
                                            position: 'fixed',
                                            zIndex: '9',
                                            backgroundColor: '#16021fa2'
                                        },
                                        content: {
                                            borderColor: '#16021fd0',
                                            backgroundColor: '#16021fd0',
                                            color: 'white'
                                        }
                                    }
                                }
                                >
                                <img className="black-and-white-modal" src='https://victorluismf.github.io/portfolio/images/projeto1.png' width="auto" height="300"/>
                                <div >
                                    <button className='button-close' onClick={() => setModalIsOpen1(false)}>X</button>
                                </div>
                            </Modal>
                        </div>
                            <div className="black-and-white-icons">
                                <a href="https://victorluismf.github.io/black-and-white" target="_blank"><img className="black-and-white-plus" src='https://victorluismf.github.io/portfolio/images/play.png' width="auto" height="40"/></a>
                                <a href="https://github.com/victorluismf/black-and-white" target="_blank"><img className="black-and-white-github" src='https://victorluismf.github.io/portfolio/images/github.png' width="auto" height="40"/></a>
                            </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="590" className="responsive-card">
                        <h2 className="responsive-title">Responsive</h2>
                        <img className="responsive" src='https://victorluismf.github.io/portfolio/images/projeto2-small.png' width="auto" height="300" onClick={() => setModalIsOpen2(true)}/>
                        <Modal 
                                isOpen={modalIsOpen2}
                                shouldCloseOnEsc={true}
                                shouldCloseOnOverlayClick={true}
                                onRequestClose={() => setModalIsOpen2(false)}
                                style={
                                    {
                                        overlay: {
                                            position: 'fixed',
                                            zIndex: '9',
                                            backgroundColor: '#16021fa2'
                                        },
                                        content: {
                                            borderColor: '#16021fd0',
                                            backgroundColor: '#16021fd0',
                                            color: 'white'
                                        }
                                    }
                                }
                                >
                                <img className="responsive-modal" src='https://victorluismf.github.io/portfolio/images/projeto2.png' width="auto" height="300"/>
                                <div>
                                    <button className='button-close' onClick={() => setModalIsOpen2(false)}>X</button>
                                </div>
                            </Modal>
                            <div className="responsive-icons">
                                <a href="https://victorluismf.github.io/responsive" target="_blank"><img className="responsive-plus" src='https://victorluismf.github.io/portfolio/images/play.png' width="auto" height="40"/></a>
                                <a href="https://github.com/victorluismf/responsive" target="_blank"><img className="responsive-github" src='https://victorluismf.github.io/portfolio/images/github.png' width="auto" height="40"/></a>
                            </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="590" className="netflixclone-card">
                        <h2 className="netflixclone-title">Netflix Clone</h2>
                        <img className="netflixclone" src='https://victorluismf.github.io/portfolio/images/projeto3-small.png' width="auto" height="300" onClick={() => setModalIsOpen3(true)}/>
                        <Modal 
                                isOpen={modalIsOpen3}
                                shouldCloseOnEsc={true}
                                shouldCloseOnOverlayClick={true}
                                onRequestClose={() => setModalIsOpen3(false)}
                                style={
                                    {
                                        overlay: {
                                            position: 'fixed',
                                            zIndex: '9',
                                            backgroundColor: '#16021fa2'
                                        },
                                        content: {
                                            borderColor: '#16021fd0',
                                            backgroundColor: '#16021fd0',
                                            color: 'white'
                                        }
                                    }
                                }
                                >
                                <img className="netflixclone-modal" src='https://victorluismf.github.io/portfolio/images/projeto3.png' width="auto" height="300"/>
                                <div>
                                    <button className='button-close' onClick={() => setModalIsOpen3(false)}>X</button>
                                </div>
                            </Modal>
                            <div className="netflixclone-icons">
                                <a href="https://victorluismf.github.io/netflixclone" target="_blank"><img className="netflixclone-plus" src='https://victorluismf.github.io/portfolio/images/play.png' width="auto" height="40"/></a>
                                <a href="https://github.com/victorluismf/netflixclone" target="_blank"><img className="netflixclone-github" src='https://victorluismf.github.io/portfolio/images/github.png' width="auto" height="40"/></a>
                            </div>
                    </div>
                </div>
            </div>


            {/*--------------------------------------*/}
            {/*              CONTATOS                */}
            {/*--------------------------------------*/}


            <div ref={scrollContatos} className="contatos-section">
                <h1 data-aos="fade-up" data-aos-delay="590" className="contatos-title">Contatos</h1>
                    <div data-aos="fade-up" data-aos-delay="590" className="contatos1">
                        <div className="contatos-card">
                            <div className="local">
                                <div className="local-icon">
                                    <img className="local-logo" src='https://victorluismf.github.io/portfolio/images/local.png' width="auto" height="60"/>
                                </div>
                                <div className="local-info">
                                    <h2 className="local-title">Localização:</h2>
                                    <p className="local-subtitle">Santos - SP, Brasil</p>
                                </div>
                            </div>
                            <div className="email">
                                <div className="email-icon">
                                    <img className="email-logo" src='https://victorluismf.github.io/portfolio/images/email.png' width="auto" height="60"/>
                                </div>
                                <div className="email-info">
                                    <h2 className="email-title">Email:</h2>
                                    <p className="email-subtitle">victorluismf@outlook.com</p>
                                </div>
                            </div>
                            <div className="telefone">
                                <div className="telefone-icon">
                                    <img className="telefone-logo" src='https://victorluismf.github.io/portfolio/images/telefone.png' width="auto" height="60"/>
                                </div>
                                <div className="telefone-info">
                                    <h2 className="telefone-title">Telefone:</h2>
                                    <p className="telefone-subtitle">(13)99682-5320</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>


            {/*--------------------------------------*/}
            {/*                FOOTER                */}
            {/*--------------------------------------*/}


            <div className="footer">
                <div >
                    <a href="https://github.com/victorluismf" target="_blank"><img  className="github-footer" src='https://victorluismf.github.io/portfolio/images/github-footer.png' width="auto" height="55"/></a>
                    <a href="https://linkedin.com/in/victorluismf" target="_blank"><img className="linkedin-footer" src='https://victorluismf.github.io/portfolio/images/linkedin-footer.png' width="auto" height="55"/></a>
                    <a href="https://whats.link/victorluismf" target="_blank"><img className="whatsapp-footer" src='https://victorluismf.github.io/portfolio/images/whatsapp-footer.png' width="auto" height="55"/></a>
                </div>
                    <p className="copyright">© Copyright <b>Victor Luis</b> 2022</p>
            </div>


            <ScrollToTop/>
        </section>
    )
}

AOS.init();