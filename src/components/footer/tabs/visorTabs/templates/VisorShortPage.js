import VisorShortBlack from "../../svg/VisorShort/VisorShortBlack";
import VisorShortBlue from "../../svg/VisorShort/VisorShortBlue";
import VisorShortChrome from "../../svg/VisorShort/VisorShortChrome";
import VisorShortSemi from "../../svg/VisorShort/VisorShortSemi";
import VisorShortTransparent from "../../svg/VisorShort/VisorShortTransparent";

const VisorShortPage = ({setStandardValue,	standardValue}) => {
	return (
<div className="short_visor_page">
		<div className={standardValue.Visor_color === 'clear' ? 'Select' : 'allScrew'}  onClick={()=>setStandardValue({...standardValue, Visor_color:'clear'})}>
			<VisorShortTransparent />
			<span className="textAction">Transparant</span>
		</div>
		<div className={standardValue.Visor_color === 'black' ? 'Select' : 'allScrew'}  onClick={()=>setStandardValue({...standardValue, Visor_color:'black'})}>
			<VisorShortBlack />
			<span className="textAction">Black</span>
		</div>
		<div className={standardValue.Visor_color === 'chrome_blue' ? 'Select' : 'allScrew'}  onClick={()=>setStandardValue({...standardValue, Visor_color:'chrome_blue'})}>
			<VisorShortBlue />
			<span className="textAction">Blue</span>
		</div>
		<div className={standardValue.Visor_color === 'chrome_silver' ? 'Select' : 'allScrew'}  onClick={()=>setStandardValue({...standardValue, Visor_color:'chrome_silver'})}>
			<VisorShortChrome />
			<span className="textAction">Chrome</span>
		</div>
		<div className={standardValue.Visor_color === 'smoke' ? 'Select' : 'allScrew'}  onClick={()=>setStandardValue({...standardValue, Visor_color:'smoke'})}>
			<VisorShortSemi />
			<span className="textAction">Semi</span>
		</div>
</div>
	)
}
export default VisorShortPage;