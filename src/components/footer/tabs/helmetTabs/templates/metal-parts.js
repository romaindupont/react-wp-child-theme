const MetalsParts = ({setStandardValue,	standardValue, traduction }) => {
	return (
		<div className="metalParts">
			<div className={standardValue.Metal_pieces === 'titanium' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Metal_pieces:'titanium'})}><div className="roundColor titan"></div><span className="textAction">{traduction.TitaniumMetalParts}</span></div>
			<div className={standardValue.Metal_pieces === 'black' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Metal_pieces:'black'})}><div className="roundColor black"></div><span className="textAction">{traduction.BlackMetalParts}</span></div>
			<div className={standardValue.Metal_pieces === 'gold' ? 'selectColor' : 'colorP'} onClick={() => setStandardValue({...standardValue, Metal_pieces:'gold'})}><div className="roundColor copperFoil"></div><span className="textAction">{traduction.GoldMetalParts}</span></div>
		</div>
	)
}

export default MetalsParts;