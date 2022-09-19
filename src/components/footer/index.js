const { useState } = wp.element;
import FooterHeader from './footer-header';
import Tabs from './tabs';
import MenuOption from './menuOption';
import PopupHelp from './popupHelp';
import ExportWindows from './exportWindows';
import ElementData from '../../../assets/json/elementHelmet';

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
	setBackEngraving,
	setAerationChin,
	setVarnishChin,
	screenshotsWait
}) => {
	const [ openOptionMenu, setOpenOptionMenu ] = useState({name: '', open: false});
	const [ helmetPosition, setHelmetPosition ] = useState({
		title: ElementData[0].title,
		fileName: ElementData[0].fileName,
		position: 0,
		helpMessage : ElementData[0].helpMessage
	})
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
				setAerationChin = {setAerationChin}
				setVarnishChin = {setVarnishChin}
				helmetPosition = {helmetPosition}
				setHelmetPosition = {setHelmetPosition}
			/>
			{openOptionMenu.open && openOptionMenu.name === 'menuOption' && <MenuOption setOpenOptionMenu={setOpenOptionMenu} />}
			{openOptionMenu.open && openOptionMenu.name === 'help' && <PopupHelp setOpenOptionMenu={setOpenOptionMenu} helmetPosition={helmetPosition} />}
			{openOptionMenu.open && openOptionMenu.name === 'export' && screenshotsWait.wait  && <ExportWindows setOpenOptionMenu={setOpenOptionMenu} screenshotsWait={screenshotsWait}/>}
		</footer>
	)
}

export default Footer;