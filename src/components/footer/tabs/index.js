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
	setBackEngraving
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
			/>
		</div>
	)
}

export default Tabs;