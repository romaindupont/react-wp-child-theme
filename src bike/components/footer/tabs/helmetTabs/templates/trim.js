import TrimBlackLeather from "../../svg/Trim/TrimBlackLeather";
import TrimBlackRubber from "../../svg/Trim/TrimBlackRubber";
import TrimBlueLeather from "../../svg/Trim/TrimBlueLeather";
import TrimBrownLeather from "../../svg/Trim/TrimBrownLeather";
import TrimWhiteRubber from "../../svg/Trim/TrimWhiteRubber";

const Trim = ({setStandardValue, standardValue, traduction, mySku, setMySku}) => {

	return (
		<div className="pickerScrew">
			<div className={standardValue.Helmet_trim === 'rubber|black' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_trim:'rubber|black'}) & setMySku({...mySku, position6: 'xxx'})}>
				<TrimBlackRubber />
				<span className="textAction">{traduction.BlackRubber}</span>
			</div>
			<div className={standardValue.Helmet_trim === 'rubber|white' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_trim:'rubber|white'}) & setMySku({...mySku, position6: 'xxx'})}>
				<TrimWhiteRubber />
				<span className="textAction">{traduction.WhiteRubber}</span>
			</div>
			<div className={standardValue.Helmet_trim === 'leather|black' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_trim:'leather|black'}) & setMySku({...mySku, position6: 'htl'})}>
				<TrimBlackLeather />
				<span className="textAction">{traduction.BlackLeather}</span>
			</div>
			<div className={standardValue.Helmet_trim === 'leather|brown' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_trim:'leather|brown'}) & setMySku({...mySku, position6: 'htl'})}>
				<TrimBrownLeather />
				<span className="textAction">{traduction.BrownLeather}</span>
			</div>
			<div className={standardValue.Helmet_trim === 'leather|blue' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_trim:'leather|blue'}) & setMySku({...mySku, position6: 'htl'})}>
				<TrimBlueLeather />
				<span className="textAction">{traduction.BlueRubber}</span>
			</div>
		</div>
	)
}

export default Trim;