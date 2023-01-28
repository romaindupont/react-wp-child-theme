const MenuOption = ({
	setOpenOptionMenu, 
	elementsOfHelmet, 
	elementsOfChin,	
	elementsOfVisor, 
	traduction,
	setHelmetPosition, 
	setChinPosition,	
	setVisorPosition, 
	setTabsCheck
}) => {
	const menuClose = () => {
		setOpenOptionMenu({
			name: '',
			open: false
		})
	}
	const choiceMenuName = (type, i) => {
		if (type === 'helmet' ) {
			setHelmetPosition({
				title: elementsOfHelmet[i].title,
				fileName: elementsOfHelmet[i].fileName,
				position: i,
				helpMessage : elementsOfHelmet[i].helpMessage
			});
			setTabsCheck({
				helmetCheck: true,
				chinCheck: false,
				visorCheck: false
			});
		}
		if (type === 'visor' ) {
			setVisorPosition({
				title: elementsOfVisor[i].title,
				fileName: elementsOfVisor[i].fileName,
				position: i,
				helpMessage : elementsOfVisor[i].helpMessage
			});
			setTabsCheck({
				helmetCheck: false,
				chinCheck: false,
				visorCheck: true
			});
		}
		if (type === 'chin' ) {
			setChinPosition({
				title: elementsOfChin[i].title,
				fileName: elementsOfChin[i].fileName,
				position: i,
				helpMessage : elementsOfChin[i].helpMessage
			});
			setTabsCheck({
				helmetCheck: false,
				chinCheck: true,
				visorCheck: false
			});
		}
		menuClose();
	}
	return (
		<div className="menu_option">
			<svg version="1.1" id="closeOption" className="closeOption" onClick={menuClose}>
				<g>
					<path className="closeOption_st101" d="M20.5,1.5c10.5,0,19,8.5,19,19s-8.5,19-19,19s-19-8.5-19-19S10,1.5,20.5,1.5 M20.5,0.5c-11,0-20,9-20,20   s9,20,20,20s20-9,20-20S31.5,0.5,20.5,0.5L20.5,0.5z"></path>
				</g>
				<polygon className="closeOption_st101" points="28.3,14.1 26.9,12.7 20.5,19.1 14.1,12.7 12.7,14.1 19.1,20.5 12.7,26.9 14.1,28.3 20.5,21.9   26.9,28.3 28.3,26.9 21.9,20.5 "></polygon>
			</svg>
			<div>
				<h3>{traduction.HelmetTitle}</h3>
				<div>
					{elementsOfHelmet.map((element, i)=> (<p key={i} onClick={()=>choiceMenuName('helmet', i)}>{element.title}</p>) )}
				</div>
			</div>
			<div>
				<h3>{traduction.ChinTitle}</h3>
				<div>
					{elementsOfChin.map((element, i)=> (<p key={i} onClick={()=>choiceMenuName('chin', i)}>{element.title}</p>) )}
				</div>
			</div>
			<div>
				<h3>{traduction.VisorTitle}</h3>
				<div>
					{elementsOfVisor.map((element, i)=> (<p key={i} onClick={()=>choiceMenuName('visor', i)}>{element.title}</p>) )}
				</div>
			</div>
		</div>
	)

}

export default MenuOption;