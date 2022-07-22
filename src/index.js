const { render, useState } = wp.element;
import './style.scss';
import Header from './components/header';

const Veldt = () => {
  return (
		<>
			<Header />
		</>
  );
};
render(<Veldt />, document.getElementById('root') || document.createElement('div'));

