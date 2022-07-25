import Caret from '../../../assets/images/caret_right.svg';
import Spectre from '../../../assets/images/spectre-color.svg';

const SubMenu = ({subMenuList, subMenuOpenName, setSubMenuOpen}) => {
	let newList;
	let titleMenu;
	if(subMenuOpenName === 'caret--0') {
		newList = subMenuList.filter((sub)=> sub[2] === 'mark1');
		titleMenu = 'Mark 1';
	}
	else {
		newList = subMenuList.filter((sub)=> sub[2] === 'mark2')
		titleMenu = 'Mark 2';
	}
	const closeSubMenu = () => {
		setSubMenuOpen({name: '', open: false})
	}
	return (
		<nav className='first_menu-configurator-nav--2'>
			<img src={Caret} alt="caret-close" className='caret caret--close' onClick={closeSubMenu}/>
			<ul className='sub-menu menu-depth-2'>
				<li className="sub-menu--li"><a href="" className='sub_item'>Configurator {titleMenu}</a></li>
				<li className="sub-menu--li"><a href="" className='sub_item--item'>Make your own</a></li>
				<li className="sub-menu--li"><a href="" className='personnalize'><img src={Spectre} alt="spectre" /> personnalize</a></li>
			{newList.map((title, i) =>  (
				<li key={i} className="sub-menu--li"><a href={title[1]} className={`${title[3]}`}>{title[0]}</a></li>))}
			</ul>
		</nav>
	)
}

export default SubMenu;