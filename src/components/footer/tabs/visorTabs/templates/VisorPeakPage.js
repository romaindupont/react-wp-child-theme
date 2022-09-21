const VisorPeakPage = ({setStandardValue,	standardValue}) => {
	return (
		<div className="peak_visor_page">
			<div className="colorListType">
				<input className="inputVisor_peak" type="radio" name="peak_visor" id="plain" value="plain" onClick={()=>setStandardValue({...standardValue, Visor_peak_type:'plain'})}/>
				<label className={standardValue.Visor_peak_type === 'plain' ? 'selectButton' : 'buttonChoice'} htmlFor="plain">Plain</label>
				<input className="inputVisor_peak" type="radio" name="peak_visor" id="metallic" value="metallic" onClick={()=>setStandardValue({...standardValue, Visor_peak_type:'metallic'})}/>
				<label className={standardValue.Visor_peak_type === 'metallic' ? 'selectButton' : 'buttonChoice'} htmlFor="metallic">Metallic</label>
				<input className="inputVisor_peak" type="radio" name="peak_visor" id="glitter" value="glitter" onClick={()=>setStandardValue({...standardValue, Visor_peak_type:'glitter'})}/>
				<label className={standardValue.Visor_peak_type === 'glitter' ? 'selectButton' : 'buttonChoice'} htmlFor="glitter">Glitter</label>
				<input className="inputVisor_peak" type="radio" name="peak_visor" id="gilding" value="gilding" onClick={()=>setStandardValue({...standardValue, Visor_peak_type:'gilding'})}/>
				<label className={standardValue.Visor_peak_type === 'gilding' ? 'selectButton' : 'buttonChoice'} htmlFor="gilding">Gilding</label>
			</div>
			<div className="colorList">
			{standardValue.Visor_peak_type === 'plain' ? 
				<>
					<div className={standardValue.Visor_peak_color === 'carbon' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'carbon'})}><div className="roundColor carbon"></div><span className="textAction">Carbon</span></div>
					<div className={standardValue.Visor_peak_color === 'white' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'white'})}><div className="roundColor white"></div><span className="textAction">White</span></div>
					<div className={standardValue.Visor_peak_color === 'black' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'black'})}><div className="roundColor black"></div><span className="textAction">Black</span></div>
					<div className={standardValue.Visor_peak_color === 'estate blue' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'estate blue'})}><div className="roundColor EstateBlue"></div><span className="textAction">Estate Blue</span></div>
					<div className={standardValue.Visor_peak_color === 'pirate grey' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'pirate grey'})}><div className="roundColor pirateGrey"></div><span className="textAction">Pirate Grey</span></div>
					<div className={standardValue.Visor_peak_color === 'dusk blue' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'dusk blue'})}><div className="roundColor duskBlue"></div><span className="textAction">Dusk Blue</span></div>
					<div className={standardValue.Visor_peak_color === 'iris yellow' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'iris yellow'})}><div className="roundColor yellowIris"></div><span className="textAction">Yellow Iris</span></div>
					<div className={standardValue.Visor_peak_color === 'iceberg green' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'iceberg green'})}><div className="roundColor icebergGreen"></div><span className="textAction">Iceberg Green</span></div>
					<div className={standardValue.Visor_peak_color === 'blazing yellow' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'blazing yellow'})}><div className="roundColor blazingYellow"></div><span className="textAction">Blazing Yellow</span></div>
					<div className={standardValue.Visor_peak_color === 'blazing orange' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'blazing orange'})}><div className="roundColor blazingOrange"></div><span className="textAction">Blazing Orange</span></div>
					<div className={standardValue.Visor_peak_color === 'green gables' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'green gables'})}><div className="roundColor greenGables"></div><span className="textAction">Green Gables</span></div>
					<div className={standardValue.Visor_peak_color === 'orchid pink' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'orchid pink'})}><div className="roundColor orchidPink"></div><span className="textAction">Orchid Pink</span></div>
					<div className={standardValue.Visor_peak_color === 'camel' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'camel'})}><div className="roundColor camel"></div><span className="textAction">Camel</span></div>
					<div className={standardValue.Visor_peak_color === 'brown stone' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'brown stone'})}><div className="roundColor brownStone"></div><span className="textAction">Brown Stone</span></div>
					<div className={standardValue.Visor_peak_color === 'cayenne red' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'cayenne red'})}><div className="roundColor cayenneRed"></div><span className="textAction">Cayenne Red</span></div>
					<div className={standardValue.Visor_peak_color === 'chinese red' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'chinese red'})}><div className="roundColor chinesesRed"></div><span className="textAction">Chineses Red</span></div>
					<div className={standardValue.Visor_peak_color === 'fluo yellow' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'fluo yellow'})}><div className="roundColor fluoYellow"></div><span className="textAction">Fluo Yellow</span></div>
					<div className={standardValue.Visor_peak_color === 'fluo pink' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'fluo pink'})}><div className="roundColor fluoPink"></div><span className="textAction">Fluo Pink</span></div>
				</>
				: standardValue.Chinguard_design_type === 'metallic' || standardValue.Chinguard_design_type === 'glitter' ? 
				<>
					<div className={standardValue.Visor_peak_color === 'white' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'white'})}><div className="roundColor white"></div><span className="textAction">White</span></div>
					<div className={standardValue.Visor_peak_color === 'black' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'black'})}><div className="roundColor black"></div><span className="textAction">Black</span></div>
					<div className={standardValue.Visor_peak_color === 'estate blue' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'estate blue'})}><div className="roundColor EstateBlue"></div><span className="textAction">Estate Blue</span></div>
					<div className={standardValue.Visor_peak_color === 'pirate grey' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'pirate grey'})}><div className="roundColor pirateGrey"></div><span className="textAction">Pirate Grey</span></div>
					<div className={standardValue.Visor_peak_color === 'dusk blue' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'dusk blue'})}><div className="roundColor duskBlue"></div><span className="textAction">Dusk Blue</span></div>
					<div className={standardValue.Visor_peak_color === 'iris yellow' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'iris yellow'})}><div className="roundColor yellowIris"></div><span className="textAction">Yellow Iris</span></div>
					<div className={standardValue.Visor_peak_color === 'iceberg green' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'iceberg green'})}><div className="roundColor icebergGreen"></div><span className="textAction">Iceberg Green</span></div>
					<div className={standardValue.Visor_peak_color === 'blazing yellow' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'blazing yellow'})}><div className="roundColor blazingYellow"></div><span className="textAction">Blazing Yellow</span></div>
					<div className={standardValue.Visor_peak_color === 'blazing orange' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'blazing orange'})}><div className="roundColor blazingOrange"></div><span className="textAction">Blazing Orange</span></div>
					<div className={standardValue.Visor_peak_color === 'green gables' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'green gables'})}><div className="roundColor greenGables"></div><span className="textAction">Green Gables</span></div>
					<div className={standardValue.Visor_peak_color === 'orchid pink' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'orchid pink'})}><div className="roundColor orchidPink"></div><span className="textAction">Orchid Pink</span></div>
					<div className={standardValue.Visor_peak_color === 'camel' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'camel'})}><div className="roundColor camel"></div><span className="textAction">Camel</span></div>
					<div className={standardValue.Visor_peak_color === 'brown stone' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'brown stone'})}><div className="roundColor brownStone"></div><span className="textAction">Brown Stone</span></div>
					<div className={standardValue.Visor_peak_color === 'cayenne red' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'cayenne red'})}><div className="roundColor cayenneRed"></div><span className="textAction">Cayenne Red</span></div>
					<div className={standardValue.Visor_peak_color === 'chinese red' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'chinese red'})}><div className="roundColor chinesesRed"></div><span className="textAction">Chineses Red</span></div>
				</>: 
				<>
					<div className={standardValue.Visor_peak_color === 'copper foil' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'copper foil'})}><div className="roundColor copperFoil"></div><span className="textAction">Copper Foil</span></div>
					<div className={standardValue.Visor_peak_color === 'gold foil' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'gold foil'})}><div className="roundColor goldFoil"></div><span className="textAction">Gold Foil</span></div>
					<div className={standardValue.Visor_peak_color === 'silver foil' ? 'selectColor' : 'colorP'} onClick={()=>setStandardValue({...standardValue, Visor_peak_color:'silver foil'})}><div className="roundColor silverFoil"></div><span className="textAction">Silver Foil</span></div>
				</>
			}
			</div>
		</div>
	)
}
export default VisorPeakPage;