const { useState } = wp.element;
import VeldtLogo from '../../../assets/images/veldt-logo.svg';
import { MakeAnObjectToOrder } from '../../../utils/ObjectOrder';
import ScreenShot from '../body/Camera/ScreenShot';
import { REACT_APP_BASEURL } from '../../../env';

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
	withVisor,
	price,
	setDeviseChoice,
	deviseChoice
}) => {
	const baseUrl = REACT_APP_BASEURL;
	const [ buyLoader, setBuyLoader] = useState(false);
	var _nonce = "<?php echo wp_create_nonce( 'wc_store_api' ); ?>";
	const screen = () => {
		setBuyLoader(true);
		ScreenShot();
		setTimeout(()=>{
			Buy();
		}, 10000) 
	}
	const myDeviseChoice = (devise) => {
		if(devise === 'us') {
			setDeviseChoice({name: devise, logo: '$'})
		}
		if(devise === 'zh') {
			setDeviseChoice({name: devise, logo: '¥'})
		}
		if(devise === 'eur') {
			setDeviseChoice({name: devise, logo: '€'})
		}
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
		let customPrice = {"price": price}
		let myInit2 = { 
			method: 'POST',
			headers: myHeaders,
			mode: 'cors',
			cache: 'default',
			body: JSON.stringify(newConfig), customPrice
		};
		await fetch(`${baseUrl}wp-json/imageHandler/v1/upload`, myInit)
			.then(response => response.text())
			.then(data => image = data )
		await fetch(`${baseUrl}cart/?add-to-cart=227&image=${image}&price=${price}`, myInit2)
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
						<div className="header-configurator-right-priceZone-price">{price}<span>{deviseChoice.logo}</span></div>
						<div className='header-configurator-select'>
							<select name="devise" id="devise" onChange={(e)=> myDeviseChoice(e.target.value)}>
								<option value="us">USD</option>
								<option value="eur">EUR</option>
								<option value="zh">CNY</option>
							</select>
							<span className="focus"></span>
						</div>
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