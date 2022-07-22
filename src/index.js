/* import React, {useState} from 'react';
import ReactDOM from 'react-dom'; */
const { render, useState } = wp.element;
import './style.scss';
import VeldtLogo from '../assets/images/veldt-logo.svg';

const Votes = () => {
  const [votes, setVotes] = useState(0);
  const addVote = () => {
    setVotes(votes + 1);
  };
  return (
		<div>
			<header className="configurator-header">
	<div className="header-configurator">
		<div className="header-configurator-left">
			<div className="header-configurator-left-menu">
			<svg id="menu_configurator" x="0px" y="0px" viewBox="0 0 41 41">
					<circle className="mc0" cx="20.5" cy="20.5" r="20"></circle>
					<g>
						<path className="mc1" d="M29.5,15.5h-18c-0.6,0-1-0.4-1-1v0c0-0.6,0.4-1,1-1h18c0.6,0,1,0.4,1,1v0C30.5,15.1,30.1,15.5,29.5,15.5z"></path>
						<path className="mc1" d="M29.5,21.5h-18c-0.6,0-1-0.4-1-1v0c0-0.6,0.4-1,1-1h18c0.6,0,1,0.4,1,1v0C30.5,21.1,30.1,21.5,29.5,21.5z"></path>
						<path className="mc1" d="M29.5,27.5h-18c-0.6,0-1-0.4-1-1v0c0-0.6,0.4-1,1-1h18c0.6,0,1,0.4,1,1v0C30.5,27.1,30.1,27.5,29.5,27.5z"></path>
					</g>
				</svg>
			</div>
			<div className="header-configurator-left-title">
					<img className="configurator-header__heading-menu" src={VeldtLogo} alt="logo-veldt"/>
				<h2 className="header-configurator-left-title-2"></h2>
			</div>
		</div>
		<div className="header-configurator-right">
			<div className="header-configurator-right-priceZone">
				<div className="header-configurator-right-priceZone-price">950<span>€</span></div>
				<button
					type="submit"
					name="add"
					className="header-configurator-right-priceZone-buy"
				>
						<span>
							Buy it
						</span>
				</button>
			</div>
			<div className="header-configurator-right-comment">Free delivery 10 weeks</div>
		</div>
	</div>
	<div className="first_menu-configurator">
		<div className="first_menu-configurator-nav-title">
		<img className="configurator-header__heading-menu" src={VeldtLogo} alt="logo-veldt"/>
		<svg version="1.1" id="closeLogo" className="closeLogo" viewBox="0 0 41 41">
			<polygon className="cross" points="28.3,14.1 26.9,12.7 20.5,19.1 14.1,12.7 12.7,14.1 19.1,20.5 12.7,26.9 14.1,28.3 20.5,21.9   26.9,28.3 28.3,26.9 21.9,20.5 "></polygon>
		</svg>
		</div>
			</div>
	</header>
		</div>
  );
};
render(<Votes />, document.getElementById('root') || document.createElement('div'));

