import TrimBlackLeather from "../../svg/Trim/TrimBlackLeather";
import TrimBlackRubber from "../../svg/Trim/TrimBlackRubber";
import TrimBrownLeather from "../../svg/Trim/TrimBrownLeather";
import TrimWhiteRubber from "../../svg/Trim/TrimWhiteRubber";

const Trim = ({setStandardValue, standardValue, traduction}) => {
	return (
		<div className="varnishList">
			<div className={standardValue.Chinguard_trim === 'leather|black' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Chinguard_trim:'leather|black'})}>
				<TrimBlackLeather />
				<span className="textAction">{traduction.BlackLeather}</span>
			</div>
			<div className={standardValue.Chinguard_trim === 'rubber|black' ? 'Select' : 'allScrew'}  onClick={()=>setStandardValue({...standardValue, Chinguard_trim:'rubber|black'})}>
				<TrimBlackRubber />
				<span className="textAction">{traduction.BlackRubber}</span>
			</div>
			<div className={standardValue.Chinguard_trim === 'leather|brown' ? 'Select' : 'allScrew'}  onClick={()=>setStandardValue({...standardValue, Chinguard_trim:'leather|brown'})}>
				<TrimBrownLeather />
				<span className="textAction">{traduction.BrownLeather}</span>
			</div>
			<div className={standardValue.Chinguard_trim === 'rubber|white' ? 'Select' : 'allScrew'}  onClick={()=>setStandardValue({...standardValue, Chinguard_trim:'rubber|white'})}>
				<TrimWhiteRubber />
				<span className="textAction">{traduction.WhiteRubber}</span>
			</div>
		</div>
	)
}

export default Trim;