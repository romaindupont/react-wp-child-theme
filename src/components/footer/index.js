const { useState } = wp.element;
import FooterHeader from './footer-header';
import Tabs from './tabs';
import MenuOption from './menuOption';
import PopupHelp from './popupHelp';
import ExportWindows from './exportWindows';

const Footer = ({
	setAerationHelmet,
	setScrewPosition,
	setStandardValue,
	standardValue,
	setVarnishHelmet,
	setBackNumberWindow,
	backNumberWindow,
	leftNumberWindow,
	setLeftNumberWindow,
	rightNumberWindow,
	setRightNumberWindow,
	backEngraving,
	setBackEngraving
}) => {
	const [ openOptionMenu, setOpenOptionMenu ] = useState({name: '', open: false});
	return (
		<footer className="footer-configurator">
			<FooterHeader setOpenOptionMenu={setOpenOptionMenu} />
			<Tabs 
				setAerationHelmet = {setAerationHelmet}
				setScrewPosition = {setScrewPosition}
				setStandardValue = {setStandardValue}
				standardValue = {standardValue}
				setVarnishHelmet = {setVarnishHelmet}
				setBackNumberWindow = {setBackNumberWindow}
				backNumberWindow={backNumberWindow}
				leftNumberWindow = {leftNumberWindow}
				setLeftNumberWindow = {setLeftNumberWindow}
				rightNumberWindow = {rightNumberWindow}
				setRightNumberWindow = {setRightNumberWindow}
				backEngraving = {backEngraving}
				setBackEngraving = {setBackEngraving}
			/>
			{openOptionMenu.open && openOptionMenu.name === 'menuOption' && <MenuOption setOpenOptionMenu={setOpenOptionMenu} />}
			{openOptionMenu.open && openOptionMenu.name === 'help' && <PopupHelp setOpenOptionMenu={setOpenOptionMenu} />}
			{openOptionMenu.open && openOptionMenu.name === 'export' && <ExportWindows setOpenOptionMenu={setOpenOptionMenu} />}
		</footer>
	)
}

export default Footer;