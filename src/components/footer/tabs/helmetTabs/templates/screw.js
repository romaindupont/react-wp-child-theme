import ScrewAll from "../../svg/Screw/ScrewAll";
import ScrewBottom from "../../svg/Screw/ScrewBottom";
import ScrewNone from "../../svg/Screw/ScrewNone";
import ScrewTop from "../../svg/Screw/ScrewTop";

const Screw = ({setScrewPosition, screwPosition}) => {
	return (
		<div className="pickerScrew">
			<div className={screwPosition === 'none' ? 'Select' : 'allScrew'} onClick={() => setScrewPosition('none')}>
				<ScrewNone />
				<span className="textAction">None</span>
			</div>
			<div className={screwPosition === 'bottom' ? 'Select' : 'allScrew'} onClick={() => setScrewPosition('bottom')}>
				<ScrewBottom />
				<span className="textAction">Bottom</span>
			</div>
			<div className={screwPosition === 'top' ? 'Select' : 'allScrew'} onClick={() => setScrewPosition('top')}>
				<ScrewTop />
				<span className="textAction">Top</span>
			</div>
			<div className={screwPosition === 'all' ? 'Select' : 'allScrew'} onClick={() => setScrewPosition('all')}>
				<ScrewAll />
				<span className="textAction">All</span>
			</div>
		</div>
	)
}

export default Screw;