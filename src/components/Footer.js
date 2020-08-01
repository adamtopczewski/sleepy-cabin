import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (
        <footer>            
                <div className="footer-section">
                    <h3>Addres</h3>
                    <address>Sleepy Cabins <br/>
                        550  Clair Street<br/>
                        Robinson<br/>
                        Texas<br/>
                    </address>
                </div>
                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <address>Tel: 254-662-8965 <br/>
                        Fax: 832-884-8894 <br/>
                        E-mail: <a className="email" href="mailto:o243e@fakemail.com">o243e@fakemail.com</a>
                    </address>
                </div>
                <div className="footer-section">
                    <h3>Find us:</h3>
                    <p className="find-us">
                    <a className="icon" href="#"><FontAwesomeIcon icon={faFacebook} style={{color:'white'}}/></a>
                    <a className="icon" href="#"><FontAwesomeIcon icon={faTwitter} style={{color:'white'}}/></a>
                    <a className="icon" href="https://github.com/adamtopczewski/" target="_blank"><FontAwesomeIcon icon={faGithub} style={{color:'white'}}/></a>
                    </p>
                </div>            
        </footer>
    )
}
