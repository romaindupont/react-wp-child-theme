import InteriorLeatherBlack from "../../svg/Interior/InteriorLeatherBlack";
import InteriorLeatherBrown from "../../svg/Interior/InteriorLeatherBrown";
import InteriorSuedeBlack from "../../svg/Interior/InteriorSuedeBlack";
import InteriorSuedeBlue from "../../svg/Interior/InteriorSuedeBlue";

const Interior = () => {
	return (
		<div className="varnishList">
			<div className="allScrew">
				<InteriorSuedeBlue />
				<span className="textAction">Suede Blue</span>
			</div>
			<div className="allScrew">
				<InteriorSuedeBlack />
				<span className="textAction">Suede Black</span>
			</div>
			<div className="allScrew">
				<InteriorLeatherBrown />
				<span className="textAction">Leather Brown</span>
			</div>
			<div className="allScrew">
				<InteriorLeatherBlack />
				<span className="textAction">Leather Black</span>
			</div>
		</div>
	)
}

export default Interior;