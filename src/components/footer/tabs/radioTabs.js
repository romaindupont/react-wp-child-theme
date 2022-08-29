import HelmetTabs from "./helmetTabs";
import VisorTabs from "./visorTabs";
import ChinTabs from "./chinTabs";

const radioTabs = ({id, eyeType, title, setTabsChoice, checked, setTabsCheck, tabsChoice, tabsCheck}) => {
	const changeCheck = (e) => {
		/* e.preventDefault(); */
		switch(e.target.value) {
			case 'Helmet':
				setTabsCheck({
					helmetCheck: !checked,
					chinCheck: tabsCheck.chinCheck,
					visorCheck: tabsCheck.visorCheck
				});
				break;
			case 'Chinguard':
				setTabsCheck({
					chinCheck: !checked,
					helmetCheck: tabsCheck.helmetCheck,
					visorCheck: tabsCheck.visorCheck
				});
				break;
			case 'Visor':
				setTabsCheck({
					visorCheck: !checked,
					helmetCheck: tabsCheck.helmetCheck,
					chinCheck: tabsCheck.chinCheck
				});
				break;
			default:
				setTabsCheck({
					visorCheck: true,
					helmetCheck: false,
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
			<input className="sd-tab-radio" name="tabs" tabIndex="1" type="radio" id={id} /* checked={checked} */ onChange={changeCheck} value={title}/>
			<label className="sd-tab-label label1" htmlFor={id}>
				<div className="sd-tab-desc">{title}</div>
				{eyeType ?  
					<svg version="1.1" id="eye" viewBox="0 0 31.2 31.2" onClick={openEyeClic}>
						<path className="eye-on" id="on" d="M15.6,0.6c-8.3,0-15,6.7-15,15s6.7,15,15,15s15-6.7,15-15S23.9,0.6,15.6,0.6z M15.6,20.4c-5,0-9.1-4.8-9.1-4.8  s1.5-1.7,3.7-3.1l2.1,2.1c-0.1,0.3-0.2,0.6-0.2,1c0,1.9,1.6,3.5,3.5,3.5c0.3,0,0.7-0.1,1-0.2l1.2,1.2C17.1,20.3,16.3,20.4,15.6,20.4  z M13.9,16.2l1,1C14.5,17.1,14.1,16.7,13.9,16.2z M21,21.8L9.4,10.1l0.8-0.8L21.8,21L21,21.8z M16.2,13.9c0.5,0.2,0.8,0.6,1,1  L16.2,13.9z M21,18.7l-2.1-2.1c0.1-0.3,0.2-0.6,0.2-1c0-1.9-1.6-3.5-3.5-3.5c-0.3,0-0.7,0.1-1,0.2l-1.2-1.2c0.7-0.2,1.4-0.3,2.2-0.3  c5,0,9.1,4.8,9.1,4.8S23.3,17.3,21,18.7z"></path>
					</svg> 
					 : 
					<svg version="1.1" id="eye" viewBox="0 0 31.2 31.2" onClick={openEyeClic}>
						<g>
							<path className="eye_off" id="off" d="M15.6,1.6c7.7,0,14,6.3,14,14s-6.3,14-14,14s-14-6.3-14-14S7.9,1.6,15.6,1.6 M15.6,0.6c-8.3,0-15,6.7-15,15   s6.7,15,15,15s15-6.7,15-15S23.9,0.6,15.6,0.6L15.6,0.6z"></path>
						</g>
						<g>
							<circle className="eye_off" cx="15.6" cy="15.6" r="1.8"></circle>
							<path className="eye_off" d="M15.6,10.8c-5,0-9.1,4.8-9.1,4.8s4.1,4.8,9.1,4.8c5,0,9.1-4.8,9.1-4.8S20.6,10.8,15.6,10.8z M15.6,19.1   c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5c1.9,0,3.5,1.6,3.5,3.5C19.1,17.5,17.5,19.1,15.6,19.1z"></path>
						</g>
					</svg>
				}
			</label>
			<div className="sd-tab-content" tabIndex="1">
				{
					title === 'Helmet' ? <HelmetTabs /> : title === 'Chinguard' ? <ChinTabs /> : title === 'Visor' ? <VisorTabs /> :  ''
				}
			</div>
		</>
	)
}

export default radioTabs;