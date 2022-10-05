import ScreenShot from "../body/Camera/ScreenShot"

const FooterHeader = ({setOpenOptionMenu, downMenu,	setDownMenu}) => {
	const menuDownClic = () => {
		setDownMenu(!downMenu)
	}
	const menuOptionClic = () => {
		setOpenOptionMenu({
			name: 'menuOption', 
			open: true
		})
	}
	const menuHelpClic = () => {
		setOpenOptionMenu({
			name: 'help', 
			open: true
		})
	}
	const menuExportClic = () => {
		ScreenShot();
		setOpenOptionMenu({
			name: 'export', 
			open: true
		})
	}
	return (
		<div className="footer-configurator-header">
			<svg version="1.1" id="down" viewBox="0 0 41 41" onClick={menuDownClic}>
				<polygon className="down" points="12,15.1 9.9,17.3 18.4,25.7 20.5,27.9 31.1,17.3 29,15.1 20.5,23.6 "></polygon>
				<g>
					<path className="down" d="M20.5,1.5c10.5,0,19,8.5,19,19s-8.5,19-19,19s-19-8.5-19-19S10,1.5,20.5,1.5 M20.5,0.5c-11,0-20,9-20,20   s9,20,20,20s20-9,20-20S31.5,0.5,20.5,0.5L20.5,0.5z"></path>
				</g>
			</svg>
			<svg version="1.1" id="menu_option" viewBox="0 0 41 41" onClick={menuOptionClic}>
				<g>
					<path className="menuOption" d="M20.5,1.5c10.5,0,19,8.5,19,19s-8.5,19-19,19s-19-8.5-19-19S10,1.5,20.5,1.5 M20.5,0.5c-11,0-20,9-20,20   s9,20,20,20s20-9,20-20S31.5,0.5,20.5,0.5L20.5,0.5z"></path>
				</g>
				<g>
					<path className="menuOption" d="M29.5,15.5h-13c-0.6,0-1-0.4-1-1v0c0-0.6,0.4-1,1-1h13c0.6,0,1,0.4,1,1v0C30.5,15.1,30.1,15.5,29.5,15.5z"></path>
					<path className="menuOption" d="M29.5,21.5h-13c-0.6,0-1-0.4-1-1v0c0-0.6,0.4-1,1-1h13c0.6,0,1,0.4,1,1v0C30.5,21.1,30.1,21.5,29.5,21.5z"></path>
					<path className="menuOption" d="M29.5,27.5h-13c-0.6,0-1-0.4-1-1v0c0-0.6,0.4-1,1-1h13c0.6,0,1,0.4,1,1v0C30.5,27.1,30.1,27.5,29.5,27.5z"></path>
					<circle className="menuOption" cx="11.5" cy="14.5" r="1"></circle>
					<circle className="menuOption" cx="11.5" cy="20.5" r="1"></circle>
					<circle className="menuOption" cx="11.5" cy="26.5" r="1"></circle>
				</g>
			</svg>
			<svg version="1.1" id="info_logo" className="info_logo" viewBox="0 0 41 41" onClick={menuHelpClic}>
				<g>
					<path className="info_logo_st0" d="M20.5,1.5c10.5,0,19,8.5,19,19s-8.5,19-19,19s-19-8.5-19-19S10,1.5,20.5,1.5 M20.5,0.5c-11,0-20,9-20,20   s9,20,20,20s20-9,20-20S31.5,0.5,20.5,0.5L20.5,0.5z"></path>
				</g>
				<g>
					<path className="info_logo_st0" d="M20.4,12.9c0.1,0,0.3,0,0.4,0l0.1,0c0.3,0,0.6,0.1,0.9,0.2c0.5,0.2,0.8,0.5,1.1,0.9c0.1,0.2,0.2,0.4,0.3,0.6   c0.2,0.4,0.2,0.8,0.2,1.3c0,0.4-0.1,0.7-0.3,1.1c-0.1,0.2-0.3,0.5-0.5,0.7c-0.2,0.3-0.5,0.6-0.9,0.9c-0.7,0.5-1.3,0.9-1.8,1.3   c-0.3,0.3-0.7,0.6-1,0.9c-0.2,0.2-0.3,0.4-0.4,0.7c-0.1,0.3-0.1,0.6-0.1,1c0,0.3,0,0.5,0,0.8l3,0c0,0,0-0.1,0-0.1   c0.1-0.6,0.2-1.1,0.6-1.5c0.3-0.3,0.6-0.6,0.9-0.9l0.4-0.3c0.2-0.1,0.4-0.3,0.6-0.4c0.4-0.3,0.8-0.7,1.2-1c0.4-0.3,0.7-0.7,0.9-1   c0.5-0.7,0.7-1.5,0.7-2.3c0-0.6,0-1.1-0.2-1.6c-0.2-0.8-0.6-1.5-1.2-2.1c-0.3-0.3-0.7-0.6-1.2-0.8c-0.9-0.5-1.9-0.8-3-0.9   c-0.4,0-0.8,0-1.2,0c-0.4,0-0.9,0-1.3,0.1c-0.5,0.1-1,0.2-1.4,0.4c-0.8,0.4-1.4,0.8-2,1.5c-0.4,0.5-0.7,1.1-0.9,1.8   c-0.2,0.6-0.3,1.2-0.3,1.9l3.2,0c0-0.1,0-0.2,0-0.3c0.1-0.6,0.3-1.1,0.6-1.7c0.3-0.5,0.7-0.8,1.3-1C19.5,13,19.9,13,20.4,12.9   C20.3,12.9,20.4,12.9,20.4,12.9z"></path>
					<path className="info_logo_st0" d="M20.1,26.5c-0.2,0-0.4,0-0.5,0.1c-0.7,0.1-1.1,0.5-1.4,1.1c-0.2,0.4-0.2,0.9-0.1,1.3c0.1,0.7,0.5,1.2,1.2,1.4   c0.5,0.2,1.1,0.2,1.6,0c0.6-0.2,0.9-0.5,1.2-1.1c0.1-0.2,0.2-0.5,0.2-0.8l0-0.1c0-0.1,0-0.2,0-0.3c-0.1-0.7-0.5-1.1-1-1.4   C20.8,26.6,20.5,26.5,20.1,26.5z"></path>
				</g>
			</svg>
			<svg version="1.1" id="export" className="export" viewBox="0 0 35 35" onClick={menuExportClic}>
				<g>
					<path className="export_st0" d="M26.3,25.4l2.9-2.1v10.2H0V5.1h10.5L7.2,8H2.9v22.6h23.4V25.4L26.3,25.4z M8.1,21.6c-0.1,0.2-0.3,0.3-0.5,0.2   c-0.2,0-0.3-0.2-0.3-0.4c0.5-2.5,1.1-4.5,1.9-6.2c0.8-1.7,1.7-3.1,2.9-4.4s2.7-2.2,4.6-2.7c1.8-0.6,4.1-0.9,6.7-0.9V1.5L35,11.7   L23.4,21.8V16c-1.6,0-2.9,0-4,0.1c-1.1,0.1-2.4,0.3-3.8,0.7c-1.4,0.4-2.8,0.9-4,1.7C10.3,19.4,9.1,20.4,8.1,21.6z"></path>
				</g>
			</svg>
		</div>
	)
}

export default FooterHeader;