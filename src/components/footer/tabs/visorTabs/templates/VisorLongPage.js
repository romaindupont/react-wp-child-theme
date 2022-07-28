import VisorLongBlack from "../../svg/VisorLong/VisorLongBlack";
import VisorLongBlue from "../../svg/VisorLong/VisorLongBlue";
import VisorLongChrome from "../../svg/VisorLong/VisorLongChrome";
import VisorLongSemi from "../../svg/VisorLong/VisorLongSemi";
import VisorLongTransparent from "../../svg/VisorLong/VisorLongTransparent";

const VisorLongPage = () => {
	return (
<div class="long_visor_page">
	<div class="allScrew">
		<VisorLongTransparent />
		<span class="textAction">Transparant</span>
	</div>
	<div class="allScrew">
		<VisorLongBlack />
		<span class="textAction">Black</span>
	</div>
	<div class="allScrew">
		<VisorLongBlue />
		<span class="textAction">Blue</span>
	</div>
	<div class="allScrew">
		<VisorLongChrome />
		<span class="textAction">Chrome</span>
	</div>
	<div class="allScrew">
		<VisorLongSemi />
		<span class="textAction">Semi</span>
	</div>
</div>
	)
}
export default VisorLongPage;