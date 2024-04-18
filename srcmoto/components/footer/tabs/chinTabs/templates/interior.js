import InteriorLeatherBlack from "../../svg/Interior/InteriorLeatherBlack";
import InteriorLeatherBrown from "../../svg/Interior/InteriorLeatherBrown";
import InteriorSuedeBlack from "../../svg/Interior/InteriorSuedeBlack";
import InteriorSuedeBlue from "../../svg/Interior/InteriorSuedeBlue";

const Interior = ({setStandardValue, standardValue}) => {
	return (
		<div className="varnishList">
			<div className="allScrew" onClick={()=>setStandardValue({...standardValue, Chinguard_interior:'suede|blue'})}>
				<InteriorSuedeBlue />
				<span className="textAction">Suede Blue</span>
			</div>
			<div className="allScrew" onClick={()=>setStandardValue({...standardValue, Chinguard_interior:'suede|beige'})}>
				<InteriorSuedeBlack />
				<span className="textAction">Suede Black</span>
			</div>
			<div className="allScrew" onClick={()=>setStandardValue({...standardValue, Chinguard_interior:'leather|red'})}>
				<InteriorLeatherBrown />
				<span className="textAction">Leather Brown</span>
			</div>
			<div className="allScrew" onClick={()=>setStandardValue({...standardValue, Chinguard_interior:'leather|black'})}>
				<InteriorLeatherBlack />
				<span className="textAction">Leather Black</span>
			</div>
		</div>
	)
}

export default Interior;