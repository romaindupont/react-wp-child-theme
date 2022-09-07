const { render, useState } = wp.element;
import './style.scss';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

const Veldt = () => {
	const [ standardValue, setStandardValue ] = useState({
		Helmet_color: 'plain|black',
		Metal_pieces: 'titanium',
		Logo: 'V_Text|white',
		Interior: 'suede|blue',
		Helmet_trim: 'rubber_black',
		Rear_text: 'ECE|M',
		Helmet_design_color: 'plain|white',
		Helmet_design: ''
	})
	const [ aerationHelmet, setAerationHelmet] = useState(true);
	const [ screwPosition, setScrewPosition ] = useState('all');
	/* console.log(screwPosition) */
  return (
		<div className='veldtConfig'>
			<Header />
			<Body aerationHelmet={aerationHelmet} screwPosition={screwPosition} standardValue={standardValue} />
			<Footer setAerationHelmet={setAerationHelmet} setScrewPosition={setScrewPosition} screwPosition={screwPosition} setStandardValue={setStandardValue} standardValue={standardValue}/>
		</div>
  );
};
render(<Veldt />, document.getElementById('root') || document.createElement('div'));

