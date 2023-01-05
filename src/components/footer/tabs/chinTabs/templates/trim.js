import TrimBlackLeather from "../../svg/Trim/TrimBlackLeather";
import TrimBlackRubber from "../../svg/Trim/TrimBlackRubber";
import TrimBrownLeather from "../../svg/Trim/TrimBrownLeather";
import TrimWhiteRubber from "../../svg/Trim/TrimWhiteRubber";
import TrimBlueLeather from "../../svg/Trim/TrimBlueLeather";

const Trim = ({setStandardValue, standardValue, traduction, mySku, setMySku}) => {
	return (
		<div className="varnishList">
			<div className={standardValue.Chinguard_trim === 'leather|black' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Chinguard_trim:'leather|black'}) & setMySku({...mySku, position15: 'ctl'})}>
				<TrimBlackLeather />
				<span className="textAction">{traduction.BlackLeather}</span>
			</div>
			<div className={standardValue.Chinguard_trim === 'rubber|black' ? 'Select' : 'allScrew'}  onClick={()=>setStandardValue({...standardValue, Chinguard_trim:'rubber|black'}) & setMySku({...mySku, position15: 'xxx'})}>
				<TrimBlackRubber />
				<span className="textAction">{traduction.BlackRubber}</span>
			</div>
			<div className={standardValue.Chinguard_trim === 'leather|brown' ? 'Select' : 'allScrew'}  onClick={()=>setStandardValue({...standardValue, Chinguard_trim:'leather|brown'}) & setMySku({...mySku, position15: 'ctl'})}>
				<TrimBrownLeather />
				<span className="textAction">{traduction.BrownLeather}</span>
			</div>
			<div className={standardValue.Chinguard_trim === 'rubber|white' ? 'Select' : 'allScrew'}  onClick={()=>setStandardValue({...standardValue, Chinguard_trim:'rubber|white'}) & setMySku({...mySku, position15: 'xxx'})}>
				<TrimWhiteRubber />
				<span className="textAction">{traduction.WhiteRubber}</span>
			</div>
			<div className={standardValue.Chinguard_trim === 'leather|blue' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Chinguard_trim:'leather|blue'}) & setMySku({...mySku, position15: 'ctl'})}>
				<TrimBlueLeather />
				<span className="textAction">{traduction.BlueRubber}</span>
			</div>
		</div>
	)
}

export default Trim;