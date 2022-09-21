import TrimBlackLeather from "../../svg/Trim/TrimBlackLeather";
import TrimBlackRubber from "../../svg/Trim/TrimBlackRubber";
import TrimBrownLeather from "../../svg/Trim/TrimBrownLeather";
import TrimWhiteRubber from "../../svg/Trim/TrimWhiteRubber";

const Trim = ({setStandardValue, standardValue}) => {
	return (
		<div className="varnishList">
			<div className={standardValue.Chinguard_trim === 'leather_black' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Chinguard_trim:'leather_black'})}>
				<TrimBlackLeather />
				<span className="textAction">Black Leather</span>
			</div>
			<div className={standardValue.Chinguard_trim === 'rubber_black' ? 'Select' : 'allScrew'}  onClick={()=>setStandardValue({...standardValue, Chinguard_trim:'rubber_black'})}>
				<TrimBlackRubber />
				<span className="textAction">Black Rubber</span>
			</div>
			<div className={standardValue.Chinguard_trim === 'leather_brown' ? 'Select' : 'allScrew'}  onClick={()=>setStandardValue({...standardValue, Chinguard_trim:'leather_brown'})}>
				<TrimBrownLeather />
				<span className="textAction">Brown Leather</span>
			</div>
			<div className={standardValue.Chinguard_trim === 'rubber_white' ? 'Select' : 'allScrew'}  onClick={()=>setStandardValue({...standardValue, Chinguard_trim:'rubber_white'})}>
				<TrimWhiteRubber />
				<span className="textAction">White Rubber</span>
			</div>
		</div>
	)
}

export default Trim;