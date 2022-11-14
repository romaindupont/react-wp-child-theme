const { useState } = wp.element;
import VeldtLogo from '../../../assets/images/veldt-logo.svg';
import { MakeAnObjectToOrder } from '../../../utils/ObjectOrder';
import ScreenShot from '../body/Camera/ScreenShot';


const Header = ({
	traduction,
	screenshotsWait,
	standardValue,
	aerationHelmet,
	varnishHelmet,
	backNumberWindow,
	backNumberInput,
	rightNumberWindow,
	rightNumberInput,
	leftNumberWindow,
	leftNumberInput,
	backEngraving,
	engravingInput,
	screwPosition,
	withChin,
	aerationChin,
	varnishChin,
	withVisor
}) => {
	const baseUrl = 'http://localhost:8080/essai/';
	const [ buyLoader, setBuyLoader] = useState(false);
	var _nonce = "<?php echo wp_create_nonce( 'wc_store_api' ); ?>";
	const screen = () => {
		setBuyLoader(true);
		ScreenShot();
		setTimeout(()=>{
			Buy();
		}, 10000) 
	}
	const Buy = async () => {	
		let imageToUpload = document.querySelector('.menuImageToShare_quarterPosition').src;
		let myHeaders = {
			'X-WC-Store-API-Nonce': _nonce,
			"Content-Type": "application/json",
		}
		let image;
		let myInit = { 
			method: 'POST',
			headers: myHeaders,
			mode: 'cors',
			cache: 'default',
			body: JSON.stringify(imageToUpload)
		};
		let configuration = MakeAnObjectToOrder(
			standardValue,
			aerationHelmet,
			varnishHelmet,
			backNumberWindow,
			backNumberInput,
			rightNumberWindow,
			rightNumberInput,
			leftNumberWindow,
			leftNumberInput,
			backEngraving,
			engravingInput,
			screwPosition,
			withChin,
			aerationChin,
			varnishChin,
			withVisor
		);
		let newConfig = JSON.parse(configuration);
		let myInit2 = { 
			method: 'POST',
			headers: myHeaders,
			mode: 'cors',
			cache: 'default',
			body: JSON.stringify(newConfig)
		};
		await fetch(`${baseUrl}wp-json/imageHandler/v1/upload`, myInit)
			.then(response => response.text())
			.then(data => image = data )
		await fetch(`${baseUrl}cart/?add-to-cart=201&image=${image}`, myInit2)
			.then(response => response.text())
			.then(data => data)
		setBuyLoader(false);
		window.location.href = `${baseUrl}cart/`;
	} 
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
						<div className="header-configurator-right-priceZone-price">950<span>{traduction.Money}</span></div>
						<button
							type="submit"
							name="add"
							className="header-configurator-right-priceZone-buy"
							onClick={screen}
						>
							{buyLoader && <div className="loadBuy"><div className="loaderBuy"></div></div>}
							<span>
								{traduction.BuyIT}
							</span>
						</button>
					</div>
					<div className="header-configurator-right-comment">{traduction.FreeDelivery}</div>
				</div>
			</div>
			<div className="menuImageToBuy">
					<img className="imageDownload menuImageToShare_quarterPosition" src={screenshotsWait.arrayScreen[0]} alt="quarter Position helmet"/>
				</div>
		</header>
  );
};

export default Header;