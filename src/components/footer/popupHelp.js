const popupHelp = ({setOpenOptionMenu, helmetPosition, chinPosition, tabsCheck}) => {
	const menuClose = () => {
		setOpenOptionMenu({
			name: '',
			open: false
		})
	}
	return (
		<div className="popupHelp">
			<svg version="1.1" id="popupHelp_closeLogo" className="popupHelp_closeLogo" viewBox="0 0 41 41" onClick={menuClose}>
				<polygon className="crossWhite" points="28.3,14.1 26.9,12.7 20.5,19.1 14.1,12.7 12.7,14.1 19.1,20.5 12.7,26.9 14.1,28.3 20.5,21.9   26.9,28.3 28.3,26.9 21.9,20.5 "></polygon>
			</svg>
			{
				tabsCheck.helmetCheck ? 
				<div className="messagesHelp">{helmetPosition.helpMessage}</div> : tabsCheck.chinCheck ? <div className="messagesHelp">{chinPosition.helpMessage}</div> : ''
			}
		</div>
	)
}

export default popupHelp;