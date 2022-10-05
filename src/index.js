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
		Helmet_trim: 'rubber_black',
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
		Chinguard_trim: 'rubber_black',
		Visor_peak_color: 'black',
		Visor_peak_type: 'plain',
		Visor_color: 'clear',
		Visor_type: 'peak',
		Visor_frame: 'full'
	});
	const [ nodesConfiguration, setNodesConfiguration ] = useState([]);
	const [ aerationHelmet, setAerationHelmet] = useState(true);
	const [ screwPosition, setScrewPosition ] = useState('all');
	const [ varnishHelmet, setVarnishHelmet] = useState(true);
	const [ backNumberWindow, setBackNumberWindow ] = useState(false);
	const [ leftNumberWindow, setLeftNumberWindow ] = useState(false);
	const [ rightNumberWindow, setRightNumberWindow ] = useState(false);
	const [ backEngraving, setBackEngraving ] = useState(false);
	const [ aerationChin, setAerationChin ] = useState(true);
	const [ varnishChin, setVarnishChin ] = useState(true);
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
			<Header traduction = {traduction} />
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
			/>
		</div>
  );
};

render(<Veldt />, document.getElementById('root') || document.createElement('div'));

