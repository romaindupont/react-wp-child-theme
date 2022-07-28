import FullFrame from "../../svg/Frame/FullFrame";
import LightFrame from "../../svg/Frame/LightFrame";

const VisorFrame = () => {
	return (
		<div class="frame">
			<div class="allScrew">
				<FullFrame />
				<span class="textAction">Full</span>
			</div>
			<div class="allScrew">
				<LightFrame />
				<span class="textAction">Light</span>
			</div>
		</div>
	)
}
export default VisorFrame;