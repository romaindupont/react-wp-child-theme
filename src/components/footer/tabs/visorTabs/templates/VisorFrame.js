import FullFrame from "../../svg/Frame/FullFrame";
import LightFrame from "../../svg/Frame/LightFrame";

const VisorFrame = () => {
	return (
		<div className="frame">
			<div className="allScrew">
				<FullFrame />
				<span className="textAction">Full</span>
			</div>
			<div className="allScrew">
				<LightFrame />
				<span className="textAction">Light</span>
			</div>
		</div>
	)
}
export default VisorFrame;