/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { faFacebookF, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Footer extends Component {
    render() {
        return (
            <div>
                {/* <!-- Footer --> */}
                <footer className="footer">
                    <div className="copy">
                        <p>E: upadhyayyuvi@gmail.com</p>
                        <p>T: +91 7600104483</p>
                    </div>
                    <div className="soc-box">
                        <div className="follow-label">Follow Me</div>
                        <div className="soc">
                            <a target="_blank" href="https://www.facebook.com/">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a target="_blank" href="https://www.instagram.com/yuvi76">
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
