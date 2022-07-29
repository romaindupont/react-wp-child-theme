import VisorLongBlack from "../../svg/VisorLong/VisorLongBlack";
import VisorLongBlue from "../../svg/VisorLong/VisorLongBlue";
import VisorLongChrome from "../../svg/VisorLong/VisorLongChrome";
import VisorLongSemi from "../../svg/VisorLong/VisorLongSemi";
import VisorLongTransparent from "../../svg/VisorLong/VisorLongTransparent";

const VisorLongPage = () => {
	return (
<div className="long_visor_page">
	<div className="allScrew">
		<VisorLongTransparent />
		<span className="textAction">Transparant</span>
	</div>
	<div className="allScrew">
		<VisorLongBlack />
		<span className="textAction">Black</span>
	</div>
	<div className="allScrew">
		<VisorLongBlue />
		<span className="textAction">Blue</span>
	</div>
	<div className="allScrew">
		<VisorLongChrome />
		<span className="textAction">Chrome</span>
	</div>
	<div className="allScrew">
		<VisorLongSemi />
		<span className="textAction">Semi</span>
	</div>
</div>
	)
}
export default VisorLongPage;