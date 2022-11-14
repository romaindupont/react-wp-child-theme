import TrimBlackLeather from "../../svg/Trim/TrimBlackLeather";
import TrimBlackRubber from "../../svg/Trim/TrimBlackRubber";
import TrimBrownLeather from "../../svg/Trim/TrimBrownLeather";
import TrimWhiteRubber from "../../svg/Trim/TrimWhiteRubber";

const Trim = ({setStandardValue, standardValue, traduction}) => {
	return (
		<div className="varnishList">
			<div className={standardValue.Helmet_trim === 'leather_black' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_trim:'leather_black'})}>
				<TrimBlackLeather />
				<span className="textAction">{traduction.BlackLeather}</span>
			</div>
			<div className={standardValue.Helmet_trim === 'rubber_black' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_trim:'rubber_black'})}>
				<TrimBlackRubber />
				<span className="textAction">{traduction.BlackRubber}</span>
			</div>
			<div className={standardValue.Helmet_trim === 'leather_brown' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_trim:'leather_brown'})}>
				<TrimBrownLeather />
				<span className="textAction">{traduction.BrownLeather}</span>
			</div>
			<div className={standardValue.Helmet_trim === 'rubber_white' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_trim:'rubber_white'})}>
				<TrimWhiteRubber />
				<span className="textAction">{traduction.WhiteRubber}</span>
			</div>
		</div>
	)
}

export default Trim;