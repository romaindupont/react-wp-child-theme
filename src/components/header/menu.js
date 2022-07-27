const { useState } = wp.element;
import SubMenu from './subMenu';
import VeldtLogo from '../../../assets/images/veldt-logo.svg';
import Caret from '../../../assets/images/caret_right.svg';

const Menu = ({ menuOpenClose, load,	titleList, setMenuOpenClose, subMenuList }) => {
	const [ subMenuOpen, setSubMenuOpen ] = useState({name: '', open: false});
	const closeMenu = () => {
		setMenuOpenClose(false);
	}
	const clicCaret = (e) => {
		e.preventDefault();
		setSubMenuOpen({
			name: e.target.classList[1],
			open: !subMenuOpen.open
		});
		const select = document.querySelector('.select');
		if (select) {
			select.classList.remove('select');
		}
		e.target.offsetParent.classList.add('select');

	}
	return (
		<>
			<div className={menuOpenClose ? "first_menu-configurator first_menu-configurator--open" : "first_menu-configurator"}>
				<div className="first_menu-configurator-nav-title">
					<div className="first_menu-configurator-nav-title--top">
						<img className="configurator-header__heading-menu" src={VeldtLogo} alt="logo-veldt"/>
						<svg version="1.1" id="closeLogo" className="closeLogo" viewBox="0 0 41 41" onClick={closeMenu}>
							<polygon className="cross" points="28.3,14.1 26.9,12.7 20.5,19.1 14.1,12.7 12.7,14.1 19.1,20.5 12.7,26.9 14.1,28.3 20.5,21.9   26.9,28.3 28.3,26.9 21.9,20.5 "></polygon>
						</svg>
					</div>
					<nav className='first_menu-configurator-nav'>
						<ul className='sub-menu menu-depth-1'>
							{load && titleList.map((title, i) => (
								<li key={i} className={`sub-menu--li ${title[0]}`}>
									{title[0].includes('Mark') ? title[0] : <a href={title[1]} className='sub-menu--a'>{title[0]}</a>}
									{title[0].includes('Mark') ? <img src= {Caret} alt="caret" className={`caret caret--${i}` } onClick={clicCaret}/> : ''}
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
			{subMenuOpen.open && <SubMenu subMenuList={subMenuList} subMenuOpenName={subMenuOpen.name} setSubMenuOpen={setSubMenuOpen}/>}
		</>
	)
}

export default Menu;