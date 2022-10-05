import FullFrame from "../../svg/Frame/FullFrame";
import LightFrame from "../../svg/Frame/LightFrame";

const VisorFrame = ({setStandardValue,	standardValue, traduction}) => {
	return (
		<div className="frame">
			<div className={standardValue.Visor_frame === 'full' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Visor_frame:'full'})}>
				<FullFrame />
				<span className="textAction">{traduction.VisorFrameFull}</span>
			</div>
			<div className={standardValue.Visor_frame === 'light' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Visor_frame:'light'})}>
				<LightFrame />
				<span className="textAction">{traduction.VisorFrameLight}</span>
			</div>
		</div>
	)
}
export default VisorFrame;