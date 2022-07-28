import ScrewAll from "../../svg/Screw/ScrewAll";
import ScrewBottom from "../../svg/Screw/ScrewBottom";
import ScrewNone from "../../svg/Screw/ScrewNone";
import ScrewTop from "../../svg/Screw/ScrewTop";

const Screw = () => {
	return (
		<div className="pickerScrew">
			<div className="allScrew">
				<ScrewNone />
				<span className="textAction">None</span>
			</div>
			<div className="allScrew">
				<ScrewBottom />
				<span className="textAction">Bottom</span>
			</div>
			<div className="allScrew">
				<ScrewTop />
				<span className="textAction">Top</span>
			</div>
			<div className="allScrew">
				<ScrewAll />
				<span className="textAction">All</span>
			</div>
		</div>
	)
}

export default Screw;