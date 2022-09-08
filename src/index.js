const { render, useState } = wp.element;
import './style.scss';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

const Veldt = () => {
	const [ standardValue, setStandardValue ] = useState({
		Helmet_color: 'estate blue',
		Helmet_color_type: 'metallic',
		Metal_pieces: 'titanium',
		Logo: 'V_Text|white',
		Interior: 'suede|blue',
		Helmet_trim: 'rubber_black',
		Rear_text: 'ECE|M',
		Helmet_design_color: 'white',
		Helmet_design_type: 'plain',
		Helmet_design: '',
	})
	const [ aerationHelmet, setAerationHelmet] = useState(true);
	const [ screwPosition, setScrewPosition ] = useState('all');
	const [ varnishHelmet, setVarnishHelmet] = useState(true);
	/* console.log(screwPosition) */
  return (
		<div className='veldtConfig'>
			<Header />
			<Body aerationHelmet={aerationHelmet} screwPosition={screwPosition} standardValue={standardValue} varnishHelmet={varnishHelmet}/>
			<Footer setAerationHelmet={setAerationHelmet} setScrewPosition={setScrewPosition} screwPosition={screwPosition} setStandardValue={setStandardValue} standardValue={standardValue} setVarnishHelmet={setVarnishHelmet} />
		</div>
  );
};
render(<Veldt />, document.getElementById('root') || document.createElement('div'));

