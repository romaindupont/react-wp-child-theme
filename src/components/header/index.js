import VeldtLogo from '../../../assets/images/veldt-logo.svg';
const { useState, useEffect } = wp.element;

const Header = () => {
  return (
		<header className="configurator-header">
			<div className="header-configurator">
				<div className="header-configurator-left">
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
		</header>
  );
};

export default Header;