const MainColor = ({setStandardValue, standardValue}) => {
	return (
		<>
		<div className="colorListType">
			<span className={standardValue.Helmet_color_type === 'plain' ? 'selectButton' : 'buttonChoice'} onClick={() => setStandardValue({...standardValue, Helmet_color_type:'plain'})}>Plain</span>
			<span className={standardValue.Helmet_color_type === 'metallic' ? 'selectButton' : 'buttonChoice'} onClick={() => setStandardValue({...standardValue, Helmet_color_type:'metallic'})}>Metallic</span>
			<span className={standardValue.Helmet_color_type === 'glitter' ? 'selectButton' : 'buttonChoice'} onClick={() => setStandardValue({...standardValue, Helmet_color_type:'glitter'})}>Glitter</span>
			<span className={standardValue.Helmet_color_type === 'gilding' ? 'selectButton' : 'buttonChoice'} onClick={() => setStandardValue({...standardValue, Helmet_color_type:'gilding'})}>Gilding</span>
		</div>
		<div className="colorList">
			{standardValue.Helmet_color_type === 'plain' ? 
			<>
				<div className={standardValue.Helmet_color === 'carbon' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'carbon'})}><div className="roundColor carbon"></div><span className="textAction">Carbon</span></div>
				<div className={standardValue.Helmet_color === 'white' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'white'})}><div className="roundColor white"></div><span className="textAction">White</span></div>
				<div className={standardValue.Helmet_color === 'black' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'black'})}><div className="roundColor black"></div><span className="textAction">Black</span></div>
				<div className={standardValue.Helmet_color === 'grey' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'grey'})}><div className="roundColor coolGrey"></div><span className="textAction">Cool Grey</span></div>
				<div className={standardValue.Helmet_color === 'estate blue' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'estate blue'})}><div className="roundColor EstateBlue"></div><span className="textAction">Estate Blue</span></div>
				<div className={standardValue.Helmet_color === 'pirate grey' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'pirate grey'})}><div className="roundColor pirateGrey"></div><span className="textAction">Pirate Grey</span></div>
				<div className={standardValue.Helmet_color === 'dusk blue' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'dusk blue'})}><div className="roundColor duskBlue"></div><span className="textAction">Dusk Blue</span></div>
				<div className={standardValue.Helmet_color === 'doubleCream' ? 'selectColor' : 'colorP'}><div className="roundColor doubleCream"></div><span className="textAction">Double Cream</span></div>
				<div className={standardValue.Helmet_color === 'rallyBlue' ? 'selectColor' : 'colorP'}><div className="roundColor rallyBlue"></div><span className="textAction">Rally Blue</span></div>
				<div className={standardValue.Helmet_color === 'iris yellow' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'iris yellow'})}><div className="roundColor yellowIris"></div><span className="textAction">Yellow Iris</span></div>
				<div className={standardValue.Helmet_color === 'iceberg green' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'iceberg green'})}><div className="roundColor icebergGreen"></div><span className="textAction">Iceberg Green</span></div>
				<div className={standardValue.Helmet_color === 'blazing yellow' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'blazing yellow'})}><div className="roundColor blazingYellow"></div><span className="textAction">Blazing Yellow</span></div>
				<div className={standardValue.Helmet_color === 'greenDouble' ? 'selectColor' : 'colorP'}><div className="roundColor greenDouble"></div><span className="textAction">Green Double</span></div>
				<div className={standardValue.Helmet_color === 'blazing orange' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'blazing orange'})}><div className="roundColor blazingOrange"></div><span className="textAction">Blazing Orange</span></div>
				<div className={standardValue.Helmet_color === 'limeGreen' ? 'selectColor' : 'colorP'}><div className="roundColor limeGreen"></div><span className="textAction">Lime Green</span></div>
				<div className={standardValue.Helmet_color === 'vermillion' ? 'selectColor' : 'colorP'}><div className="roundColor vermillion"></div><span className="textAction">Vermillion</span></div>
				<div className={standardValue.Helmet_color === 'green gables' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'green gables'})}><div className="roundColor greenGables"></div><span className="textAction">Green Gables</span></div>
				<div className={standardValue.Helmet_color === 'orchid pink' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'orchid pink'})}><div className="roundColor orchidPink"></div><span className="textAction">Orchid Pink</span></div>
				<div className={standardValue.Helmet_color === 'camel' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'camel'})}><div className="roundColor camel"></div><span className="textAction">Camel</span></div>
				<div className={standardValue.Helmet_color === 'plumPurple' ? 'selectColor' : 'colorP'}><div className="roundColor plumPurple"></div><span className="textAction">Plum Purple</span></div>
				<div className={standardValue.Helmet_color === 'brown stone' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'brown stone'})}><div className="roundColor brownStone"></div><span className="textAction">Brown Stone</span></div>
				<div className={standardValue.Helmet_color === 'cayenne red' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'cayenne red'})}><div className="roundColor cayenneRed"></div><span className="textAction">Cayenne Red</span></div>
				<div className={standardValue.Helmet_color === 'iridecent blue' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'iridecent blue'})}><div className="roundColor iridescentBlue"></div><span className="textAction">Iridescent Blue</span></div>
				<div className={standardValue.Helmet_color === 'chinese red' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'chinese red'})}><div className="roundColor chinesesRed"></div><span className="textAction">Chineses Red</span></div>
				<div className={standardValue.Helmet_color === 'iridecent pink' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'iridecent pink'})}><div className="roundColor iridescentPink"></div><span className="textAction">Iridescent Pink</span></div>
				<div className={standardValue.Helmet_color === 'fluo yellow' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'fluo yellow'})}><div className="roundColor fluoYellow"></div><span className="textAction">Fluo Yellow</span></div>
				<div className={standardValue.Helmet_color === 'fluo pink' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'fluo pink'})}><div className="roundColor fluoPink"></div><span className="textAction">Fluo Pink</span></div>
			</> 
				: standardValue.Helmet_color_type === 'metallic' || standardValue.Helmet_color_type === 'glitter' ? 
			<>
				<div className={standardValue.Helmet_color === 'white' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'white'})}><div className="roundColor white"></div><span className="textAction">White</span></div>
				<div className={standardValue.Helmet_color === 'black' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'black'})}><div className="roundColor black"></div><span className="textAction">Black</span></div>
				<div className={standardValue.Helmet_color === 'grey' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'grey'})}><div className="roundColor coolGrey"></div><span className="textAction">Cool Grey</span></div>
				<div className={standardValue.Helmet_color === 'estate blue' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'estate blue'})}><div className="roundColor EstateBlue"></div><span className="textAction">Estate Blue</span></div>
				<div className={standardValue.Helmet_color === 'pirate grey' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'pirate grey'})}><div className="roundColor pirateGrey"></div><span className="textAction">Pirate Grey</span></div>
				<div className={standardValue.Helmet_color === 'dusk blue' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'dusk blue'})}><div className="roundColor duskBlue"></div><span className="textAction">Dusk Blue</span></div>
				<div className={standardValue.Helmet_color === 'doubleCream' ? 'selectColor' : 'colorP'}><div className="roundColor doubleCream"></div><span className="textAction">Double Cream</span></div>
				<div className={standardValue.Helmet_color === 'rallyBlue' ? 'selectColor' : 'colorP'}><div className="roundColor rallyBlue"></div><span className="textAction">Rally Blue</span></div>
				<div className={standardValue.Helmet_color === 'iris yellow' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'iris yellow'})}><div className="roundColor yellowIris"></div><span className="textAction">Yellow Iris</span></div>
				<div className={standardValue.Helmet_color === 'iceberg green' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'iceberg green'})}><div className="roundColor icebergGreen"></div><span className="textAction">Iceberg Green</span></div>
				<div className={standardValue.Helmet_color === 'blazing yellow' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'blazing yellow'})}><div className="roundColor blazingYellow"></div><span className="textAction">Blazing Yellow</span></div>
				<div className={standardValue.Helmet_color === 'greenDouble' ? 'selectColor' : 'colorP'}><div className="roundColor greenDouble"></div><span className="textAction">Green Double</span></div>
				<div className={standardValue.Helmet_color === 'blazing orange' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'blazing orange'})}><div className="roundColor blazingOrange"></div><span className="textAction">Blazing Orange</span></div>
				<div className={standardValue.Helmet_color === 'limeGreen' ? 'selectColor' : 'colorP'}><div className="roundColor limeGreen"></div><span className="textAction">Lime Green</span></div>
				<div className={standardValue.Helmet_color === 'vermillion' ? 'selectColor' : 'colorP'}><div className="roundColor vermillion"></div><span className="textAction">Vermillion</span></div>
				<div className={standardValue.Helmet_color === 'green gables' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'green gables'})}><div className="roundColor greenGables"></div><span className="textAction">Green Gables</span></div>
				<div className={standardValue.Helmet_color === 'orchid pink' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'orchid pink'})}><div className="roundColor orchidPink"></div><span className="textAction">Orchid Pink</span></div>
				<div className={standardValue.Helmet_color === 'camel' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'camel'})}><div className="roundColor camel"></div><span className="textAction">Camel</span></div>
				<div className={standardValue.Helmet_color === 'plumPurple' ? 'selectColor' : 'colorP'}><div className="roundColor plumPurple"></div><span className="textAction">Plum Purple</span></div>
				<div className={standardValue.Helmet_color === 'brown stone' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'brown stone'})}><div className="roundColor brownStone"></div><span className="textAction">Brown Stone</span></div>
				<div className={standardValue.Helmet_color === 'cayenne red' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'cayenne red'})}><div className="roundColor cayenneRed"></div><span className="textAction">Cayenne Red</span></div>
				<div className={standardValue.Helmet_color === 'iridecent blue' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'iridecent blue'})}><div className="roundColor iridescentBlue"></div><span className="textAction">Iridescent Blue</span></div>
				<div className={standardValue.Helmet_color === 'chinese red' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'chinese red'})}><div className="roundColor chinesesRed"></div><span className="textAction">Chineses Red</span></div>
				<div className={standardValue.Helmet_color === 'iridecent pink' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'iridecent pink'})}><div className="roundColor iridescentPink"></div><span className="textAction">Iridescent Pink</span></div>
				<div className={standardValue.Helmet_color === 'fluo yellow' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'fluo yellow'})}><div className="roundColor fluoYellow"></div><span className="textAction">Fluo Yellow</span></div>
				<div className={standardValue.Helmet_color === 'fluo pink' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'fluo pink'})}><div className="roundColor fluoPink"></div><span className="textAction">Fluo Pink</span></div>
			</>
			: 
			<>
				<div className={standardValue.Helmet_color === 'copper foil' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'copper foil'})}><div className="roundColor copperFoil"></div><span className="textAction">Copper Foil</span></div>
				<div className={standardValue.Helmet_color === 'gold foil' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'gold foil'})}><div className="roundColor goldFoil"></div><span className="textAction">Gold Foil</span></div>
				<div className={standardValue.Helmet_color === 'silver foil' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Helmet_color:'silver foil'})}><div className="roundColor silverFoil"></div><span className="textAction">Silver Foil</span></div>
			</>}
		</div>
		</>
	)
}

export default MainColor;