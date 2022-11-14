import FullFrame from "../../svg/Frame/FullFrame";
import LightFrame from "../../svg/Frame/LightFrame";

const VisorFrame = ({setStandardValue,	standardValue, traduction}) => {
	return (
		<div className="colorListType">
			<span className={standardValue.Visor_frame === 'full' ? 'selectButton' : 'buttonChoice'} onClick={() => setStandardValue({...standardValue, Visor_frame:'full'})}>{traduction.VisorFrameFull}</span>
			<span className={standardValue.Visor_frame === 'light' ? 'selectButton' : 'buttonChoice'} onClick={() => setStandardValue({...standardValue, Visor_frame:'light'})}>{traduction.VisorFrameLight}</span>
		</div>
	)
}
export default VisorFrame;