import TrimBlackLeather from "../../svg/Trim/TrimBlackLeather";
import TrimBlackRubber from "../../svg/Trim/TrimBlackRubber";
import TrimBlueLeather from "../../svg/Trim/TrimBlueLeather";
import TrimBrownLeather from "../../svg/Trim/TrimBrownLeather";
import TrimWhiteRubber from "../../svg/Trim/TrimWhiteRubber";
import { useHorizontalScroll } from "../../../../../../utils/useHorizontalScroll";

const Trim = ({setStandardValue, standardValue, traduction}) => {
	const scrollRef = useHorizontalScroll();
	const scrollEffect = (e) => {
		let ratio = 3.5;
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
			<div className={standardValue.Helmet_trim === 'leather|black' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_trim:'leather|black'})}>
				<TrimBlackLeather />
				<span className="textAction">{traduction.BlackLeather}</span>
			</div>
			<div className={standardValue.Helmet_trim === 'rubber|black' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_trim:'rubber|black'})}>
				<TrimBlackRubber />
				<span className="textAction">{traduction.BlackRubber}</span>
			</div>
			<div className={standardValue.Helmet_trim === 'leather|brown' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_trim:'leather|brown'})}>
				<TrimBrownLeather />
				<span className="textAction">{traduction.BrownLeather}</span>
			</div>
			<div className={standardValue.Helmet_trim === 'rubber|white' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_trim:'rubber|white'})}>
				<TrimWhiteRubber />
				<span className="textAction">{traduction.WhiteRubber}</span>
			</div>
			<div className={standardValue.Helmet_trim === 'rubber|blue' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_trim:'rubber|blue'})}>
				<TrimBlueLeather />
				<span className="textAction">{traduction.BlueRubber}</span>
			</div>
		</div>
	)
}

export default Trim;