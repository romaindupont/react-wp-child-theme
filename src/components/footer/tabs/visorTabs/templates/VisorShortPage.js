import VisorShortBlack from "../../svg/VisorShort/VisorShortBlack";
import VisorShortBlue from "../../svg/VisorShort/VisorShortBlue";
import VisorShortChrome from "../../svg/VisorShort/VisorShortChrome";
import VisorShortSemi from "../../svg/VisorShort/VisorShortSemi";
import VisorShortTransparent from "../../svg/VisorShort/VisorShortTransparent";
import { useHorizontalScroll } from "../../../../../../utils/useHorizontalScroll";

const VisorShortPage = ({setStandardValue,	standardValue, traduction}) => {
	const scrollRef = useHorizontalScroll();
	const scrollEffect = (e) => {
		let ratio = 2.5;
		if(e.target.getBoundingClientRect().width < 900) {
			let calcul = e.target.clientWidth/ratio - e.target.scrollLeft;
			if (calcul < `-${e.target.clientWidth/5}`) {
				e.target.style.transform = `translate3d(-${calcul}, 0px, 0px)`; 
			}
			else {
				e.target.style.transform = `translate3d(${calcul}px, 0px, 0px)`; 
			}
		}
	}
	return (
<div className="visorPage" onScroll={scrollEffect} ref={scrollRef}>
		<div className={standardValue.Visor_color === 'clear' ? 'Select' : 'allScrew'}  onClick={()=>setStandardValue({...standardValue, Visor_color:'clear'})}>
			<VisorShortTransparent />
			<span className="textAction">{traduction.Transparant}</span>
		</div>
		<div className={standardValue.Visor_color === 'black' ? 'Select' : 'allScrew'}  onClick={()=>setStandardValue({...standardValue, Visor_color:'black'})}>
			<VisorShortBlack />
			<span className="textAction">{traduction.Black}</span>
		</div>
		<div className={standardValue.Visor_color === 'chrome_blue' ? 'Select' : 'allScrew'}  onClick={()=>setStandardValue({...standardValue, Visor_color:'chrome_blue'})}>
			<VisorShortBlue />
			<span className="textAction">{traduction.Blue}</span>
		</div>
		<div className={standardValue.Visor_color === 'chrome_silver' ? 'Select' : 'allScrew'}  onClick={()=>setStandardValue({...standardValue, Visor_color:'chrome_silver'})}>
			<VisorShortChrome />
			<span className="textAction">{traduction.Chrome}</span>
		</div>
		<div className={standardValue.Visor_color === 'smoke' ? 'Select' : 'allScrew'}  onClick={()=>setStandardValue({...standardValue, Visor_color:'smoke'})}>
			<VisorShortSemi />
			<span className="textAction">{traduction.Semi}</span>
		</div>
</div>
	)
}
export default VisorShortPage;