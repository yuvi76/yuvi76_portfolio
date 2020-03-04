/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { faInstagram, faLinkedin, faGithub,faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Footer extends Component {
    render() {
        return (
            <div>
                {/* <!-- Footer --> */}
                <footer className="footer">
                    <div className="copy">
                        <p>E:<strong><a href="mailto:upadhyayyuvi@gmail.com">upadhyayyuvi@gmail.com</a></strong></p>
                        <p>T:<strong><a href="tel:+917600104483"> +91 7600104483</a></strong></p>
                    </div>
                    <div className="soc-box">
                        <div className="follow-label"><strong>Follow Me</strong></div>
                        <div className="soc">
                            <a target="_blank" href="https://www.facebook.com/yuvraj.upadhyay.1">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a target="_blank" href="https://www.instagram.com/yuvi76_">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/yuvraj-upadhyay/">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a target="_blank" href="https://www.github.com/yuvi76">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                    <div className="clear"></div>
                </footer>
            </div>
        )
    }
}

export default Footer
