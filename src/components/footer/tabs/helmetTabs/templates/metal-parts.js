const MetalsParts = ({setStandardValue,	standardValue}) => {
	return (
		<div className="metalParts">
			<div className="colorP" onClick={()=>setStandardValue({...standardValue, Metal_pieces:'titanium'})}><div className="roundColor titan"></div><span className="textAction">Titan</span></div>
			<div className="colorP" onClick={()=>setStandardValue({...standardValue, Metal_pieces:'black'})}><div className="roundColor black"></div><span className="textAction">Black</span></div>
			<div className="colorP" onClick={()=>setStandardValue({...standardValue, Metal_pieces:'gold'})}><div className="roundColor copperFoil"></div><span className="textAction">Copper Foil</span></div>
		</div>
	)
}

export default MetalsParts;