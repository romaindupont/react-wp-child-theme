import InteriorLeatherBlack from "../../svg/Interior/InteriorLeatherBlack";
import InteriorLeatherBrown from "../../svg/Interior/InteriorLeatherBrown";
import InteriorSuedeBlack from "../../svg/Interior/InteriorSuedeBlack";
import InteriorSuedeBlue from "../../svg/Interior/InteriorSuedeBlue";

const Interior = ({setStandardValue, standardValue, traduction}) => {
	return (
		<div className="varnishList">
			<div className={standardValue.Interior === 'suede|blue' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Interior:'suede|blue'})}>
				<InteriorSuedeBlue />
				<span className="textAction">{traduction.SuedeBlue}</span>
			</div>
			<div className={standardValue.Interior === 'suede|beige' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Interior:'suede|beige'})}>
				<InteriorSuedeBlack />
				<span className="textAction">{traduction.SuedeBlack}</span>
			</div>
			<div className={standardValue.Interior === 'leather|red' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Interior:'leather|red'})}>
				<InteriorLeatherBrown />
				<span className="textAction">{traduction.LeatherBrown}</span>
			</div>
			<div className={standardValue.Interior === 'leather|black' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Interior:'leather|black'})}>
				<InteriorLeatherBlack />
				<span className="textAction">{traduction.LeatherBlack}</span>
			</div>
		</div>
	)
}

export default Interior;