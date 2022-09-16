import FullFrame from "../../svg/Frame/FullFrame";
import LightFrame from "../../svg/Frame/LightFrame";

const VisorFrame = ({setStandardValue,	standardValue}) => {
	return (
		<div className="frame">
			<div className="allScrew" /* onClick={()=>setStandardValue({...standardValue, Chinguard_design_type:'plain'})} */>
				<FullFrame />
				<span className="textAction">Full</span>
			</div>
			<div className="allScrew" /* onClick={()=>setStandardValue({...standardValue, Chinguard_design_type:'plain'})} */>
				<LightFrame />
				<span className="textAction">Light</span>
			</div>
		</div>
	)
}
export default VisorFrame;