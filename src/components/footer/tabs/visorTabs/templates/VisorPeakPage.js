const VisorPeakPage = () => {
	return (
		<div className="peak_visor_page">
			<div className="colorListType">
				<input className="inputVisor_peak" type="radio" name="peak_visor" id="plain" value="plain" />
				<label className="buttonChoice" htmlFor="plain">Plain</label>
				<input className="inputVisor_peak" type="radio" name="peak_visor" id="metallic" value="metallic" />
				<label className="buttonChoice" htmlFor="metallic">Metallic</label>
				<input className="inputVisor_peak" type="radio" name="peak_visor" id="glitter" value="glitter" />
				<label className="buttonChoice" htmlFor="glitter">Glitter</label>
				<input className="inputVisor_peak" type="radio" name="peak_visor" id="sheathing" value="sheathing" />
				<label className="buttonChoice" htmlFor="sheathing">Sheathing</label>
			</div>
			<div className="colorList">
				<div className="colorP"><div className="roundColor carbon"></div><span className="textAction">Carbon</span></div>
				<div className="colorP"><div className="roundColor white"></div><span className="textAction">White</span></div>
				<div className="colorP"><div className="roundColor black"></div><span className="textAction">Black</span></div>
				<div className="colorP"><div className="roundColor coolGrey"></div><span className="textAction">Cool Grey</span></div>
				<div className="colorP"><div className="roundColor EstateBlue"></div><span className="textAction">Estate Blue</span></div>
				<div className="colorP"><div className="roundColor pirateGrey"></div><span className="textAction">Pirate Grey</span></div>
				<div className="colorP"><div className="roundColor duskBlue"></div><span className="textAction">Dusk Blue</span></div>
				<div className="colorP"><div className="roundColor doubleCream"></div><span className="textAction">Double Cream</span></div>
				<div className="colorP"><div className="roundColor rallyBlue"></div><span className="textAction">Rally Blue</span></div>
				<div className="colorP"><div className="roundColor yellowIris"></div><span className="textAction">Yellow Iris</span></div>
				<div className="colorP"><div className="roundColor icebergGreen"></div><span className="textAction">Iceberg Green</span></div>
				<div className="colorP"><div className="roundColor blazingYellow"></div><span className="textAction">Blazing Yellow</span></div>
				<div className="colorP"><div className="roundColor greenDouble"></div><span className="textAction">Green Double</span></div>
				<div className="colorP"><div className="roundColor blazingOrange"></div><span className="textAction">Blazing Orange</span></div>
				<div className="colorP"><div className="roundColor limeGreen"></div><span className="textAction">Lime Green</span></div>
				<div className="colorP"><div className="roundColor vermillion"></div><span className="textAction">Vermillion</span></div>
				<div className="colorP"><div className="roundColor greenGables"></div><span className="textAction">Green Gables</span></div>
				<div className="colorP"><div className="roundColor orchidPink"></div><span className="textAction">Orchid Pink</span></div>
				<div className="colorP"><div className="roundColor camel"></div><span className="textAction">Camel</span></div>
				<div className="colorP"><div className="roundColor plumPurple"></div><span className="textAction">Plum Purple</span></div>
				<div className="colorP"><div className="roundColor brownStone"></div><span className="textAction">Brown Stone</span></div>
				<div className="colorP"><div className="roundColor cayenneRed"></div><span className="textAction">Cayenne Red</span></div>
				<div className="colorP"><div className="roundColor iridescentBlue"></div><span className="textAction">Iridescent Blue</span></div>
				<div className="colorP"><div className="roundColor chinesesRed"></div><span className="textAction">Chineses Red</span></div>
				<div className="colorP"><div className="roundColor iridescentPink"></div><span className="textAction">Iridescent Pink</span></div>
				<div className="colorP"><div className="roundColor fluoYellow"></div><span className="textAction">Fluo Yellow</span></div>
				<div className="colorP"><div className="roundColor fluoPink"></div><span className="textAction">Fluo Pink</span></div>
				<div className="colorP"><div className="roundColor copperFoil"></div><span className="textAction">Copper Foil</span></div>
				<div className="colorP"><div className="roundColor goldFoil"></div><span className="textAction">Gold Foil</span></div>
				<div className="colorP"><div className="roundColor silverFoil"></div><span className="textAction">Silver Foil</span></div>
			</div>
		</div>
	)
}
export default VisorPeakPage;