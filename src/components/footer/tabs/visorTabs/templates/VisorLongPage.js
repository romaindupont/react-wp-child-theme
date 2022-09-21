import VisorLongBlack from "../../svg/VisorLong/VisorLongBlack";
import VisorLongBlue from "../../svg/VisorLong/VisorLongBlue";
import VisorLongChrome from "../../svg/VisorLong/VisorLongChrome";
import VisorLongSemi from "../../svg/VisorLong/VisorLongSemi";
import VisorLongTransparent from "../../svg/VisorLong/VisorLongTransparent";

const VisorLongPage = ({setStandardValue,	standardValue}) => {
	return (
<div className="long_visor_page">
	<div className={standardValue.Visor_color === 'clear' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Visor_color:'clear'})}>
		<VisorLongTransparent />
		<span className="textAction">Transparant</span>
	</div>
	<div className={standardValue.Visor_color === 'black' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Visor_color:'black'})}>
		<VisorLongBlack />
		<span className="textAction">Black</span>
	</div>
	<div className={standardValue.Visor_color === 'chrome_blue' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Visor_color:'chrome_blue'})}>
		<VisorLongBlue />
		<span className="textAction">Blue</span>
	</div>
	<div className={standardValue.Visor_color === 'chrome_silver' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Visor_color:'chrome_silver'})}>
		<VisorLongChrome />
		<span className="textAction">Chrome</span>
	</div>
	<div className={standardValue.Visor_color === 'smoke' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Visor_color:'smoke'})}>
		<VisorLongSemi />
		<span className="textAction">Semi</span>
	</div>
</div>
	)
}
export default VisorLongPage;