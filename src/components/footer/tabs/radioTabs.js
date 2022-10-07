import HelmetTabs from "./helmetTabs";
import VisorTabs from "./visorTabs";
import ChinTabs from "./chinTabs";

const radioTabs = ({
	id,
	eyeType,
	title,
	setTabsChoice,
	checked,
	setTabsCheck,
	tabsChoice,
	tabsCheck,
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
	traductionTitle,
	traduction,
	downMenu,
	visorPosition,
	setVisorPosition
}) => {
	const changeCheck = (e) => {
		switch(e.target.value) {
			case 'Helmet':
				setTabsCheck({
					helmetCheck: true,
					chinCheck: false,
					visorCheck: false
				});
			break;
			case 'Chinguard':
				setTabsCheck({
					chinCheck: true,
					helmetCheck: false,
					visorCheck: false
				});
			break;
			case 'Visor':
				setTabsCheck({
					visorCheck: true,
					helmetCheck: false,
					chinCheck: false
				});
			break;
			default:
				setTabsCheck({
					visorCheck: false,
					helmetCheck: true,
					chinCheck: false
				});
			break;
		}
	}
	const openEyeClic = () => {
		switch(title) {
			case 'Helmet':
				setTabsChoice({
					helmet: !eyeType,
					chin: tabsChoice.chin,
					visor: tabsChoice.visor
				});
			break;
			case 'Chinguard':
				setTabsChoice({
					chin: !eyeType,
					helmet: tabsChoice.helmet,
					visor: tabsChoice.visor
				});
			break;
			case 'Visor':
				setTabsChoice({
					visor: !eyeType,
					helmet: tabsChoice.helmet,
					chin: tabsChoice.chin
				});
			break;
			default:
				setTabsChoice({
					helmet: true,
					chin: false,
					visor: false
				});
			break;
		}
	}
	return (
		<>
			<input className="sd-tab-radio" name="tabs" tabIndex="1" type="radio" id={id} checked={checked} onChange={changeCheck} value={title}/>
			<label className="sd-tab-label label1" htmlFor={id}>
				<div className="sd-tab-desc">{traductionTitle}</div>
			</label>
			<div className={downMenu ? "sd-tab-content downContent" : "sd-tab-content"} tabIndex="1">
				{
					title === 'Helmet' ? 
						<HelmetTabs
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
							setHelmetPosition = {setHelmetPosition}
							traduction = {traduction}
						/> 
					: title === 'Chinguard' ? 
						<ChinTabs 
							aerationChin = {aerationChin}
							setAerationChin = {setAerationChin}
							setStandardValue = {setStandardValue}
							standardValue = {standardValue}
							varnishChin = {varnishChin}
							setVarnishChin = {setVarnishChin}
							chinPosition = {chinPosition}
							setChinPosition = {setChinPosition}
							traduction = {traduction}
							setTabsChoice = {setTabsChoice}
							tabsChoice = {tabsChoice}
						/> 
					: title === 'Visor' ? 
						<VisorTabs 
							setStandardValue = {setStandardValue}
							standardValue = {standardValue}
							traduction = {traduction}
							setTabsChoice = {setTabsChoice}
							tabsChoice = {tabsChoice}
							visorPosition = {visorPosition}
							setVisorPosition = {setVisorPosition}
						/> 
					:  ''
				}
			</div>
		</>
	)
}

export default radioTabs;