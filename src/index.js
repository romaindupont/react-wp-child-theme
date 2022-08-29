const { render, useState } = wp.element;
import './style.scss';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

const Veldt = () => {

  return (
		<div className='veldtConfig'>
			<Header />
			<Body />
			<Footer />
		</div>
  );
};
render(<Veldt />, document.getElementById('root') || document.createElement('div'));

