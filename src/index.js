const { render, useState } = wp.element;
import './style.scss';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import Traduction from '../assets/json/elementHTML';

const Veldt = () => {
	const [ standardValue, setStandardValue ] = useState({
		Helmet_color: 'black',
		Helmet_color_type: 'plain',
		Metal_pieces: 'titanium',
		Logo: 'V',
		Logo_color: 'white',
		Interior: 'suede|blue',
		Helmet_trim: 'rubber|black',
		Rear_text_certification: 'ECE',
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
		Visor_peak_color: 'black',
		Visor_peak_type: 'plain',
		Visor_color: 'clear',
		Visor_type: 'peak_visor',
		Visor_frame: 'full'
	});
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
	let language = document.querySelector('html').lang;
	let traduction = Traduction[0].en[0];
	if (language.includes('fr')) {
		traduction = Traduction[0].fr[0];
	}
	if (language.includes('es')) {
		traduction = Traduction[0].en[0];
	}
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
			/>
		</div>
  );
};

render(<Veldt />, document.getElementById('root') || document.createElement('div'));

