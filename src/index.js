const { render, useState } = wp.element;
import './style.scss';
import Header from './components/header';
import Body from './components/body';

const Veldt = () => {
  return (
		<div className='veldtConfig'>
			<Header />
			<Body />
		</div>
  );
};
render(<Veldt />, document.getElementById('root') || document.createElement('div'));

