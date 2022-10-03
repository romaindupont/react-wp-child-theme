import RadioTabs from "./radioTabs";
const { useState } = wp.element;

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
	downMenu
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
			/>
		</div>
	)
}

export default Tabs;