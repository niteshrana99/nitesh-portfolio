import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_left">
                <p className="footer_left_heading">Let's Work Together</p>
                <p className="footer_left_text">Have a project / opportunity you'd like to discuss ?</p>
                <button className="round_btn">Get in Touch</button>
            </div>
            <div className="footer_right">
                <ul className="footer_list">
                    <li className="footer_list-item">
                    <a className="footer_link" href="mailto:rananitesh99@gmail.com"><i className="fa-email"></i> &nbsp;Email </a>
                    </li>
                    <li className="footer_list-item">
                    <a className="footer_link" href="https://www.linkedin.com/in/nitesh-rana-a618b916a/" target="_blank"><i className="fa-linkedin"></i> &nbsp;Linkedin </a>
                    </li>
                    <li className="footer_list-item">
                    <a className="footer_link" href="https://www.facebook.com/nitesh.rana.589" target="_blank"><i className="fa-facebook"></i> &nbsp;Facebook</a>
                    </li>
                    <li className="footer_list-item">
                    <a className="footer_link" href="https://rananitesh99.medium.com/" target="_blank"><i className="fa-medium"></i> &nbsp;Medium </a>
                    </li>
                </ul>
            </div>    
        </footer>
    )
}

export default Footer
