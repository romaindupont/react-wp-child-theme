import FullFrame from "../../svg/Frame/FullFrame";
import LightFrame from "../../svg/Frame/LightFrame";

const VisorFrame = ({setStandardValue,	standardValue}) => {
	return (
		<div className="frame">
			<div className={standardValue.Visor_frame === 'full' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Visor_frame:'full'})}>
				<FullFrame />
				<span className="textAction">Full</span>
			</div>
			<div className={standardValue.Visor_frame === 'light' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Visor_frame:'light'})}>
				<LightFrame />
				<span className="textAction">Light</span>
			</div>
		</div>
	)
}
export default VisorFrame;