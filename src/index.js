const { render, useState } = wp.element;
import './style.scss';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

const Veldt = () => {
	const [ aerationHelmet, setAerationHelmet] = useState(true);
  return (
		<div className='veldtConfig'>
			<Header />
			<Body aerationHelmet={aerationHelmet} />
			<Footer setAerationHelmet={setAerationHelmet} />
		</div>
  );
};
render(<Veldt />, document.getElementById('root') || document.createElement('div'));

