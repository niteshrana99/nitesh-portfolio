import React from 'react';

const Header = () => {

    const handleNavigationClick = (hash) => {
        // alert("about");
        if(hash === 'hamburger') {
            document.getElementById("btn11").click();
            return;
        }
        
        window.location.hash = `#${hash}`;
    }
    
    return (
        <header className="header">
            <div className="header_logo">
                Nitesh Rana
            </div>
            <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

            <label id="btn11" for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <div class="navigation__background">&nbsp;</div>

            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><a href="#about" onClick={() => handleNavigationClick("hamburger")} class="navigation__link"><span>01</span>About</a></li>
                    <li class="navigation__item"><a href="#projects" onClick={() => handleNavigationClick("hamburger")} class="navigation__link"><span>01</span>Projects</a></li>
                    <li class="navigation__item"><a href="#career"  onClick={() => handleNavigationClick("hamburger")}  class="navigation__link"><span>02</span>Career</a></li>
                    <li class="navigation__item"><a href="#skills" onClick={() => handleNavigationClick("hamburger")}  class="navigation__link"><span>03</span>Skills</a></li>
                    <li class="navigation__item"><a href="#blog" onClick={() => handleNavigationClick("hamburger")} class="navigation__link"><span>04</span>Blog</a></li>
                    <li class="navigation__item"><a href="#contact" onClick={() => handleNavigationClick("hamburger")} class="navigation__link"><span>05</span>Contact</a></li>
                    </ul>
            </nav>
        </div>
            <div className="header_menu">
                <ul className="header_menu_list">
                    <li onClick={() => handleNavigationClick("about")} className="header_list_item">About</li>
                    <li onClick={() => handleNavigationClick("projects")} className="header_list_item">Projects</li>
                    <li onClick={() => handleNavigationClick("career")} className="header_list_item">Career</li>
                    <li onClick={() => handleNavigationClick("skills")} className="header_list_item">Skills</li>
                    <li onClick={() => handleNavigationClick("blog")} className="header_list_item">Blog</li>
                    <li onClick={() => handleNavigationClick("contact")} className="header_list_item">Contact</li>
                </ul>
            </div>
        </header>
    )
}

export default Header
