import TrimBlackLeather from "../../svg/Trim/TrimBlackLeather";
import TrimBlackRubber from "../../svg/Trim/TrimBlackRubber";
import TrimBrownLeather from "../../svg/Trim/TrimBrownLeather";
import TrimWhiteRubber from "../../svg/Trim/TrimWhiteRubber";

const Trim = () => {
	return (
		<div className="varnishList">
			<div className="allScrew">
				<TrimBlackLeather />
				<span className="textAction">Black Leather</span>
			</div>
			<div className="allScrew">
				<TrimBlackRubber />
				<span className="textAction">Black Rubber</span>
			</div>
			<div className="allScrew">
				<TrimBrownLeather />
				<span className="textAction">Brown Leather</span>
			</div>
			<div className="allScrew">
				<TrimWhiteRubber />
				<span className="textAction">White Rubber</span>
			</div>
		</div>
	)
}

export default Trim;