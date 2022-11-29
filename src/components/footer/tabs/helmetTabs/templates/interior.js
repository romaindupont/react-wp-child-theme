import InteriorLeatherBlack from "../../svg/Interior/InteriorLeatherBlack";
import InteriorLeatherBrown from "../../svg/Interior/InteriorLeatherBrown";
import InteriorSuedeBlack from "../../svg/Interior/InteriorSuedeBlack";
import InteriorSuedeBlue from "../../svg/Interior/InteriorSuedeBlue";
import InteriorFabricBeige from "../../svg/Interior/InteriorFabricBeige";
import InteriorFabricTartanRed from "../../svg/Interior/InteriorFabricTartanRed";
import InteriorFabricTartanWhite from "../../svg/Interior/InteriorFabricTartanWhite";
import InteriorLeatherRed from "../../svg/Interior/InteriorLeatherRed";
import { useHorizontalScroll } from "../../../../../../utils/useHorizontalScroll";

const Interior = ({setStandardValue, standardValue, traduction}) => {
	const scrollRef = useHorizontalScroll();
	const scrollEffect = (e) => {
		let ratio = 2.5;
		if(e.target.getBoundingClientRect().width < 900) {
			let calcul = e.target.clientWidth/ratio - e.target.scrollLeft;
			if (calcul < `-${e.target.clientWidth/5}`) {
				e.target.style.transform = `translate3d(-${calcul}, 0px, 0px)`; 
			}
			else {
				e.target.style.transform = `translate3d(${calcul}px, 0px, 0px)`; 
			}
		}
	}
	return (
		<div className="patternList" onScroll={scrollEffect} ref={scrollRef}>
			<div className={standardValue.Interior === 'suede|blue' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Interior:'suede|blue'})}>
				<InteriorSuedeBlue />
				<span className="textAction">{traduction.SuedeBlue}</span>
			</div>
			<div className={standardValue.Interior === 'suede|black' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Interior:'suede|black'})}>
				<InteriorSuedeBlack />
				<span className="textAction">{traduction.SuedeBlack}</span>
			</div>
			<div className={standardValue.Interior === 'leather|brown' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Interior:'leather|brown'})}>
				<InteriorLeatherBrown />
				<span className="textAction">{traduction.LeatherBrown}</span>
			</div>
			<div className={standardValue.Interior === 'leather|black' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Interior:'leather|black'})}>
				<InteriorLeatherBlack />
				<span className="textAction">{traduction.LeatherBlack}</span>
			</div>
			<div className={standardValue.Interior === 'suede|beige' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Interior:'suede|beige'})}>
				<InteriorFabricBeige />
				<span className="textAction">{traduction.FabricBeige}</span>
			</div>
			<div className={standardValue.Interior === 'tartan|red' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Interior:'tartan|red'})}>
				<InteriorFabricTartanRed />
				<span className="textAction">{traduction.TartanRed}</span>
			</div>
			<div className={standardValue.Interior === 'tartan|white' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Interior:'tartan|white'})}>
				<InteriorFabricTartanWhite />
				<span className="textAction">{traduction.TartanWhite}</span>
			</div>
			<div className={standardValue.Interior === 'leather|red' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Interior:'leather|red'})}>
				<InteriorLeatherRed />
				<span className="textAction">{traduction.LeatherRed}</span>
			</div>
		</div>
	)
}

export default Interior;