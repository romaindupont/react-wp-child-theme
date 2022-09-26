const { useState } = wp.element;
import FooterHeader from './footer-header';
import Tabs from './tabs';
import MenuOption from './menuOption';
import PopupHelp from './popupHelp';
import ExportWindows from './exportWindows';
import ElementData from '../../../assets/json/elementHelmet';
import ElementDataChin from '../../../assets/json/elementChin';

const Footer = ({
	aerationHelmet,
	setAerationHelmet,
	screwPosition,
	setScrewPosition,
	setStandardValue,
	standardValue,
	varnishHelmet,
	setVarnishHelmet,
	setBackNumberWindow,
	backNumberWindow,
	leftNumberWindow,
	setLeftNumberWindow,
	rightNumberWindow,
	setRightNumberWindow,
	backEngraving,
	setBackEngraving,
	aerationChin,
	setAerationChin,
	varnishChin,
	setVarnishChin,
	screenshotsWait,
	nodesConfiguration
}) => {
	const [ openOptionMenu, setOpenOptionMenu ] = useState({
			name: '',
			open: false
	});
	const [ helmetPosition, setHelmetPosition ] = useState({
		title: ElementData[0].title,
		fileName: ElementData[0].fileName,
		position: 0,
		helpMessage : ElementData[0].helpMessage
	});
	const [ chinPosition, setChinPosition ] = useState({
		title: ElementDataChin[0].title,
		fileName: ElementDataChin[0].fileName,
		position: 0
	});
	return (
		<footer className="footer-configurator">
			<FooterHeader setOpenOptionMenu = {setOpenOptionMenu} />
			<Tabs 
				aerationHelmet = {aerationHelmet}
				setAerationHelmet = {setAerationHelmet}
				screwPosition = {screwPosition}
				setScrewPosition = {setScrewPosition}
				setStandardValue = {setStandardValue}
				standardValue = {standardValue}
				varnishHelmet = {varnishHelmet}
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
				varnishChin = {varnishChin}
				setVarnishChin = {setVarnishChin}
				helmetPosition = {helmetPosition}
				setHelmetPosition = {setHelmetPosition}
				chinPosition = {chinPosition}
				setChinPosition = {setChinPosition}
				aerationChin = {aerationChin}
				nodesConfiguration = {nodesConfiguration}
			/>
			{openOptionMenu.open && openOptionMenu.name === 'menuOption' && <MenuOption setOpenOptionMenu = {setOpenOptionMenu} />}
			{openOptionMenu.open && openOptionMenu.name === 'help' && <PopupHelp setOpenOptionMenu = {setOpenOptionMenu} helmetPosition = {helmetPosition} />}
			{openOptionMenu.open && openOptionMenu.name === 'export' && screenshotsWait.wait  && <ExportWindows setOpenOptionMenu = {setOpenOptionMenu} screenshotsWait = {screenshotsWait} />}
		</footer>
	)
}

export default Footer;