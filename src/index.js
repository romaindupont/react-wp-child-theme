const { render, useState, useEffect } = wp.element;
import './style.scss';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import Traduction from '../assets/json/elementHTML';
import { REACT_APP_BASEURL } from '../env';

const Veldt = () => {
	const [ mySku, setMySku ] = useState({
		position1: 'ht',
		position2: 'xx',
		position3: 'xx',
		position4: 'xx',
		position5: 'xx',
		position6: 'xxx',
		position7: 'xxx',
		position8: 'xx',
		position9: 'xx',
		position10: 'xx',
		position11: 'xx',
		position12: 'xx',
		position13: 'x',
		position14: 'xx',
		position15: 'xxx',
		position16: 'xxx',
		position17: 'xx',
	})
	const [ standardValue, setStandardValue ] = useState({
		Helmet_color: 'black',
		Helmet_color_type: 'plain',
		Metal_pieces: 'titanium',
		Logo: 'V',
		Logo_color: 'white',
		Interior: 'suede|blue',
		Helmet_trim: 'rubber|black',
		Rear_text_certification: 'DOT',
		Rear_text_size: 'M',
		Helmet_design_color: 'white',
		Helmet_design_type: 'plain',
		Helmet_design: '',
		flap: 'nylon',
		Chinguard_color: 'black',
		Chinguard_color_type: 'plain',
		Chinguard_design_color: 'white',
		Chinguard_design_type: 'plain',
		Chinguard_design: '',
		Chinguard_trim: 'rubber|black',
		Chinguard_interior: 'suede|blue',
		Visor_peak_color: 'black',
		Visor_peak_type: 'plain',
		Visor_color: 'smoke',
		Visor_type: 'short_visor',
		Visor_frame: 'light'
	});
	const [ price, setPrice ] = useState(690);
	const [ nodesConfiguration, setNodesConfiguration ] = useState([]);
	const [ materialVariation, setMaterialVariation ] = useState({});
	const [ aerationHelmet, setAerationHelmet] = useState(true);
	const [ screwPosition, setScrewPosition ] = useState('all');
	const [ varnishHelmet, setVarnishHelmet] = useState(true);
	const [ withChin, setWithChin ] = useState(false);
	const [ typeChoice, setTypeChoice ] = useState('peak_visor');
	const [ withVisor, setWithVisor ] = useState(false);
	const [ backNumberWindow, setBackNumberWindow ] = useState(false);
	const [ backNumberInput, setBackNumberInput ] = useState({
		numberText: '00',
		numberStyle: 'none',
		numberColorType: 'plain',
		numberColor: 'white'
	});
	const [ leftNumberWindow, setLeftNumberWindow ] = useState(false);
	const [ leftNumberInput, setLeftNumberInput ] = useState({
		numberText: '00',
		numberStyle: 'none',
		numberColorType: 'plain',
		numberColor: 'white'
	});
	const [ rightNumberWindow, setRightNumberWindow ] = useState(false);
	const [ rightNumberInput, setRightNumberInput ] = useState({
		numberText: '00',
		numberStyle: 'none',
		numberColorType: 'plain',
		numberColor: 'white'
	});
	const [ backEngraving, setBackEngraving ] = useState(false);
	const [ engravingInput, setEngravingInput ] = useState({
		text: 'VELDT',
		textStyle: 'montserrat'
	});
	const [ aerationChin, setAerationChin ] = useState(true);
	const [ varnishChin, setVarnishChin ] = useState(true);
	const [ downMenu, setDownMenu ] = useState(false);
	const [ screenshotsWait, setScreenshotsWait ] = useState({
		wait: false,
		arrayScreen : []
	});
	const [ loader, setLoader ] = useState(false);
	const [ tabsChoice, setTabsChoice ] = useState({
		helmet: true,
		chin: false,
		visor: false
	});
	const [ tabsCheck, setTabsCheck ] = useState({
		helmetCheck: true,
		chinCheck: false,
		visorCheck: false
	});
	const [ deviseChoice, setDeviseChoice ] = useState({name: 'USD', logo: '$'});

	const [ shortLinkCreate, setShortLinkCreate ] = useState({wait: false, link: ''});

	let language = document.querySelector('html').lang;
	let traduction = Traduction[0].en[0];
	if (language.includes('fr')) {
		traduction = Traduction[0].fr[0];
	}
	if (language.includes('es')) {
		traduction = Traduction[0].es[0];
	}
	if (language.includes('zh')) {
		traduction = Traduction[0].cn[0];
	}
	useEffect(() => {
		const doc = document.querySelector('#wcml-mc-scripts-js-extra').innerHTML;
		if(doc.includes('CNY')) {
			setDeviseChoice({name: 'CNY', logo: '¥'});
		}	
		if(doc.includes('EUR')) {
			setDeviseChoice({name: 'EUR', logo: '€'});
		}	
		if(doc.includes('USD')) {
			setDeviseChoice({name: 'USD', logo: '$'});
		} 
	}, [])
	useEffect(async () => {
			const baseUrl = REACT_APP_BASEURL;
			let myHeaders = {
				'Content-Type': 'application/json',
        'Accept': 'application/json',
			}
			let customSku = `${mySku.position1}-${mySku.position2}-${mySku.position3}-${mySku.position4}-${mySku.position5}-${mySku.position6}-${mySku.position7}-${mySku.position8}-${mySku.position9}-${mySku.position10}-${mySku.position11}-${mySku.position12}-${mySku.position13}-${mySku.position14}-${mySku.position15}-${mySku.position16}-${mySku.position17}`
			let makeData = {
				'sku': customSku,
				'devise': deviseChoice.name
			}
			let myInit = { 
				method: 'POST',
				headers: myHeaders,
				mode: 'cors',
				cache: 'default',
				body: JSON.stringify(makeData)
			};
			let thePrice;
			await fetch(`${baseUrl}wp-json/helmet/price`, myInit)
			.then(response => response.text())
			.then(data => thePrice = data )
			setPrice(thePrice);
	}, [mySku, deviseChoice]); 
	useEffect(() => {
		navigator.clipboard.writeText(shortLinkCreate.link)
	}, [shortLinkCreate.link]);	
  return (
		<div className='veldtConfig'>
			{!loader && <div className="load"><div className="loader"></div></div>}
			<Header
				traduction = {traduction}
				screenshotsWait = {screenshotsWait}
				materialVariation = {materialVariation}
				nodesConfiguration = {nodesConfiguration}
				standardValue = {standardValue}
				aerationHelmet= {aerationHelmet}
				varnishHelmet = {varnishHelmet}
				backNumberWindow = {backNumberWindow}
				backNumberInput = {backNumberInput}
				rightNumberWindow = {rightNumberWindow}
				rightNumberInput = {rightNumberInput}
				leftNumberWindow = {leftNumberWindow}
				leftNumberInput = {leftNumberInput}
				backEngraving = {backEngraving}
				engravingInput = {engravingInput}
				screwPosition = {screwPosition}
				withChin = {withChin}
				aerationChin = {aerationChin}
				varnishChin = {varnishChin}
				withVisor = {withVisor}
				price = {price}
				setDeviseChoice = {setDeviseChoice}
				deviseChoice = {deviseChoice}
				shortLinkCreate = {shortLinkCreate}
				setShortLinkCreate = {setShortLinkCreate}
			/>
			<Body
				aerationHelmet = {aerationHelmet}
				screwPosition = {screwPosition} 
				standardValue = {standardValue} 
				varnishHelmet = {varnishHelmet} 
				backNumberWindow = {backNumberWindow} 
				leftNumberWindow = {leftNumberWindow} 
				rightNumberWindow = {rightNumberWindow} 
				backEngraving = {backEngraving}
				aerationChin = {aerationChin}
				varnishChin = {varnishChin}
				setScreenshotsWait = {setScreenshotsWait}
				setLoader = {setLoader}
				setNodesConfiguration = {setNodesConfiguration}
				nodesConfiguration = {nodesConfiguration}
				tabsChoice = {tabsChoice}
				downMenu = {downMenu}
				screenshotsWait = {screenshotsWait}
				setMaterialVariation = {setMaterialVariation}
				withChin = {withChin}
				typeChoice = {typeChoice}
				withVisor = {withVisor}
				backNumberInput = {backNumberInput}
				leftNumberInput = {leftNumberInput}
				rightNumberInput = {rightNumberInput}
				engravingInput = {engravingInput}
				mySku = {mySku}
				setMySku = {setMySku}
				shortLinkCreate = {shortLinkCreate}
				setShortLinkCreate = {setShortLinkCreate}
			/>
			<Footer
				aerationHelmet = {aerationHelmet}
				setAerationHelmet = {setAerationHelmet}
				setScrewPosition = {setScrewPosition}
				screwPosition = {screwPosition}
				setStandardValue = {setStandardValue}
				standardValue = {standardValue}
				varnishHelmet = {varnishHelmet}
				setVarnishHelmet = {setVarnishHelmet}
				setBackNumberWindow = {setBackNumberWindow}
				backNumberWindow = {backNumberWindow}
				leftNumberWindow = {leftNumberWindow}
				rightNumberWindow = {rightNumberWindow}
				setLeftNumberWindow = {setLeftNumberWindow}
				setRightNumberWindow = {setRightNumberWindow} 
				backEngraving = {backEngraving}
				setBackEngraving = {setBackEngraving}
				aerationChin = {aerationChin}
				setAerationChin = {setAerationChin}
				varnishChin = {varnishChin}
				setVarnishChin = {setVarnishChin}
				screenshotsWait = {screenshotsWait}
				nodesConfiguration = {nodesConfiguration}
				tabsChoice = {tabsChoice}
				setTabsChoice = {setTabsChoice}
				tabsCheck = {tabsCheck}
				setTabsCheck = {setTabsCheck}
				traduction = {traduction}
				setScreenshotsWait = {setScreenshotsWait}
				downMenu = {downMenu}
				setDownMenu = {setDownMenu}
				backNumberInput = {backNumberInput}
				setBackNumberInput = {setBackNumberInput}
				leftNumberInput = {leftNumberInput}
				setLeftNumberInput = {setLeftNumberInput}
				rightNumberInput = {rightNumberInput}
				setRightNumberInput = {setRightNumberInput}
				engravingInput = {engravingInput}
				setEngravingInput = {setEngravingInput}
				withChin = {withChin}
				setWithChin = {setWithChin}
				typeChoice = {typeChoice}
				setTypeChoice = {setTypeChoice}
				withVisor = {withVisor}
				setWithVisor = {setWithVisor}
				mySku = {mySku}
				setMySku = {setMySku}
				shortLinkCreate = {shortLinkCreate}
				setShortLinkCreate = {setShortLinkCreate}
			/>
		</div>
  );
};

render(<Veldt />, document.getElementById('root') || document.createElement('div'));

