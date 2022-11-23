const MenuOption = ({setOpenOptionMenu, elementsOfHelmet, elementsOfChin,	elementsOfVisor}) => {
/* 	let language = document.querySelector('html').lang; */
/* 	if (language.includes('fr')) {}
	if (language.includes('en')) {}*/
	console.log(elementsOfHelmet); 
	const menuClose = () => {
		setOpenOptionMenu({
			name: '',
			open: false
		})
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
				<h3>Helmet</h3>
				<div>
					{elementsOfHelmet.map((element, i)=> (<p key={i}>{element.title}</p>) )}
				</div>
			</div>
			<div>
				<h3>Chinguard</h3>
				<div>
					{elementsOfChin.map((element, i)=> (<p key={i}>{element.title}</p>) )}
				</div>
			</div>
			<div>
				<h3>Visor</h3>
				<div>
					{elementsOfVisor.map((element, i)=> (<p key={i}>{element.title}</p>) )}
				</div>
			</div>
		</div>
	)

}

export default MenuOption;