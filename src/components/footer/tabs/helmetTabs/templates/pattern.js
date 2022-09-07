import PatternShellBand from "../../svg/PatternShell/PatternShellBand";
import PatternShellChecker from "../../svg/PatternShell/PatternShellChecker";
import PatternShellChester from "../../svg/PatternShell/PatternShellChester";
import PatternShellContour from "../../svg/PatternShell/PatternShellContour";
import PatternShellDots from "../../svg/PatternShell/PatternShellDots";
import PatternShellDual from "../../svg/PatternShell/PatternShellDual";
import PatternShellExtend from "../../svg/PatternShell/PatternShellExtend";
import PatternShellGradient from "../../svg/PatternShell/PatternShellGradient";
import PatternShellHalf from "../../svg/PatternShell/PatternShellHalf";
import PatternShellHorizontal from "../../svg/PatternShell/PatternShellHorizontal";
import PatternShellOutline from "../../svg/PatternShell/PatternShellOutline";
import PatternShellParabol from "../../svg/PatternShell/PatternShellParabol";
import PatternShellPlain from "../../svg/PatternShell/PatternShellPlain";
import PatternShellStars from "../../svg/PatternShell/PatternShellStars";
import PatternShellVertical from "../../svg/PatternShell/PatternShellVertical";
import { useHorizontalScroll } from "../../../../../../utils/useHorizontalScroll";

const Pattern = ({setStandardValue, standardValue}) => {
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
		<div className="patternList" onScroll={scrollEffect} ref={scrollRef} style={{ overflow: "auto" }}>
			<div className="allScrew" onClick={()=>setStandardValue({...standardValue, Helmet_design:'band'})}>
				<PatternShellBand />
				<span className="textAction">Band</span>
			</div>
			<div className="allScrew" onClick={()=>setStandardValue({...standardValue, Helmet_design:'checker'})}>
				<PatternShellChecker />
				<span className="textAction">Checker</span>
			</div>
			<div className="allScrew" onClick={()=>setStandardValue({...standardValue, Helmet_design:'chester'})}>
				<PatternShellChester />
				<span className="textAction">Chester</span>
			</div>
			<div className="allScrew" onClick={()=>setStandardValue({...standardValue, Helmet_design:'around'})}>
				<PatternShellContour />
				<span className="textAction">Around</span>
			</div>
			<div className="allScrew" onClick={()=>setStandardValue({...standardValue, Helmet_design:'dots'})}>
				<PatternShellDots />
				<span className="textAction">Dots</span>
			</div>
			<div className="allScrew" onClick={()=>setStandardValue({...standardValue, Helmet_design:'dual'})}>
				<PatternShellDual />
				<span className="textAction">Dual</span>
			</div>
			<div className="allScrew" onClick={()=>setStandardValue({...standardValue, Helmet_design:'extend'})}>
				<PatternShellExtend />
				<span className="textAction">Extend</span>
			</div>
			<div className="allScrew" onClick={()=>setStandardValue({...standardValue, Helmet_design:'gradient'})}>
				<PatternShellGradient />
				<span className="textAction">Gradient</span>
			</div>
			<div className="allScrew" onClick={()=>setStandardValue({...standardValue, Helmet_design:'half'})}>
				<PatternShellHalf />
				<span className="textAction">Half</span>
			</div>
			<div className="allScrew" onClick={()=>setStandardValue({...standardValue, Helmet_design:'horizontal'})}>
				<PatternShellHorizontal />
				<span className="textAction">Horizontal</span>
			</div>
			<div className="allScrew" onClick={()=>setStandardValue({...standardValue, Helmet_design:'outline'})}>
				<PatternShellOutline />
				<span className="textAction">Outline</span>
			</div>
			<div className="allScrew" onClick={()=>setStandardValue({...standardValue, Helmet_design:'parabol'})}>
				<PatternShellParabol />
				<span className="textAction">Parabol</span>
			</div>
			<div className="allScrew" onClick={()=>setStandardValue({...standardValue, Helmet_design:'plain'})}>
				<PatternShellPlain />
				<span className="textAction">Plain</span>
			</div>
			<div className="allScrew" onClick={()=>setStandardValue({...standardValue, Helmet_design:'stars'})}>
				<PatternShellStars />
				<span className="textAction">Stars</span>
			</div>
			<div className="allScrew" onClick={()=>setStandardValue({...standardValue, Helmet_design:'vertical'})}>
				<PatternShellVertical />
				<span className="textAction">Vertical</span>
			</div>
		</div>
	)
}

export default Pattern;