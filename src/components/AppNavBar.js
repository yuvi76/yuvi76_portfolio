/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';

class AppNavbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false,
			menuitem: 0
		};
	}
	ToggleClass = (e) => {
		this.setState({ isActive: !this.state.isActive })
	}

	Closenav = (e) => {
		this.setState({ isActive: false })
	}

	changeditem(value) {
		this.setState({ menuitem: value })
	}

	render() {
		return (

			<div className="home">
				<div className="container">
					<div className="cursor-follower"></div>
					<header className={(this.state.isActive) ? 'header active' : 'header'}>
						<div className="head-top">

							{/* <!-- menu button --> */}
							<a className='menu-btn' onClick={this.ToggleClass}><span></span></a>

							{/* <!-- logo --> */}
							<div className="logo hover-masks-logo">
								<a href="#">
									<span className="mask-lnk"><strong>Yuvraj Upadhyay</strong></span>
									<span className="mask-lnk mask-lnk-hover">Download <strong>CV</strong></span>
								</a>
							</div>

							{/* <!-- top menu --> */}
							<div className="top-menu hover-masks">
								<div className="top-menu-nav">
									<div className="menu-topmenu-container">
										<ul className="menu">
											<li className={(this.state.menuitem === 0) ? 'menu-item current-menu-item' : 'menu-item'}>
												<Link to='/portfolio/home' onClick={() => { this.changeditem(0); this.Closenav() }}>Home</Link>
											</li>
											<li className={(this.state.menuitem === 1) ? 'menu-item current-menu-item' : 'menu-item'}>
												<Link to='/portfolio/about' onClick={() => { this.changeditem(1); this.Closenav() }}>Resume</Link>
											</li>
											<li className={(this.state.menuitem === 2) ? 'menu-item current-menu-item' : 'menu-item'}>
												<Link to='/portfolio/work' onClick={() => { this.changeditem(2); this.Closenav() }}>Works</Link>
											</li>
											<li className={(this.state.menuitem === 3) ? 'menu-item current-menu-item' : 'menu-item'}>
												<Link to='/portfolio/contact' onClick={() => { this.changeditem(3); this.Closenav() }}>Contact</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>

						</div>
					</header>
				</div>
			</div>
		)
	}

}

export default AppNavbar;