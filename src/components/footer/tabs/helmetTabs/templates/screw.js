import ScrewAll from "../../svg/Screw/ScrewAll";
import ScrewBottom from "../../svg/Screw/ScrewBottom";
import ScrewNone from "../../svg/Screw/ScrewNone";
import ScrewTop from "../../svg/Screw/ScrewTop";
const { useEffect } = wp.element;
import ScrewFunction from "../../../../body/Helmet/screw";

const Screw = ({setScrewPosition}) => {

	return (
		<div className="pickerScrew">
			<div className="allScrew" onClick={()=>setScrewPosition('none')}>
				<ScrewNone />
				<span className="textAction">None</span>
			</div>
			<div className="allScrew" onClick={()=>setScrewPosition('bottom')}>
				<ScrewBottom />
				<span className="textAction">Bottom</span>
			</div>
			<div className="allScrew" onClick={()=>setScrewPosition('top')}>
				<ScrewTop />
				<span className="textAction">Top</span>
			</div>
			<div className="allScrew" onClick={()=>setScrewPosition('all')}>
				<ScrewAll />
				<span className="textAction">All</span>
			</div>
		</div>
	)
}

export default Screw;