import './App.css';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import HexWrap from './components/HexWrap/HexWrap';
import Intro from './components/Intro/Intro';
import Aos from 'aos';
import "aos/dist/aos.css";
import Footer from './components/Footer/Footer';
import Brands from './components/Brands/Brands';
import Stack from './components/Stack/Stack';
import Export from './components/Export/Export';
import Blog from './components/Blog/Blog';
import Projects from './components/Projects/Projects';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800
    });
  }, [])

  return (
    <div className="App">
      <section className="site_header">
        <Header />
        <Intro />
      </section>
      <section id="about" data-aos="fade-down" className="site_about">
        <div className="u-align-center u-margin-bottom-lg">
          <p className="heading_primary site_about_heading">About</p>
          <div className="about_info">
            <p>
              I work as a Sr.Front-end Engineer at <a className="btn-text" href="https://www.preqin.com" target="_blank" >Preqin </a> where I help build the the leading enterprise insights for alternative assets platform for consumer commerce businesses. </p>
            <p>
              I am passionate about all things web. I have worked in multiple projects during these years in tech on large scale projects. I stress on the importance of having good structure and proper architecture while building applications. I like my code to be clean without any squiggly lines.
          </p>
            <p>I am based off of Himachal Pradesh, IN. People call it “Land of Gods and Goddess”. Google it and you’ll feel the same. When I’m not fiddling around with code, I tend to play games, watch series, read books, a little bit of travelling and more.
          </p>
          </div>
        </div>
        <HexWrap />
      </section>
      <section id="projects" className="u-margin-top-lg companies_info">
        <p className="u-align-center u-margin-bottom-lg heading_primary site_about_heading">Projects</p>
        <Projects />
      </section>
      <section id="career" className="u-margin-top-lg companies_info">
        <p className="u-align-center u-margin-bottom-lg heading_primary site_about_heading">Career</p>
        <Brands />
      </section>
      <section id="skills" className="u-margin-top-lg">
        <p className="u-align-center u-margin-bottom-lg heading_primary site_about_heading">Skills</p>
        <Stack />
        <Export />
      </section>
      <section id="blog" className="u-margin-top-md">
        <div className="u-align-center u-margin-bottom-lg">
          <p className="heading_primary site_about_heading">Blog</p>
        </div>
        <Blog />
      </section>
      <section id="contact" className="footer_section u-margin-top-md">
        <Footer />
      </section>

    </div>
  );
}

export default App;
