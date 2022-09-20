const { render, useState } = wp.element;
import './style.scss';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

const Veldt = () => {
	const [ standardValue, setStandardValue ] = useState({
		Helmet_color: 'black',
		Helmet_color_type: 'plain',
		Metal_pieces: 'titanium',
		Logo: 'V_Text',
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
		Visor_type: 'peak'
	})
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
	const [ loader, setLoader ] = useState(false)
  return (
		<div className='veldtConfig'>
			{!loader && <div className="load"><div className="loader"></div></div>}
			<Header />
			<Body
				aerationHelmet = {aerationHelmet}
				screwPosition = {screwPosition} 
				standardValue = {standardValue} 
				varnishHelmet = {varnishHelmet} 
				backNumberWindow = {backNumberWindow} 
				leftNumberWindow ={ leftNumberWindow} 
				rightNumberWindow = {rightNumberWindow} 
				backEngraving = {backEngraving}
				aerationChin = {aerationChin}
				varnishChin = {varnishChin}
				setScreenshotsWait = {setScreenshotsWait}
				setLoader = {setLoader}
			/>
			<Footer
				setAerationHelmet = {setAerationHelmet}
				setScrewPosition = {setScrewPosition}
				screwPosition = {screwPosition}
				setStandardValue = {setStandardValue}
				standardValue = {standardValue}
				setVarnishHelmet = {setVarnishHelmet}
				setBackNumberWindow = {setBackNumberWindow}
				backNumberWindow = {backNumberWindow}
				leftNumberWindow = {leftNumberWindow}
				rightNumberWindow = {rightNumberWindow}
				setLeftNumberWindow = {setLeftNumberWindow}
				setRightNumberWindow = {setRightNumberWindow} 
				backEngraving = {backEngraving}
				setBackEngraving = {setBackEngraving}
				setAerationChin = {setAerationChin}
				setVarnishChin = {setVarnishChin}
				screenshotsWait = {screenshotsWait}
			/>
		</div>
  );
};
render(<Veldt />, document.getElementById('root') || document.createElement('div'));

