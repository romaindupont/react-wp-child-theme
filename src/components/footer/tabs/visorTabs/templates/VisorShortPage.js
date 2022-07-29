import VisorShortBlack from "../../svg/VisorShort/VisorShortBlack";
import VisorShortBlue from "../../svg/VisorShort/VisorShortBlue";
import VisorShortChrome from "../../svg/VisorShort/VisorShortChrome";
import VisorShortSemi from "../../svg/VisorShort/VisorShortSemi";
import VisorShortTransparent from "../../svg/VisorShort/VisorShortTransparent";

const VisorShortPage = () => {
	return (
<div className="short_visor_page">
		<div className="allScrew">
			<VisorShortTransparent />
			<span className="textAction">Transparant</span>
		</div>
		<div className="allScrew">
			<VisorShortBlack />
			<span className="textAction">Black</span>
		</div>
		<div className="allScrew">
			<VisorShortBlue />
			<span className="textAction">Blue</span>
		</div>
		<div className="allScrew">
			<VisorShortChrome />
			<span className="textAction">Chrome</span>
		</div>
		<div className="allScrew">
			<VisorShortSemi />
			<span className="textAction">Semi</span>
		</div>
</div>
	)
}
export default VisorShortPage;