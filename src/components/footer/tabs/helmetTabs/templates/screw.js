import ScrewAll from "../../svg/Screw/ScrewAll";
import ScrewBottom from "../../svg/Screw/ScrewBottom";
import ScrewNone from "../../svg/Screw/ScrewNone";
import ScrewTop from "../../svg/Screw/ScrewTop";

const Screw = ({setScrewPosition, screwPosition, traduction}) => {
	return (
		<div className="pickerScrew">
			<div className={screwPosition === 'none' ? 'Select' : 'allScrew'} onClick={() => setScrewPosition('none')}>
				<ScrewNone />
				<span className="textAction">{traduction.None}</span>
			</div>
			<div className={screwPosition === 'bottom' ? 'Select' : 'allScrew'} onClick={() => setScrewPosition('bottom')}>
				<ScrewBottom />
				<span className="textAction">{traduction.Bottom}</span>
			</div>
			<div className={screwPosition === 'top' ? 'Select' : 'allScrew'} onClick={() => setScrewPosition('top')}>
				<ScrewTop />
				<span className="textAction">{traduction.Top}</span>
			</div>
			<div className={screwPosition === 'all' ? 'Select' : 'allScrew'} onClick={() => setScrewPosition('all')}>
				<ScrewAll />
				<span className="textAction">{traduction.All}</span>
			</div>
		</div>
	)
}

export default Screw;