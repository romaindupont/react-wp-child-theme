import RadioTabs from "./radioTabs";

const Tabs = ({
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
	helmetPosition,
	setHelmetPosition,
	chinPosition,
	setChinPosition,
	nodesConfiguration,
	tabsChoice,
	setTabsChoice,
	tabsCheck,
	setTabsCheck,
	traduction,
	downMenu,
	visorPosition,
	setVisorPosition,
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
	setMySku
}) => {
	return (
		<div className="sd-tabs">
			<RadioTabs 
				id = 'tabone'
				eyeType = {tabsChoice.helmet} 
				title = 'Helmet'
				setTabsChoice = {setTabsChoice}
				setTabsCheck = {setTabsCheck}
				checked = {tabsCheck.helmetCheck}
				tabsChoice = {tabsChoice}
				tabsCheck = {tabsCheck}
				aerationHelmet = {aerationHelmet}
				setAerationHelmet = {setAerationHelmet}
				screwPosition = {screwPosition}
				setScrewPosition = {setScrewPosition}
				setStandardValue = {setStandardValue}
				standardValue = {standardValue}
				varnishHelmet = {varnishHelmet}
				setVarnishHelmet = {setVarnishHelmet}
				setBackNumberWindow = {setBackNumberWindow}
				backNumberWindow = {backNumberWindow}
				leftNumberWindow = {leftNumberWindow}
				rightNumberWindow = {rightNumberWindow}
				setLeftNumberWindow = {setLeftNumberWindow}
				setRightNumberWindow = {setRightNumberWindow} 
				backEngraving = {backEngraving}
				setBackEngraving = {setBackEngraving}
				helmetPosition = {helmetPosition}
				setHelmetPosition	= {setHelmetPosition}
				nodesConfiguration = {nodesConfiguration}
				traductionTitle = {traduction.HelmetTitle}
				traduction = {traduction}
				downMenu = {downMenu}
				backNumberInput = {backNumberInput}
				setBackNumberInput = {setBackNumberInput}
				leftNumberInput = {leftNumberInput}
				setLeftNumberInput = {setLeftNumberInput}
				rightNumberInput = {rightNumberInput}
				setRightNumberInput = {setRightNumberInput}
				engravingInput = {engravingInput}
				setEngravingInput = {setEngravingInput}
				withChin = {withChin}
				withVisor = {withVisor}
				mySku= {mySku}
				setMySku= {setMySku}
			/>
			<RadioTabs 
				id = 'tabtwo'
				eyeType = {tabsChoice.chin} 
				title = 'Chinguard'
				setTabsChoice = {setTabsChoice}
				setTabsCheck = {setTabsCheck}
				checked = {tabsCheck.chinCheck}
				tabsChoice = {tabsChoice}
				tabsCheck = {tabsCheck}
				aerationChin = {aerationChin}
				setAerationChin = {setAerationChin}
				setStandardValue = {setStandardValue}
				standardValue = {standardValue}
				varnishChin = {varnishChin}
				setVarnishChin = {setVarnishChin}
				chinPosition = {chinPosition}
				setChinPosition = {setChinPosition}
				nodesConfiguration = {nodesConfiguration}
				traductionTitle = {traduction.ChinTitle}
				traduction = {traduction}
				downMenu = {downMenu}
				withChin = {withChin}
				setWithChin = {setWithChin}
				mySku= {mySku}
				setMySku= {setMySku}
			/>
			<RadioTabs 
				id = 'tabthree'
				eyeType = {tabsChoice.visor} 
				title = 'Visor'
				setTabsChoice = {setTabsChoice}
				setTabsCheck = {setTabsCheck}
				checked = {tabsCheck.visorCheck}
				tabsChoice = {tabsChoice}
				tabsCheck = {tabsCheck}
				setStandardValue = {setStandardValue}
				standardValue = {standardValue}
				nodesConfiguration = {nodesConfiguration}
				traductionTitle = {traduction.VisorTitle}
				traduction = {traduction}
				downMenu = {downMenu}
				visorPosition = {visorPosition}
				setVisorPosition = {setVisorPosition}
				typeChoice = {typeChoice}
				setTypeChoice = {setTypeChoice}
				withVisor = {withVisor}
				setWithVisor = {setWithVisor}
				withChin = {withChin}
				mySku= {mySku}
				setMySku= {setMySku}
			/>
		</div>
	)
}

export default Tabs;