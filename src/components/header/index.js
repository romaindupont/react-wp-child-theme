import VeldtLogo from '../../../assets/images/veldt-logo.svg';
import ZipperLeather from '../footer/tabs/svg/Zipper/ZipperLeather';

const Header = ({traduction}) => {
	var _nonce = "<?php echo wp_create_nonce( 'wc_store_api' ); ?>";
	const Buy = () => {
		var myHeaders = {
			'X-WC-Store-API-Nonce': _nonce,
			"Content-Type": "application/json",
		}
		var myInit = { 
							 method: 'POST',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default',
							/*  body: JSON.stringify({data:{
								id : 200,
								quantity: 1,
								variation: [{
									attribute : "configData",
									value: 'super'
								}]
							}}) */
							};
			/* fetch("http://localhost:8080/essai/wp-json/wc/store/cart/add-item", myInit)
			.then(response => response.json())
			.then(data => console.log(data)) */
		fetch("http://localhost:8080/essai/cart/?add-to-cart=183", myInit)
				.then(response => response.text())
				.then(data => console.log(data))
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
							onClick={Buy}
						>
							<span>
								{traduction.BuyIT}
							</span>
						</button>
					</div>
					<div className="header-configurator-right-comment">{traduction.FreeDelivery}</div>
				</div>
			</div>
		</header>
  );
};

export default Header;