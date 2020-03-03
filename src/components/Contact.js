import React, { Component } from 'react';
import {  faPhone,faEnvelope,faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {
    render() {
        return (
            <div>
                {/* <!-- Section Contacts Info --> */}
			<div className="section contacts" id="section-contacts">
				<div className="content">

					{/* <!-- title --> */}
					<div className="title">
						<div className="title_inner">Contacts</div>
					</div>

					{/* <!-- contacts items --> */}
					<div className="service-items">

						<div className="service-col">
							<div className="service-item content-box">
								<div className="icon"><FontAwesomeIcon icon={faPhone} /></div>
								<div className="name">Phone</div>
								<div className="text">+91 7600104483</div>
							</div>
						</div>
						
						<div className="service-col">
							<div className="service-item content-box">
								<div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
								<div className="name">Email</div>
								<div className="text"><a href="mailto:upadhyayyuvi@gmail.com">upadhyayyuvi@gmail.com</a></div>
							</div>
						</div>

						<div className="service-col">
							<div className="service-item content-box">
								<div className="icon"><FontAwesomeIcon icon={faMapMarkedAlt} /></div>
								<div className="name">Address</div>
								<div className="text">Ahmedabad,Gujarat.</div>
							</div>
						</div>

					</div>

					<div className="clear"></div>
				</div>
			</div>
            </div>
        )
    }
}

export default Contact
