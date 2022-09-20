import RadioTabs from "./radioTabs";
const { useState } = wp.element;

const Tabs = ({
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
	helmetPosition,
	setHelmetPosition,
	chinPosition,
	setChinPosition
}) => {
	const [ tabsChoice, setTabsChoice ] = useState({
		helmet: true,
		chin: false,
		visor: false
	});
	const [ tabsCheck, setTabsCheck ] = useState({
		helmetCheck: true,
		chinCheck: false,
		visorCheck: false
	});
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
				setAerationHelmet = {setAerationHelmet}
				setScrewPosition = {setScrewPosition}
				setStandardValue = {setStandardValue}
				standardValue = {standardValue}
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
				setAerationChin = {setAerationChin}
				setStandardValue = {setStandardValue}
				standardValue = {standardValue}
				setVarnishChin = {setVarnishChin}
				chinPosition = {chinPosition}
				setChinPosition = {setChinPosition}
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
			/>
		</div>
	)
}

export default Tabs;