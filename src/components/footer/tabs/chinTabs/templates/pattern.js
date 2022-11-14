import { useHorizontalScroll } from "../../../../../../utils/useHorizontalScroll";
import PatternChinBand from "../../svg/PatternChin/PatternChinBand";
import PatternChinChecker from "../../svg/PatternChin/PatternChinChecker";
import PatternChinContour from "../../svg/PatternChin/PatternChinContour";
import PatternChinDots from "../../svg/PatternChin/PatternChinDots";
import PatternChinDual from "../../svg/PatternChin/PatternChinDual";
import PatternChinExtend from "../../svg/PatternChin/PatternChinExtend";
import PatternChinHalf from "../../svg/PatternChin/PatternChinHalf";
import PatternChinOutline from "../../svg/PatternChin/PatternChinOutline";
import PatternChinParabol from "../../svg/PatternChin/PatternChinParabol";
import PatternChinPlain from "../../svg/PatternChin/PatternChinPlain";
import PatternChinStars from "../../svg/PatternChin/PatternChinStars";

const Pattern = ({setStandardValue,	standardValue, traduction}) => {
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
		<div className="pickerScrew" onScroll={scrollEffect} ref={scrollRef} >
			<div className={standardValue.Chinguard_design === 'band' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Chinguard_design:'band'})}>
				<PatternChinBand />
				<span className="textAction">{traduction.Band}</span>
			</div>
			<div className={standardValue.Chinguard_design === 'checker' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Chinguard_design:'checker'})}>
				<PatternChinChecker />
				<span className="textAction">{traduction.Checker}</span>
			</div>
			<div className={standardValue.Chinguard_design === 'contour' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Chinguard_design:'contour'})}>
				<PatternChinContour />
				<span className="textAction">{traduction.Around}</span>
			</div>
			<div className={standardValue.Chinguard_design === 'dots' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Chinguard_design:'dots'})}>
				<PatternChinDots />
				<span className="textAction">{traduction.Dots}</span>
			</div>
			<div className={standardValue.Chinguard_design === 'dual' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Chinguard_design:'dual'})}>
				<PatternChinDual />
				<span className="textAction">{traduction.Dual}</span>
			</div>
			<div className={standardValue.Chinguard_design === 'extend' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Chinguard_design:'extend'})}>
				<PatternChinExtend />
				<span className="textAction">{traduction.Extend}</span>
			</div>
			<div className={standardValue.Chinguard_design === 'half' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Chinguard_design:'half'})}>
				<PatternChinHalf />
				<span className="textAction">{traduction.Half}</span>
			</div>
			<div className={standardValue.Chinguard_design === 'outline' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Chinguard_design:'outline'})}>
				<PatternChinOutline />
				<span className="textAction">{traduction.Outline}</span>
			</div>
			<div className={standardValue.Chinguard_design === 'parabol' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Chinguard_design:'parabol'})}>
				<PatternChinParabol />
				<span className="textAction">{traduction.Parabol}</span>
			</div>
			<div className={standardValue.Chinguard_design === 'plain' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Chinguard_design:'plain'})}>
				<PatternChinPlain />
				<span className="textAction">{traduction.Plain}</span>
			</div>
			<div className={standardValue.Chinguard_design === 'star' ? 'Select' : 'allScrew'} onClick={()=>setStandardValue({...standardValue, Chinguard_design:'star'})}>
				<PatternChinStars />
				<span className="textAction">{traduction.Stars}</span>
			</div>
		</div>
	)
}

export default Pattern;