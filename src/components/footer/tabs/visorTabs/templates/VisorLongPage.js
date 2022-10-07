import VisorLongBlack from "../../svg/VisorLong/VisorLongBlack";
import VisorLongBlue from "../../svg/VisorLong/VisorLongBlue";
import VisorLongChrome from "../../svg/VisorLong/VisorLongChrome";
import VisorLongSemi from "../../svg/VisorLong/VisorLongSemi";
import VisorLongTransparent from "../../svg/VisorLong/VisorLongTransparent";
import { useHorizontalScroll } from "../../../../../../utils/useHorizontalScroll";

const VisorLongPage = ({setStandardValue,	standardValue, traduction}) => {
	const scrollRef = useHorizontalScroll();
	const scrollEffect = (e) => {
		let ratio = 4.5;
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
			<div className={standardValue.Visor_color === 'clear' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Visor_color:'clear'})}>
				<VisorLongTransparent />
				<span className="textAction">{traduction.Transparant}</span>
			</div>
			<div className={standardValue.Visor_color === 'black' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Visor_color:'black'})}>
				<VisorLongBlack />
				<span className="textAction">{traduction.Black}</span>
			</div>
			<div className={standardValue.Visor_color === 'chrome_blue' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Visor_color:'chrome_blue'})}>
				<VisorLongBlue />
				<span className="textAction">{traduction.Blue}</span>
			</div>
			<div className={standardValue.Visor_color === 'chrome_silver' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Visor_color:'chrome_silver'})}>
				<VisorLongChrome />
				<span className="textAction">{traduction.Chrome}</span>
			</div>
			<div className={standardValue.Visor_color === 'smoke' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Visor_color:'smoke'})}>
				<VisorLongSemi />
				<span className="textAction">{traduction.Semi}</span>
			</div>
		</div>
	)
}
export default VisorLongPage;