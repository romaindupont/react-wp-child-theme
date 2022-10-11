import VeldtLogo from '../../../assets/images/veldt-logo.svg';
import ZipperLeather from '../footer/tabs/svg/Zipper/ZipperLeather';

const Header = ({traduction}) => {
	var _nonce = "<?php echo wp_create_nonce( 'wc_store_api' ); ?>";

	const Buy = () => {
		const oauth = {
      consumer: {
          key: 'ck_33e5120009d544c15530ea21c508a732a8504bf6',
          secret: 'cs_0fd3ef403501ec614fab2d3b66449b66512cae02'
      },
      signature_method: 'HMAC-SHA1'
  };
		var myHeaders = {
			'X-WC-Store-API-Nonce': _nonce,
			"Content-Type": "application/json",
			oauth
		}
		let imageToUpload = document.querySelector('.menuImageToShare_quarterPosition').src;
		var myInit = { 
							 method: 'POST',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default',
							 body: JSON.stringify(
								imageToUpload)
							/*  body:JSON.stringify({
								"id" : 201,
								"quantity": 1
							}) */
					/* 		 body: JSON.stringify({data:{
								id : 201,
								quantity: 1,
								variation: [{
									attribute : [
										{
											id: 0,
											name: "configData",
											position: 0,
											visible: true,
											variation: true,
											options: [
												'myConfig'
											]
										}
									],
						
								}]
								}}) */
								/* "images": [],
								"attributes": [
									{
										"id": 0,
										"name": "configData",
										"position": 0,
										"visible": true,
										"variation": true,
										"options": [
											"'myConfig'"
										]
									}
								], */
							};
			fetch("http://localhost:8080/essai/wp-json/imageHandler/v1/upload", myInit)
			.then(response => response.text())
			.then(data => console.log(data))
		fetch("http://localhost:8080/essai/cart/?add-to-cart=201", myInit)
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