const { render, useState } = wp.element;
import './style.scss';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

const Veldt = () => {
	const [ standardValue, setStandardValue ] = useState({
		Helmet_color: 'camel',
		Helmet_color_type: 'metallic',
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
		flap: 'nylon'
	})
	const [ aerationHelmet, setAerationHelmet] = useState(true);
	const [ screwPosition, setScrewPosition ] = useState('all');
	const [ varnishHelmet, setVarnishHelmet] = useState(true);
	const [ backNumberWindow, setBackNumberWindow ] = useState(false);
	const [ leftNumberWindow, setLeftNumberWindow ] = useState(false);
	const [ rightNumberWindow, setRightNumberWindow ] = useState(false);
	const [ backEngraving, setBackEngraving ] = useState(false);
  return (
		<div className='veldtConfig'>
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
			/>
		</div>
  );
};
render(<Veldt />, document.getElementById('root') || document.createElement('div'));

