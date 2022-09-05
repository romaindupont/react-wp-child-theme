const { render, useState } = wp.element;
import './style.scss';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

const Veldt = () => {
	const [ aerationHelmet, setAerationHelmet] = useState(true);
	const [ screwPosition, setScrewPosition ] = useState('all');
	/* console.log(screwPosition) */
  return (
		<div className='veldtConfig'>
			<Header />
			<Body aerationHelmet={aerationHelmet} screwPosition={screwPosition} />
			<Footer setAerationHelmet={setAerationHelmet} setScrewPosition={setScrewPosition}/>
		</div>
  );
};
render(<Veldt />, document.getElementById('root') || document.createElement('div'));

