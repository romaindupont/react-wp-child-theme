const { useState } = wp.element;
import FooterHeader from './footer-header';
import Tabs from './tabs';
import MenuOption from './menuOption';
import PopupHelp from './popupHelp';
import ExportWindows from './exportWindows';
import ElementData from '../../../assets/json/elementHelmet';
import ElementDataChin from '../../../assets/json/elementChin';
import ElementDataVisor from '../../../assets/json/elementVisor';

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
	nodesConfiguration,
	tabsChoice,
	setTabsChoice,
	tabsCheck,
	setTabsCheck,
	traduction,
	setScreenshotsWait,
	downMenu,
	setDownMenu,
	backNumberInput,
	setBackNumberInput,
	leftNumberInput,
	setLeftNumberInput,
	rightNumberInput,
	setRightNumberInput,
	engravingInput,
	setEngravingInput,
	withChin,
	setWithChin,
	typeChoice,
	setTypeChoice,
	withVisor,
	setWithVisor,
	mySku,
	setMySku,
	shortLink,
	setShortLink
}) => {
	const [ openOptionMenu, setOpenOptionMenu ] = useState({
			name: '',
			open: false
	});
	let language = document.querySelector('html').lang;
	let elementsOfChin = ElementDataChin[0].en;
	let elementsOfHelmet = ElementData[0].en;
	let elementsOfVisor = ElementDataVisor[0].en;
	if (language.includes('fr')) {
		elementsOfChin = ElementDataChin[0].fr;
		elementsOfHelmet = ElementData[0].fr;
		elementsOfVisor = ElementDataVisor[0].fr;
	}
	if (language.includes('es')) {
		elementsOfChin = ElementDataChin[0].en;
		elementsOfHelmet = ElementData[0].en;
		elementsOfVisor = ElementDataVisor[0].en;
	}
	const [ helmetPosition, setHelmetPosition ] = useState({
		title: elementsOfHelmet[0].title,
		fileName: elementsOfHelmet[0].fileName,
		position: 0,
		helpMessage : elementsOfHelmet[0].helpMessage
	});
	const [ chinPosition, setChinPosition ] = useState({
		title: elementsOfChin[0].title,
		fileName: elementsOfChin[0].fileName,
		position: 0,
		helpMessage : elementsOfChin[0].helpMessage
	});
	const [ visorPosition, setVisorPosition ] = useState({
		title: elementsOfVisor[0].title,
		fileName: elementsOfVisor[0].fileName,
		position: 0,
		helpMessage : elementsOfVisor[0].helpMessage
	});
	return (
		<footer className="footer-configurator">
			<FooterHeader setOpenOptionMenu = {setOpenOptionMenu} downMenu = {downMenu} setDownMenu = {setDownMenu} />
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
				tabsChoice = {tabsChoice}
				setTabsChoice = {setTabsChoice}
				tabsCheck = {tabsCheck}
				setTabsCheck = {setTabsCheck}
				traduction = {traduction}
				downMenu = {downMenu}
				visorPosition = {visorPosition}
				setVisorPosition = {setVisorPosition}
				backNumberInput = {backNumberInput}
				setBackNumberInput = {setBackNumberInput}
				leftNumberInput = {leftNumberInput}
				setLeftNumberInput = {setLeftNumberInput}
				rightNumberInput = {rightNumberInput}
				setRightNumberInput = {setRightNumberInput}
				engravingInput = {engravingInput}
				setEngravingInput = {setEngravingInput}
				withChin = {withChin}
				setWithChin = {setWithChin}
				typeChoice = {typeChoice}
				setTypeChoice = {setTypeChoice}
				withVisor = {withVisor}
				setWithVisor = {setWithVisor}
				mySku = {mySku}
				setMySku = {setMySku}
			/>
			{openOptionMenu.open && openOptionMenu.name === 'menuOption' && 
				<MenuOption 
					setOpenOptionMenu = {setOpenOptionMenu} 
					elementsOfHelmet = {elementsOfHelmet} 
					elementsOfChin = {elementsOfChin} 
					elementsOfVisor = {elementsOfVisor} 
					traduction = {traduction} 
					setHelmetPosition = {setHelmetPosition}
					setChinPosition = {setChinPosition}
					setVisorPosition = {setVisorPosition}
					tabsCheck = {tabsCheck}
					setTabsCheck = {setTabsCheck}
				/>
			}
			{openOptionMenu.open && openOptionMenu.name === 'help' && 
				<PopupHelp 
					setOpenOptionMenu = {setOpenOptionMenu} 
					helmetPosition = {helmetPosition} 
					chinPosition = {chinPosition} 
					tabsCheck = {tabsCheck}
				/>
			}
			{openOptionMenu.open && openOptionMenu.name === 'export' && screenshotsWait.wait  && 
				<ExportWindows 
					setOpenOptionMenu = {setOpenOptionMenu} 
					screenshotsWait = {screenshotsWait} 
					traduction = {traduction} 
					setScreenshotsWait = {setScreenshotsWait} 
					shortLink = {shortLink}
				/>
			}
		</footer>
	)
}

export default Footer;